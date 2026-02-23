export const COMPANY_COLORS: Record<string, string> = {
  "Macaé": "hsl(150, 60%, 40%)",
  "Mota Engil Brasil": "hsl(30, 80%, 50%)",
};

export const COST_TYPE_COLORS: Record<string, string> = {
  financiamento: "hsl(210, 70%, 50%)",
  fornecedor: "hsl(340, 60%, 50%)",
  imposto: "hsl(30, 80%, 50%)",
  outrosCustos: "hsl(0, 65%, 50%)",
  outrosRecebimentos: "hsl(150, 60%, 40%)",
  recCliente: "hsl(120, 50%, 45%)",
  salarios: "hsl(270, 50%, 55%)",
};

export const COST_TYPE_LABELS: Record<string, string> = {
  financiamento: "Financiamento",
  fornecedor: "Fornecedor",
  imposto: "Imposto",
  outrosCustos: "Outros Custos",
  outrosRecebimentos: "Outros Recebimentos",
  recCliente: "Recebimento Cliente",
  salarios: "Salários",
};

export const PERIODS = [
  { id: "s1", label: "Acumulado Jan - 20/02" },
  { id: "total", label: "Total Acumulado" },
] as const;

export type PeriodId = (typeof PERIODS)[number]["id"];

export const GROUP_LABELS: Record<string, string> = {
  "1": "Obra",
  "2": "Estrutura",
  "3": "Unidades de apoio",
  "4": "Financeiro",
  Outros: "Outros",
};

export const GROUP_COLORS: Record<string, string> = {
  "Obra": "hsl(210, 70%, 50%)",
  "Estrutura": "hsl(340, 60%, 50%)",
  "Unidades de apoio": "hsl(150, 60%, 40%)",
  "Financeiro": "hsl(30, 80%, 50%)",
  "Outros": "hsl(270, 50%, 55%)",
};

export const formatCurrency = (v: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(v);

export const formatShort = (v: number) => {
  const abs = Math.abs(v);
  const sign = v < 0 ? "-" : "";
  if (abs >= 1_000_000) return `${sign}R$ ${(abs / 1_000_000).toFixed(1)}M`;
  if (abs >= 1_000) return `${sign}R$ ${(abs / 1_000).toFixed(0)}k`;
  return `${sign}R$ ${abs.toFixed(0)}`;
};

export function groupLabel(cc: string): string {
  const prefix = cc.charAt(0);
  if (["1", "2", "3", "4"].includes(prefix)) {
    return GROUP_LABELS[prefix];
  }
  return "Outros";
}

export interface CustoCentroEntry {
  cc: string;
  financiamento: number;
  fornecedor: number;
  imposto: number;
  outrosCustos: number;
  outrosRecebimentos: number;
  recCliente: number;
  salarios: number;
  total: number;
  period: string;
}

export interface Top10Entry {
  supplier: string;
  macae: number;
  meb: number;
  total: number;
  period: string;
}

export interface TipoPagamentoEntry {
  company: string;
  financiamento: number;
  fornecedor: number;
  imposto: number;
  outrosCustos: number;
  outrosRecebimentos: number;
  recCliente: number;
  salarios: number;
  total: number;
  period: string;
}
