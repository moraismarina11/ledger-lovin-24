import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { formatCurrency, formatShort } from "./shared";
import { fornecedoresDataJan, fornecedoresDataFev, fornecedoresDataS7 } from "./agingData";
import { clientesDataJan, clientesDataFev, clientesDataS7 } from "./agingData";
import type { FornecedorCompany, ClienteCompany } from "./agingData";

/* ── helpers ── */
const sumFornecedores = (data: FornecedorCompany[]) =>
  data.reduce((s, c) => s + c.total, 0);

const sumClientes = (data: ClienteCompany[]) =>
  data.reduce((s, c) => s + c.aberto, 0);

const sumCaucao = (data: ClienteCompany[]) =>
  data.reduce((s, c) => s + (c.caucao ?? 0), 0);

const sumMulta = (data: ClienteCompany[]) =>
  data.reduce((s, c) => s + (c.multa ?? 0), 0);

/* ── Março / Total Acumulado values from Aging tabs (full data, not Top 10) ── */
const MARCO_TOTAL_FORNECEDORES = -82766349.10; // Aging Fornecedores Total Geral
const MARCO_TOTAL_CLIENTES = 262348088.98;     // Resumo aging total Total Geral
const MARCO_TOTAL_CAUCAO = 39167579.26;        // Posição Clientes col G
const MARCO_TOTAL_MULTAS = 6438733.72;         // Não altera

/* Build per-company comparison data */
const allCompanies = Array.from(
  new Set([
    ...fornecedoresDataJan.map((c) => c.company),
    ...fornecedoresDataFev.map((c) => c.company),
    ...fornecedoresDataS7.map((c) => c.company),
    ...clientesDataJan.map((c) => c.company),
    ...clientesDataFev.map((c) => c.company),
    ...clientesDataS7.map((c) => c.company),
  ])
);

interface PeriodBlock {
  label: string;
  fornData: FornecedorCompany[];
  cliData: ClienteCompany[];
  /* Override totals for Março/Total (from Aging, not Posição Top 10) */
  overrideTotals?: {
    fornecedores: number;
    clientes: number;
    caucao: number;
    multas: number;
  };
}

const marcoOverride = {
  fornecedores: MARCO_TOTAL_FORNECEDORES,
  clientes: MARCO_TOTAL_CLIENTES,
  caucao: MARCO_TOTAL_CAUCAO,
  multas: MARCO_TOTAL_MULTAS,
};

const periods: PeriodBlock[] = [
  { label: "Janeiro", fornData: fornecedoresDataJan, cliData: clientesDataJan },
  { label: "Fevereiro", fornData: fornecedoresDataFev, cliData: clientesDataFev },
  { label: "Março", fornData: fornecedoresDataS7, cliData: clientesDataS7, overrideTotals: marcoOverride },
  { label: "Total Acumulado", fornData: fornecedoresDataS7, cliData: clientesDataS7, overrideTotals: marcoOverride },
];

const getFornTotal = (p: PeriodBlock) => p.overrideTotals ? p.overrideTotals.fornecedores : sumFornecedores(p.fornData);
const getCliTotal = (p: PeriodBlock) => p.overrideTotals ? p.overrideTotals.clientes : sumClientes(p.cliData);
const getCaucaoTotal = (p: PeriodBlock) => p.overrideTotals ? p.overrideTotals.caucao : sumCaucao(p.cliData);
const getMultaTotal = (p: PeriodBlock) => p.overrideTotals ? p.overrideTotals.multas : sumMulta(p.cliData);

