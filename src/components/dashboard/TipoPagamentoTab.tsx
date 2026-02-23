import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { formatCurrency, formatShort, COST_TYPE_COLORS, COST_TYPE_LABELS, COMPANY_COLORS } from "./shared";
import type { TipoPagamentoEntry } from "./shared";

const COST_KEYS = ["financiamento", "fornecedor", "imposto", "outrosCustos", "outrosRecebimentos", "recCliente", "salarios"] as const;

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
      <p className="font-semibold text-card-foreground text-sm mb-2">{label}</p>
      {payload.filter((p: any) => p.value !== 0).map((p: any) => (
        <p key={p.dataKey} className="text-xs">
          <span style={{ color: p.color }}>■</span> {COST_TYPE_LABELS[p.dataKey]}: <span className="font-bold">{formatCurrency(p.value)}</span>
        </p>
      ))}
    </div>
  );
};

interface Props { data: TipoPagamentoEntry[] }

const TipoPagamentoTab = ({ data }: Props) => {
  const totals = COST_KEYS.reduce((acc, k) => {
    acc[k] = data.reduce((s, d) => s + d[k], 0);
    return acc;
  }, {} as Record<string, number>);
  const grandTotal = data.reduce((s, d) => s + d.total, 0);

  return (
    <div className="space-y-4">
      {/* KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {COST_KEYS.filter((k) => totals[k] !== 0).map((k) => (
          <div key={k} className="bg-card border border-border rounded-xl p-3 shadow-sm">
            <p className="text-xs text-muted-foreground uppercase tracking-wide">{COST_TYPE_LABELS[k]}</p>
            <p className="text-lg font-bold mt-1" style={{ color: COST_TYPE_COLORS[k] }}>{formatCurrency(totals[k])}</p>
          </div>
        ))}
        <div className="bg-card border border-border rounded-xl p-3 shadow-sm">
          <p className="text-xs text-muted-foreground uppercase tracking-wide">Total Geral</p>
          <p className="text-lg font-bold mt-1 text-primary">{formatCurrency(grandTotal)}</p>
        </div>
      </div>

      {/* Stacked bar chart */}
      <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-sm">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data} margin={{ left: 10, right: 30, top: 5, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="company" tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }} />
            <YAxis tickFormatter={formatShort} tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "hsl(var(--muted) / 0.4)" }} />
            <Legend formatter={(v: string) => COST_TYPE_LABELS[v] || v} />
            {COST_KEYS.map((k) => (
              <Bar key={k} dataKey={k} stackId="a" fill={COST_TYPE_COLORS[k]} />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Table */}
      <div className="bg-card border border-border rounded-xl shadow-sm overflow-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="text-left p-3 font-semibold text-foreground">Empresa</th>
              {COST_KEYS.map((k) => (
                <th key={k} className="text-right p-3 font-semibold text-foreground whitespace-nowrap">{COST_TYPE_LABELS[k]}</th>
              ))}
              <th className="text-right p-3 font-semibold text-foreground">Total</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr key={d.company} className="border-b border-border/50 hover:bg-muted/30">
                <td className="p-3 text-foreground font-medium">
                  <span className="inline-block w-2.5 h-2.5 rounded-full mr-2" style={{ background: COMPANY_COLORS[d.company] }} />
                  {d.company}
                </td>
                {COST_KEYS.map((k) => (
                  <td key={k} className="p-3 text-right font-mono text-sm">{d[k] !== 0 ? formatCurrency(d[k]) : "-"}</td>
                ))}
                <td className="p-3 text-right font-mono font-bold text-sm">{formatCurrency(d.total)}</td>
              </tr>
            ))}
            <tr className="bg-muted/50 font-bold">
              <td className="p-3 text-foreground">Total Geral</td>
              {COST_KEYS.map((k) => (
                <td key={k} className="p-3 text-right font-mono">{formatCurrency(totals[k])}</td>
              ))}
              <td className="p-3 text-right font-mono">{formatCurrency(grandTotal)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TipoPagamentoTab;
