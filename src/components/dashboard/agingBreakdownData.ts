// ── Aging Fornecedores (snapshot 27/03/2026) ──
// Same data for all periods (Jan, Fev, S4, S5, S6, S7, Mar, Total)

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
    valor: -1167338.51,
    aVencer: -1562,
    ate30: 489792,
    de31a60: -3082,
    de61a90: -81370,
    de91a180: -67245,
    de181a360: -583357,
    mais360: -920514,
  },
  {
    empresa: "CONSÓRCIO ECB SEA_ALSUB",
    valor: -9365005.04,
    aVencer: -9364113,
    ate30: -892,
    de31a60: 0,
    de61a90: 0,
    de91a180: 0,
    de181a360: 0,
    mais360: 0,
  },
  {
    empresa: "MEBR - Part. Consultoria",
    valor: -115608.99,
    aVencer: -38802,
    ate30: -75646,
    de31a60: -174,
    de61a90: 0,
    de91a180: 0,
    de181a360: -627,
    mais360: -360,
  },
  {
    empresa: "MOTA-ENGIL BRASIL S/A",
    valor: -8280252.28,
    aVencer: -6209909,
    ate30: -302859,
    de31a60: -69700,
    de61a90: -18096,
    de91a180: -87281,
    de181a360: -122023,
    mais360: -1470384,
  },
  {
    empresa: "Tracevia Brasil",
    valor: -1479558.26,
    aVencer: -449603,
    ate30: -458833,
    de31a60: -42718,
    de61a90: -26790,
    de91a180: -17972,
    de181a360: -112126,
    mais360: -371517,
  },
  {
    empresa: "Mota Engil Engenharia",
    valor: -20798250,
    aVencer: -16693123,
    ate30: -4047585,
    de31a60: 0,
    de61a90: 0,
    de91a180: -51631,
    de181a360: 4895,
    mais360: -10806,
  },
  {
    empresa: "REDUC",
    valor: -177162,
    aVencer: 0,
    ate30: -101036,
    de31a60: -1071,
    de61a90: -1071,
    de91a180: -1022,
    de181a360: 0,
    mais360: -72961,
  },
];

export const agingFornecedoresTotals: AgingFornecedorEntry = {
  empresa: "Total Geral",
  valor: -41383175,
  aVencer: -32757112,
  ate30: -4497058,
  de31a60: -116746,
  de61a90: -127328,
  de91a180: -225150,
  de181a360: -813238,
  mais360: -2846543,
};

