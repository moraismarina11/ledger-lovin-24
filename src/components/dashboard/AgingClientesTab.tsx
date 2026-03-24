import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { formatCurrency, formatShort } from "./shared";
import { agingClientesData, agingClientesTotals } from "./agingBreakdownData";

const COLORS = [
"hsl(25, 90%, 55%)", "hsl(190, 60%, 45%)", "hsl(150, 60%, 40%)",
"hsl(210, 70%, 50%)", "hsl(270, 50%, 55%)", "hsl(40, 90%, 50%)"];


const AGING_COLS: {key: keyof typeof agingClientesTotals;label: string;}[] = [
{ key: "aVencer", label: "A Vencer" },
{ key: "ate30", label: "Até 30d" },
{ key: "de31a60", label: "31-60d" },
{ key: "de61a90", label: "61-90d" },
{ key: "de91a180", label: "91-180d" },
{ key: "de181a1ano", label: "181d-1a" },
{ key: "de1a2anos", label: "1-2 anos" },
{ key: "de2a3anos", label: "2-3 anos" },
{ key: "mais3anos", label: "> 3 anos" }];


const AGING_COLORS = [
"hsl(150, 60%, 45%)", "hsl(210, 70%, 55%)", "hsl(40, 90%, 50%)",
"hsl(25, 85%, 55%)", "hsl(340, 60%, 50%)", "hsl(0, 65%, 50%)",
"hsl(270, 50%, 55%)", "hsl(190, 60%, 45%)", "hsl(30, 85%, 50%)"];


const AgingClientesTab = () => {
  // Group by empresa for pie chart
  const empresaMap = new Map<string, number>();
  agingClientesData.forEach((e) => {
    empresaMap.set(e.empresa, (empresaMap.get(e.empresa) ?? 0) + e.aReceber);
  });
  const pieData = Array.from(empresaMap.entries()).
  filter(([, v]) => v > 0).
  map(([name, value], i) => ({ name, value, color: COLORS[i % COLORS.length] }));

  // Aging distribution
  const agingDistribution = AGING_COLS.map((col) => ({
    name: col.label,
    value: agingClientesTotals[col.key],
    pct: agingClientesTotals.aReceber > 0 ?
    (agingClientesTotals[col.key] / agingClientesTotals.aReceber * 100).toFixed(1) :
    "0"
  })).filter((d) => d.value > 0);

  // Group entries by empresa for the table
  const empresas = Array.from(new Set(agingClientesData.map((e) => e.empresa)));

  return (
    <div className="space-y-6">
      <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
        <h2 className="text-2xl font-bold italic text-primary mb-2">Aging Clientes</h2>
        <p className="text-sm text-muted-foreground mb-4"><p className="text-sm text-muted-foreground mb-4">Data referência: 20/03/2026</p></p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Donut by empresa */}
          <div>
            <h3 className="text-sm font-bold text-foreground mb-3">Distribuição por Empresa</h3>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={85} innerRadius={40} paddingAngle={2} strokeWidth={0}>
                  {pieData.map((d, i) => <Cell key={i} fill={d.color} />)}
                </Pie>
                <Tooltip formatter={(v: number) => formatCurrency(v)} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap gap-3 justify-center mt-2">
              {pieData.map((d) =>
              <div key={d.name} className="flex items-center gap-1.5 text-xs">
                  <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: d.color }} />
                  <span className="text-muted-foreground">{d.name}: {formatShort(d.value)}</span>
                </div>
              )}
            </div>
          </div>

          {/* Bar chart aging distribution */}
          <div>
            <h3 className="text-sm font-bold text-foreground mb-3">Distribuição por Vencimento</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={agingDistribution} margin={{ left: 10, right: 10, top: 10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" tick={{ fill: "hsl(var(--foreground))", fontSize: 10 }} />
                <YAxis tickFormatter={formatShort} tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} />
                <Tooltip formatter={(v: number) => formatCurrency(v)} />
                <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={32}>
                  {agingDistribution.map((_, i) => <Cell key={i} fill={AGING_COLORS[i]} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap gap-3 justify-center mt-2">
              {agingDistribution.map((d, i) =>
              <div key={d.name} className="flex items-center gap-1.5 text-xs">
                  <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: AGING_COLORS[i] }} />
                  <span className="text-muted-foreground">{d.name}: {d.pct}%</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Detailed table */}
      <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
        <h3 className="text-lg font-bold text-foreground mb-4">Detalhe por Empresa / Cliente</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 text-muted-foreground font-medium">Empresa</th>
                <th className="text-left py-2 text-muted-foreground font-medium">Cliente</th>
                <th className="text-right py-2 text-muted-foreground font-medium">A Receber</th>
                {AGING_COLS.map((c) =>
                <th key={c.key} className="text-right py-2 text-muted-foreground font-medium whitespace-nowrap">{c.label}</th>
                )}
              </tr>
            </thead>
            <tbody>
              {empresas.map((emp) => {
                const entries = agingClientesData.filter((e) => e.empresa === emp);
                return entries.map((row, ri) =>
                <tr key={`${emp}-${row.cliente}`} className="border-b border-border/30">
                    <td className="py-2 text-foreground font-medium">{ri === 0 ? emp : ""}</td>
                    <td className="py-2 text-foreground">{row.cliente}</td>
                    <td className="py-2 text-right font-medium">{row.aReceber > 0 ? formatCurrency(row.aReceber) : "—"}</td>
                    {AGING_COLS.map((c) =>
                  <td key={c.key} className="py-2 text-right text-muted-foreground">
                        {row[c.key] as number > 0 ? formatCurrency(row[c.key] as number) : "—"}
                      </td>
                  )}
                  </tr>
                );
              })}
              {/* Totals */}
              <tr className="border-t-2 border-border font-bold">
                <td className="py-2 text-foreground" colSpan={2}>Total Geral</td>
                <td className="py-2 text-right">{formatCurrency(agingClientesTotals.aReceber)}</td>
                {AGING_COLS.map((c) =>
                <td key={c.key} className="py-2 text-right">
                    {agingClientesTotals[c.key] > 0 ? formatCurrency(agingClientesTotals[c.key]) : "—"}
                  </td>
                )}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>);

};

export default AgingClientesTab;