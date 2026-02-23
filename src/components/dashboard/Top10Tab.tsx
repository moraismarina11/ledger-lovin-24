import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { formatCurrency, formatShort, COMPANY_COLORS } from "./shared";
import type { Top10Entry } from "./shared";

const CustomTooltip = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
      <p className="font-semibold text-card-foreground text-sm">{d.supplier}</p>
      {d.macae !== 0 && <p className="text-sm mt-1"><span className="text-muted-foreground">Macaé:</span> <span className="font-bold" style={{ color: COMPANY_COLORS["Macaé"] }}>{formatCurrency(d.macae)}</span></p>}
      {d.meb !== 0 && <p className="text-sm"><span className="text-muted-foreground">Mota Engil Brasil:</span> <span className="font-bold" style={{ color: COMPANY_COLORS["Mota Engil Brasil"] }}>{formatCurrency(d.meb)}</span></p>}
      <p className="text-primary font-bold mt-1 border-t border-border pt-1">Total: {formatCurrency(d.total)}</p>
    </div>
  );
};

interface Props { data: Top10Entry[] }

const Top10Tab = ({ data }: Props) => {
  const sorted = [...data].sort((a, b) => a.total - b.total);
  const totalMacae = sorted.reduce((s, d) => s + d.macae, 0);
  const totalMeb = sorted.reduce((s, d) => s + d.meb, 0);
  const totalGeral = sorted.reduce((s, d) => s + d.total, 0);
  const chartHeight = Math.max(300, sorted.length * 44 + 40);

  return (
    <div className="space-y-4">
      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {[
          { label: "Macaé", value: totalMacae, color: COMPANY_COLORS["Macaé"] },
          { label: "Mota Engil Brasil", value: totalMeb, color: COMPANY_COLORS["Mota Engil Brasil"] },
          { label: "Total Geral", value: totalGeral, color: "hsl(var(--primary))" },
        ].map((k) => (
          <div key={k.label} className="bg-card border border-border rounded-xl p-4 shadow-sm">
            <p className="text-xs text-muted-foreground uppercase tracking-wide">{k.label}</p>
            <p className="text-xl font-bold mt-1" style={{ color: k.color }}>{formatCurrency(k.value)}</p>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-sm">
        <ResponsiveContainer width="100%" height={chartHeight}>
          <BarChart data={sorted} layout="vertical" margin={{ left: 10, right: 30, top: 5, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="hsl(var(--border))" />
            <XAxis type="number" tickFormatter={formatShort} tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} />
            <YAxis type="category" dataKey="supplier" width={200} tick={{ fill: "hsl(var(--foreground))", fontSize: 11 }} />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "hsl(var(--muted) / 0.4)" }} />
            <Bar dataKey="total" radius={[0, 6, 6, 0]} barSize={24}>
              {sorted.map((d, i) => (
                <Cell key={i} fill={d.macae !== 0 ? COMPANY_COLORS["Macaé"] : COMPANY_COLORS["Mota Engil Brasil"]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Table */}
      <div className="bg-card border border-border rounded-xl shadow-sm overflow-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="text-left p-3 font-semibold text-foreground">Fornecedor</th>
              <th className="text-right p-3 font-semibold text-foreground">Macaé</th>
              <th className="text-right p-3 font-semibold text-foreground">Mota Engil Brasil</th>
              <th className="text-right p-3 font-semibold text-foreground">Total Geral</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((d) => (
              <tr key={d.supplier} className="border-b border-border/50 hover:bg-muted/30">
                <td className="p-3 text-foreground">{d.supplier}</td>
                <td className="p-3 text-right font-mono text-sm">{d.macae !== 0 ? formatCurrency(d.macae) : "-"}</td>
                <td className="p-3 text-right font-mono text-sm">{d.meb !== 0 ? formatCurrency(d.meb) : "-"}</td>
                <td className="p-3 text-right font-mono font-bold text-sm">{formatCurrency(d.total)}</td>
              </tr>
            ))}
            <tr className="bg-muted/50 font-bold">
              <td className="p-3 text-foreground">Total</td>
              <td className="p-3 text-right font-mono">{formatCurrency(totalMacae)}</td>
              <td className="p-3 text-right font-mono">{formatCurrency(totalMeb)}</td>
              <td className="p-3 text-right font-mono">{formatCurrency(totalGeral)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Top10Tab;