/* ── component ── */
const ResumoTab = () => {
  const fornBarData = allCompanies.map((co) => ({
    company: co,
    "Janeiro": fornecedoresDataJan.find((c) => c.company === co)?.total ?? 0,
    "Fevereiro": fornecedoresDataFev.find((c) => c.company === co)?.total ?? 0,
    "Março": fornecedoresDataS7.find((c) => c.company === co)?.total ?? 0,
  }));

  const cliBarData = allCompanies.map((co) => ({
    company: co,
    "Janeiro": clientesDataJan.find((c) => c.company === co)?.aberto ?? 0,
    "Fevereiro": clientesDataFev.find((c) => c.company === co)?.aberto ?? 0,
    "Março": clientesDataS7.find((c) => c.company === co)?.aberto ?? 0,
  }));

  return (
    <div className="space-y-8">
      <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
        <h2 className="text-2xl font-bold italic text-primary mb-6">Resumo Geral</h2>

        {/* Period summary cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {periods.map((p) => {
            const totalForn = getFornTotal(p);
            const totalCli = getCliTotal(p);
            const totalCaucao = getCaucaoTotal(p);
            const totalMulta = getMultaTotal(p);
            const saldo = totalCli + totalCaucao + totalMulta + totalForn; // fornecedores is negative
            return (
              <div key={p.label} className="bg-muted/40 rounded-xl border border-border p-5">
                <h3 className="text-sm font-bold text-primary mb-3">{p.label}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Fornecedores</span>
                    <span className="font-semibold text-destructive">{formatCurrency(totalForn)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Clientes (Aberto)</span>
                    <span className="font-semibold text-green-600">{formatCurrency(totalCli)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Caução</span>
                    <span className="font-semibold text-foreground">{formatCurrency(totalCaucao)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Multas</span>
                    <span className="font-semibold text-foreground">{formatCurrency(totalMulta)}</span>
                  </div>
                  <div className="border-t border-border pt-2 flex justify-between font-bold">
                    <span className="text-muted-foreground">Saldo Líquido</span>
                    <span className={saldo >= 0 ? "text-green-600" : "text-destructive"}>
                      {formatCurrency(saldo)}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fornecedores comparison chart */}
      <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
        <h3 className="text-lg font-bold text-foreground mb-4">Fornecedores por Empresa — Comparativo</h3>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={fornBarData} margin={{ left: 10, right: 20, top: 10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="company" tick={{ fill: "hsl(var(--foreground))", fontSize: 11 }} />
            <YAxis tickFormatter={formatShort} tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} />
            <Tooltip formatter={(v: number) => formatCurrency(v)} />
            <Legend />
            <Bar dataKey="Janeiro" fill="hsl(210, 70%, 60%)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Fevereiro" fill="hsl(25, 90%, 55%)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Março" fill="hsl(150, 60%, 45%)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Clientes comparison chart */}
      <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
        <h3 className="text-lg font-bold text-foreground mb-4">Clientes (Aberto) por Empresa — Comparativo</h3>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={cliBarData} margin={{ left: 10, right: 20, top: 10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="company" tick={{ fill: "hsl(var(--foreground))", fontSize: 11 }} />
            <YAxis tickFormatter={formatShort} tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} />
            <Tooltip formatter={(v: number) => formatCurrency(v)} />
            <Legend />
            <Bar dataKey="Janeiro" fill="hsl(150, 60%, 45%)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Fevereiro" fill="hsl(340, 60%, 50%)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Março" fill="hsl(210, 70%, 60%)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Detailed tables per period */}
      {periods.map((p) => (
        <div key={p.label} className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <h3 className="text-lg font-bold text-foreground mb-4">{p.label}</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Fornecedores table */}
            <div>
              <h4 className="text-sm font-bold text-destructive mb-2">Fornecedores</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 text-muted-foreground font-medium">Empresa</th>
                      <th className="text-right py-2 text-muted-foreground font-medium">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {p.fornData.map((c) => (
                      <tr key={c.company} className="border-b border-border/50">
                        <td className="py-2 flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: c.color }} />
                          {c.company}
                        </td>
                        <td className="py-2 text-right font-medium">{formatCurrency(c.total)}</td>
                      </tr>
                    ))}
                    <tr className="font-bold">
                      <td className="py-2">Total</td>
                      <td className="py-2 text-right text-destructive">{formatCurrency(getFornTotal(p))}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Clientes table */}
            <div>
              <h4 className="text-sm font-bold text-green-600 mb-2">Clientes</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 text-muted-foreground font-medium">Empresa</th>
                      <th className="text-right py-2 text-muted-foreground font-medium">Aberto</th>
                      <th className="text-right py-2 text-muted-foreground font-medium">Caução</th>
                    </tr>
                  </thead>
                  <tbody>
                    {p.cliData.map((c) => (
                      <tr key={c.company} className="border-b border-border/50">
                        <td className="py-2 flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: c.color }} />
                          {c.company}
                        </td>
                        <td className="py-2 text-right font-medium">{formatCurrency(c.aberto)}</td>
                        <td className="py-2 text-right text-muted-foreground">{c.caucao ? formatCurrency(c.caucao) : "—"}</td>
                      </tr>
                    ))}
                    <tr className="font-bold">
                      <td className="py-2">Total</td>
                      <td className="py-2 text-right text-green-600">{formatCurrency(getCliTotal(p))}</td>
                      <td className="py-2 text-right">{formatCurrency(getCaucaoTotal(p))}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResumoTab;
