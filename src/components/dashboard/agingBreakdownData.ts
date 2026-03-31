// ── Aging Fornecedores (snapshot 27/03/2026) ──
// Data read from "Aging Fornecedores" sheet, using per-fornecedor subtotal rows (NF=null)

export interface AgingFornecedorEntry {
  empresa: string;
  valor: number;
  aVencer: number;
  ate30: number;
  de31a60: number;
  de61a90: number;
  de91a180: number;
  de181a360: number;
  mais360: number;
}

export const agingFornecedoresData: AgingFornecedorEntry[] = [
  {
    empresa: "ME FUNDAÇÕES BRASIL LTDA",
    valor: -2117063.37,
    aVencer: -1561.80,
    ate30: 489792.23,
    de31a60: -3082.36,
    de61a90: -81370.38,
    de91a180: -67244.63,
    de181a360: -984150.27,
    mais360: -1469446.16,
  },
  {
    empresa: "CONSÓRCIO ECB SEA_ALSUB",
    valor: -9365005.04,
    aVencer: -9364113.47,
    ate30: -891.57,
    de31a60: 0,
    de61a90: 0,
    de91a180: 0,
    de181a360: 0,
    mais360: 0,
  },
  {
    empresa: "MEBR - Part. Consultoria",
    valor: -115608.99,
    aVencer: -38801.62,
    ate30: -75645.98,
    de31a60: -173.73,
    de61a90: 0,
    de91a180: 0,
    de181a360: -627.24,
    mais360: -360.42,
  },
  {
    empresa: "MOTA-ENGIL BRASIL S/A",
    valor: -8267913.45,
    aVencer: -6209909.50,
    ate30: -289037.74,
    de31a60: -71182.44,
    de61a90: -18096.20,
    de91a180: -87280.90,
    de181a360: -122022.76,
    mais360: -1470383.91,
  },
  {
    empresa: "Tracevia Brasil",
    valor: -1479558.26,
    aVencer: -449602.93,
    ate30: -458833.43,
    de31a60: -42718.06,
    de61a90: -26789.76,
    de91a180: -17971.53,
    de181a360: -112125.94,
    mais360: -371516.61,
  },
  {
    empresa: "Mota Engil Engenharia",
    valor: -20798249.76,
    aVencer: -16693122.52,
    ate30: -4047584.69,
    de31a60: 0,
    de61a90: 0,
    de91a180: -51631.27,
    de181a360: 4895.00,
    mais360: -10806.28,
  },
  {
    empresa: "REDUC",
    valor: -177161.71,
    aVencer: 0,
    ate30: -101036.20,
    de31a60: -1071.22,
    de61a90: -1071.22,
    de91a180: -1021.66,
    de181a360: 0,
    mais360: -72961.41,
  },
];

// Grand total from Excel "Total Geral" row
export const agingFornecedoresTotals: AgingFornecedorEntry = {
  empresa: "Total Geral",
  valor: -42320560.58,
  aVencer: -32757111.84,
  ate30: -4483237.38,
  de31a60: -117227.81,
  de61a90: -127327.56,
  de91a180: -225149.99,
  de181a360: -1214030.21,
  mais360: -3396475.79,
};

// ── Aging Clientes (snapshot 27/03/2026) ──
// Data read from "Resumo aging total" sheet, using per-client subtotal rows (NF=null)

export interface AgingClienteEntry {
  empresa: string;
  cliente: string;
  aReceber: number;
  aVencer: number;
  ate30: number;
  de31a60: number;
  de61a90: number;
  de91a180: number;
  de181a1ano: number;
  de1a2anos: number;
  de2a3anos: number;
  mais3anos: number;
}

