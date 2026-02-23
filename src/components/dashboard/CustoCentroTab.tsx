import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from "recharts";
import { formatCurrency, formatShort, COST_TYPE_COLORS, COST_TYPE_LABELS, GROUP_COLORS, groupLabel } from "./shared";
import type { CustoCentroEntry } from "./shared";
import { useState } from "react";

const COST_KEYS = ["financiamento", "fornecedor", "imposto", "outrosCustos", "outrosRecebimentos", "recCliente", "salarios"] as const;

interface GroupedEntry {
  group: string;
  financiamento: number;
  fornecedor: number;
  imposto: number;
  outrosCustos: number;
  outrosRecebimentos: number;
  recCliente: number;
  salarios: number;
  total: number;
  children: CustoCentroEntry[];
}

function groupData(data: CustoCentroEntry[]): GroupedEntry[] {
  const map = new Map<string, GroupedEntry>();
  for (const d of data) {
    const g = d.cc === "Outros" ? "Outros" : groupLabel(d.cc);
    if (!map.has(g)) {
      map.set(g, { group: g, financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: 0, children: [] });
    }
    const entry = map.get(g)!;
    for (const k of COST_KEYS) entry[k] += d[k];
    entry.total += d.total;
    entry.children.push(d);
  }
  return Array.from(map.values());
}

const CcTooltip = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  const label = d.group || d.cc;
  return (
    <div className="bg-card border border-border rounded-lg p-3 shadow-lg max-w-xs">
      <p className="font-semibold text-card-foreground text-sm">{label}</p>
      <p className="text-primary font-bold mt-1">Total: {formatCurrency(d.total)}</p>
    </div>
  );
};

interface Props {
  data: CustoCentroEntry[];
  title: string;
  grouped?: boolean;
}

const CustoCentroTab = ({ data, title, grouped = false }: Props) => {
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);
  const groupedData = grouped ? groupData(data) : null;

  const displayData = grouped
    ? groupedData!.sort((a, b) => a.total - b.total)
    : [...data].sort((a, b) => a.total - b.total);

  const totals = COST_KEYS.reduce((acc, k) => {
    acc[k] = data.reduce((s, d) => s + d[k], 0);
    return acc;
  }, {} as Record<string, number>);
  const grandTotal = data.reduce((s, d) => s + d.total, 0);

  // Pie data for cost distribution
  const pieData = COST_KEYS.map((k) => ({
    name: COST_TYPE_LABELS[k],
    value: Math.abs(totals[k]),
    color: COST_TYPE_COLORS[k],
  })).filter((d) => d.value > 0).sort((a, b) => b.value - a.value);

  const chartHeight = Math.max(300, displayData.length * 44 + 40);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>

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

      {/* Pie + Bar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-card border border-border rounded-xl p-4 shadow-sm">
          <p className="text-sm font-semibold text-foreground mb-2">Distribuição por Tipo</p>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90} innerRadius={40} paddingAngle={2}>
                {pieData.map((d, i) => <Cell key={i} fill={d.color} />)}
              </Pie>
              <Tooltip formatter={(v: number) => formatCurrency(v)} />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap gap-2 mt-2">
            {pieData.map((d) => (
              <div key={d.name} className="flex items-center gap-1.5 text-xs">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: d.color }} />
                <span className="text-muted-foreground">{d.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 bg-card border border-border rounded-xl p-4 shadow-sm">
          <ResponsiveContainer width="100%" height={chartHeight}>
            <BarChart data={displayData} layout="vertical" margin={{ left: 10, right: 30, top: 5, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="hsl(var(--border))" />
              <XAxis type="number" tickFormatter={formatShort} tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} />
              <YAxis type="category" dataKey={grouped ? "group" : "cc"} width={160} tick={{ fill: "hsl(var(--foreground))", fontSize: 11 }} />
              <Tooltip content={<CcTooltip />} cursor={{ fill: "hsl(var(--muted) / 0.4)" }} />
              <Bar dataKey="total" radius={[0, 6, 6, 0]} barSize={24}>
                {displayData.map((d: any, i) => (
                  <Cell key={i} fill={grouped ? (GROUP_COLORS[d.group] || "hsl(var(--primary))") : "hsl(var(--primary))"} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Table */}
      <div className="bg-card border border-border rounded-xl shadow-sm overflow-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="text-left p-3 font-semibold text-foreground">{grouped ? "Grupo" : "CC"}</th>
              {COST_KEYS.map((k) => (
                <th key={k} className="text-right p-3 font-semibold text-foreground whitespace-nowrap">{COST_TYPE_LABELS[k]}</th>
              ))}
              <th className="text-right p-3 font-semibold text-foreground">Total</th>
            </tr>
          </thead>
          <tbody>
            {(grouped ? groupedData!.sort((a, b) => b.total - a.total) : [...data].sort((a, b) => b.total - a.total)).map((d: any) => (
              <>
                <tr
                  key={d.group || d.cc}
                  className={`border-b border-border/50 hover:bg-muted/30 ${grouped ? "cursor-pointer" : ""}`}
                  onClick={() => grouped && setExpandedGroup(expandedGroup === d.group ? null : d.group)}
                >
                  <td className="p-3 text-foreground font-medium">
                    {grouped && <span className="mr-2 text-muted-foreground">{expandedGroup === d.group ? "▼" : "▶"}</span>}
                    {d.group || d.cc}
                    {grouped && <span className="ml-2 text-xs text-muted-foreground">({d.children.length})</span>}
                  </td>
                  {COST_KEYS.map((k) => (
                    <td key={k} className="p-3 text-right font-mono text-sm">
                      {d[k] !== 0 ? formatCurrency(d[k]) : "-"}
                    </td>
                  ))}
                  <td className="p-3 text-right font-mono font-bold text-sm">{formatCurrency(d.total)}</td>
                </tr>
                {grouped && expandedGroup === d.group && d.children.sort((a: CustoCentroEntry, b: CustoCentroEntry) => b.total - a.total).map((child: CustoCentroEntry) => (
                  <tr key={child.cc} className="border-b border-border/30 bg-muted/20">
                    <td className="p-3 pl-10 text-muted-foreground">{child.cc}</td>
                    {COST_KEYS.map((k) => (
                      <td key={k} className="p-3 text-right font-mono text-xs text-muted-foreground">
                        {child[k] !== 0 ? formatCurrency(child[k]) : "-"}
                      </td>
                    ))}
                    <td className="p-3 text-right font-mono font-bold text-xs">{formatCurrency(child.total)}</td>
                  </tr>
                ))}
              </>
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

export default CustoCentroTab;