// ── Aging Clientes (snapshot 27/03/2026) ──

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
  { empresa: "MOTA ENGIL ENGENHARIA", cliente: "PETROBRAS", aReceber: 48128724.34, aVencer: 44902380, ate30: 351721, de31a60: 437329, de61a90: 219310, de91a180: 189580, de181a1ano: 142245, de1a2anos: 0, de2a3anos: 304802, mais3anos: 1581356 },
  { empresa: "MOTA ENGIL ENGENHARIA", cliente: "Outros Clientes / Base Total", aReceber: 313383.05, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 302922.53, mais3anos: 10460.52 },
  { empresa: "CONSÓRCIO ALSUB", cliente: "ECOLOGIKA AMBIENTAL TRANSPORTE", aReceber: 26452, aVencer: 7064, ate30: 19388, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "MOTA ENGIL FUNDAÇÕES", cliente: "BESIX-ECB SPE LTDA", aReceber: 27097858.01, aVencer: 813255, ate30: 14524603, de31a60: 0, de61a90: 11760000, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "MOTA-ENGIL BRASIL S/A", cliente: "PETROLEO BRASILEIRO S A PETROBRAS", aReceber: 839044.18, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 839044 },
  { empresa: "MOTA-ENGIL BRASIL S/A", cliente: "AUTOPISTA FERNAO DIAS S.A", aReceber: 544752.36, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 544752 },
  { empresa: "MOTA-ENGIL BRASIL S/A", cliente: "CONCESSIONARIA RODOVIAS DO OESTE SP", aReceber: 0, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "MOTA-ENGIL BRASIL S/A", cliente: "GUARA-NORTE OPERACOES MARITIMAS", aReceber: 549487.21, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 549487, de2a3anos: 0, mais3anos: 0 },
  { empresa: "MOTA-ENGIL BRASIL S/A", cliente: "PETROLEO BRASILEIRO S A PETROBRAS (MEB)", aReceber: 47930901.36, aVencer: 47404196, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 110044, de2a3anos: 416661, mais3anos: 0 },
  { empresa: "MOTA-ENGIL BRASIL S/A", cliente: "TUPI NORDESTE OPERACOES MARITIMAS", aReceber: 160732.33, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 87644, de1a2anos: 73088, de2a3anos: 0, mais3anos: 0 },
  { empresa: "MOTA-ENGIL BRASIL S/A", cliente: "VALE SA", aReceber: 3262186.84, aVencer: 3262187, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "TRACEVIA", cliente: "COLOMBIA ME SAS", aReceber: 24685.88, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 24686, de2a3anos: 0, mais3anos: 0 },
  { empresa: "TRACEVIA", cliente: "CONCESSIONARIA DAS RODOVIAS", aReceber: 72589.02, aVencer: 65124, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 7465 },
  { empresa: "TRACEVIA", cliente: "CONCESSIONARIA DE RODOVIA NOVA 364", aReceber: 45886.10, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 45886, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "TRACEVIA", cliente: "CONCESSIONARIA DE RODOVIAS NOROESTE", aReceber: 444802.64, aVencer: 391207, ate30: 0, de31a60: -1858, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 55453, de2a3anos: 0, mais3anos: 0 },
  { empresa: "TRACEVIA", cliente: "CONCESSIONARIA ECOVIAS", aReceber: 121539.98, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 121540 },
  { empresa: "TRACEVIA", cliente: "CONCESSIONARIA ROTA DO OESTE S.A.", aReceber: 857878.17, aVencer: 0, ate30: 857878, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "TRACEVIA", cliente: "ECO101 CONCESSIONARIA DE RODOVIAS", aReceber: 51897.79, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 51898 },
  { empresa: "TRACEVIA", cliente: "ECORODOVIAS CONCESSOES E SERVICOS", aReceber: 5250.02, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 5250 },
  { empresa: "TRACEVIA", cliente: "LABOR ENGENHARIA E TECNOLOGIA", aReceber: 66353.17, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 66353, mais3anos: 0 },
  { empresa: "TRACEVIA", cliente: "VELSIS SISTEMA E TECNOLOGIA VIARIA", aReceber: 425009.98, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 425010, mais3anos: 0 },
  { empresa: "TRACEVIA", cliente: "VIABAHIA CONCESSIONARIA", aReceber: 218150.48, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 87797, de1a2anos: 130354, de2a3anos: 0, mais3anos: 0 },
  { empresa: "TRACEVIA", cliente: "VIAPAULISTA S.A", aReceber: 3472.75, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 3473 },
  { empresa: "REDUC", cliente: "ECBSA UO BC LOTE 3", aReceber: 68824.12, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 65054, de2a3anos: 3771, mais3anos: 0 },
  { empresa: "REDUC", cliente: "MOTA ENGIL ENGENHARIA", aReceber: 11179.70, aVencer: 0, ate30: 240, de31a60: 5566, de61a90: 0, de91a180: 0, de181a1ano: 2964, de1a2anos: 2409, de2a3anos: 0, mais3anos: 0 },
  { empresa: "REDUC", cliente: "PETROBRAS", aReceber: 229612.06, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 107128, mais3anos: 122484 },
];

export const agingClientesTotals = {
  aReceber: 131187270.49,
  aVencer: 96845413.36,
  ate30: 15753830.06,
  de31a60: 441037.82,
  de61a90: 11979310.46,
  de91a180: 189580.12,
  de181a1ano: 366536.51,
  de1a2anos: 1010574.92,
  de2a3anos: 1323724.19,
  mais3anos: 3277263.05,
};