export const agingClientesData: AgingClienteEntry[] = [
  { empresa: "CONSÓRCIO ECB SEA_ALSUB", cliente: "ECOLOGIKA AMBIENTAL TRANSPORTE", aReceber: 26452, aVencer: 7064, ate30: 19388, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "ME FUNDAÇÕES BRASIL LTDA", cliente: "BESIX-ECB SPE LTDA", aReceber: 27097858.01, aVencer: 813255.09, ate30: 14524602.92, de31a60: 0, de61a90: 11760000, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "MOTA-ENGIL BRASIL S/A", cliente: "PETROLEO BRASILEIRO S A PETROBRAS", aReceber: 839044.18, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 839044.18 },
  { empresa: "MOTA-ENGIL BRASIL S/A", cliente: "AUTOPISTA FERNAO DIAS S.A", aReceber: 544752.36, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 544752.36 },
  { empresa: "MOTA-ENGIL BRASIL S/A", cliente: "PETROLEO BRASILEIRO S A PETROBRAS (MEB)", aReceber: 47930901.36, aVencer: 47404196.18, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 110044.11, de2a3anos: 416661.07, mais3anos: 0 },
  { empresa: "MOTA-ENGIL BRASIL S/A", cliente: "VALE SA", aReceber: 3262186.84, aVencer: 3262186.84, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "MOTA-ENGIL BRASIL S/A", cliente: "TUPI NORDESTE OPERACOES MARITIMAS L", aReceber: 160732.33, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 87644.08, de1a2anos: 73088.25, de2a3anos: 0, mais3anos: 0 },
  { empresa: "MOTA-ENGIL BRASIL S/A", cliente: "GUARA-NORTE OPERACOES MARITIMAS LTD", aReceber: 549487.21, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 549487.21, de2a3anos: 0, mais3anos: 0 },
  { empresa: "Tracevia Brasil", cliente: "COLOMBIA ME SAS", aReceber: 24685.88, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 24685.88, de2a3anos: 0, mais3anos: 0 },
  { empresa: "Tracevia Brasil", cliente: "VIABAHIA CONCESSIONARIA", aReceber: 218150.48, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 87796.71, de1a2anos: 130353.77, de2a3anos: 0, mais3anos: 0 },
  { empresa: "Tracevia Brasil", cliente: "ECORODOVIAS CONCESSOES E SERVICOS S", aReceber: 5250.02, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 5250.02 },
  { empresa: "Tracevia Brasil", cliente: "ECO101 CONCESSIONARIA DE RODOVIAS S", aReceber: 51897.79, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 51897.79 },
  { empresa: "Tracevia Brasil", cliente: "VELSIS SISTEMA E TECNOLOGIA VIARIA", aReceber: 425009.98, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 425009.98, mais3anos: 0 },
  { empresa: "Tracevia Brasil", cliente: "VIAPAULISTA S.A", aReceber: 3472.75, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 3472.75 },
  { empresa: "Tracevia Brasil", cliente: "CONCESSIONARIA DAS RODOVIAS", aReceber: 72589.02, aVencer: 65123.55, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 7465.47 },
  { empresa: "Tracevia Brasil", cliente: "CONCESSIONARIA ECOVIAS", aReceber: 121539.98, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 121539.98 },
  { empresa: "Tracevia Brasil", cliente: "LABOR ENGENHARIA E TECNOLOGIA LTDA", aReceber: 66353.17, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 66353.17, mais3anos: 0 },
  { empresa: "Tracevia Brasil", cliente: "CONCESSIONARIA DE RODOVIAS NOROESTE", aReceber: 444802.64, aVencer: 391207.44, ate30: 0, de31a60: -1857.64, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 55452.84, de2a3anos: 0, mais3anos: 0 },
  { empresa: "Tracevia Brasil", cliente: "CONCESSIONARIA DE RODOVIA NOVA 364", aReceber: 45886.10, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 45886.10, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "Tracevia Brasil", cliente: "CONCESSIONARIA ROTA DO OESTE S.A.", aReceber: 857878.17, aVencer: 0, ate30: 857878.17, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "MOTA ENGIL ENGENHARIA", cliente: "PETROBRAS", aReceber: 48128724.34, aVencer: 44902380.26, ate30: 351720.97, de31a60: 437329.18, de61a90: 219310.46, de91a180: 189580.12, de181a1ano: 142245.44, de1a2anos: 0, de2a3anos: 304801.68, mais3anos: 1581356.23 },
  { empresa: "MOTA ENGIL ENGENHARIA", cliente: "Outros Clientes / Base", aReceber: 313383.05, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 302922.53, mais3anos: 10460.52 },
  { empresa: "REDUC", cliente: "ECBSA UO BC LOTE 3", aReceber: 68824.12, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 65053.62, de2a3anos: 3770.50, mais3anos: 0 },
  { empresa: "REDUC", cliente: "MOTA ENGIL ENGENHARIA", aReceber: 11179.70, aVencer: 0, ate30: 240, de31a60: 5566.28, de61a90: 0, de91a180: 0, de181a1ano: 2964.18, de1a2anos: 2409.24, de2a3anos: 0, mais3anos: 0 },
  { empresa: "REDUC", cliente: "PETROBRAS", aReceber: 229612.06, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 107127.79, mais3anos: 122484.27 },
];

export const agingClientesTotals = {
  aReceber: 131160818.49,
  aVencer: 96845413.36,
  ate30: 15753829.89,
  de31a60: 441037.82,
  de61a90: 11979310.46,
  de91a180: 189580.12,
  de181a1ano: 366536.51,
  de1a2anos: 1010574.92,
  de2a3anos: 1626646.72,
  mais3anos: 2947726.57,
};
