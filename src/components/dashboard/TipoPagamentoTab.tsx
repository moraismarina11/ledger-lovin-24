import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell } from "recharts";
import { formatCurrency, formatShort, COST_TYPE_COLORS, COST_TYPE_LABELS, COMPANY_COLORS } from "./shared";
import type { TipoPagamentoEntry } from "./shared";

const COST_KEYS = ["financiamento", "fornecedor", "imposto", "outrosCustos", "outrosRecebimentos", "recCliente", "salarios"] as const;

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-card border border-border rounded-lg p-3 shadow-xl text-sm max-w-xs">
      <p className="font-bold text-card-foreground mb-2">{label}</p>
      {payload.filter((p: any) => p.value !== 0).map((p: any) => (
        <div key={p.dataKey} className="flex justify-between gap-3 text-xs">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full" style={{ background: p.color }} />
            {COST_TYPE_LABELS[p.dataKey]}
          </span>
          <span className="font-semibold font-mono">{formatCurrency(p.value)}</span>
        </div>
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

  // Pie data
  const pieData = COST_KEYS.map((k) => ({
    name: COST_TYPE_LABELS[k],
    value: Math.abs(totals[k]),
    color: COST_TYPE_COLORS[k],
  })).filter((d) => d.value > 0).sort((a, b) => b.value - a.value);

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {COST_KEYS.filter((k) => totals[k] !== 0).map((k) => (
          <div key={k} className="bg-card rounded-xl border border-border p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: COST_TYPE_COLORS[k] }} />
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{COST_TYPE_LABELS[k]}</span>
            </div>
            <p className="text-lg font-bold" style={{ color: COST_TYPE_COLORS[k] }}>{formatCurrency(totals[k])}</p>
          </div>
        ))}
        <div className="bg-card rounded-xl border-2 border-primary/30 p-4 shadow-sm">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Total Geral</span>
          <p className="text-lg font-bold text-primary mt-1.5">{formatCurrency(grandTotal)}</p>
        </div>
      </div>

      {/* Pie + Bar */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="bg-card rounded-xl border border-border p-5 shadow-sm">
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Distribuição</h4>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={85} innerRadius={35} paddingAngle={2} strokeWidth={0}>
                {pieData.map((d, i) => <Cell key={i} fill={d.color} />)}
              </Pie>
              <Tooltip formatter={(v: number) => formatCurrency(v)} />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-1.5 mt-3">
            {pieData.map((d) => (
              <div key={d.name} className="flex items-center gap-2 text-xs">
                <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: d.color }} />
                <span className="text-muted-foreground truncate">{d.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3 bg-card rounded-xl border border-border p-5 shadow-sm">
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Por Empresa</h4>
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
      </div>

      {/* Table */}
      <div className="bg-card rounded-xl border border-border shadow-sm overflow-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-border bg-muted/40">
              <th className="text-left p-4 font-bold text-foreground">Empresa</th>
              {COST_KEYS.map((k) => (
                <th key={k} className="text-right p-3 font-bold text-foreground whitespace-nowrap text-xs">
                  <div className="flex items-center justify-end gap-1.5">
                    <span className="w-2 h-2 rounded-full" style={{ background: COST_TYPE_COLORS[k] }} />
                    {COST_TYPE_LABELS[k]}
                  </div>
                </th>
              ))}
              <th className="text-right p-4 font-bold text-foreground">Total</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={d.company} className={`border-b border-border/50 ${i % 2 === 0 ? "bg-muted/10" : ""}`}>
                <td className="p-4 text-foreground font-medium">
                  <span className="inline-block w-3 h-3 rounded-full mr-2 align-middle" style={{ background: COMPANY_COLORS[d.company] }} />
                  {d.company}
                </td>
                {COST_KEYS.map((k) => (
                  <td key={k} className="p-3 text-right font-mono text-xs">{d[k] !== 0 ? formatCurrency(d[k]) : "-"}</td>
                ))}
                <td className="p-4 text-right font-mono font-bold">{formatCurrency(d.total)}</td>
              </tr>
            ))}
            <tr className="bg-muted/50 border-t-2 border-border">
              <td className="p-4 font-bold text-foreground">Total Geral</td>
              {COST_KEYS.map((k) => (
                <td key={k} className="p-3 text-right font-mono font-bold text-xs">{formatCurrency(totals[k])}</td>
              ))}
              <td className="p-4 text-right font-mono font-bold text-primary">{formatCurrency(grandTotal)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TipoPagamentoTab;
