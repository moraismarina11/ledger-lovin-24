// ── Aging Fornecedores (snapshot 20/03/2026) ──
// Same data for all periods (Jan, Fev, S4, S5, S6, Mar, Total)

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
    valor: -1165800.27,
    aVencer: 0,
    ate30: -14839.52,
    de31a60: 819499.18,
    de61a90: -3350.86,
    de91a180: -81718.57,
    de181a360: -152028.25,
    mais360: -792166.70,
  },
  {
    empresa: "CONSÓRCIO ECB SEA_ALSUB",
    valor: -9487441.92,
    aVencer: 0,
    ate30: -9487441.92,
    de31a60: 0,
    de61a90: 0,
    de91a180: 0,
    de181a360: 0,
    mais360: 0,
  },
  {
    empresa: "MEBR - Part. Consultoria",
    valor: -75729.70,
    aVencer: 0,
    ate30: -71217.73,
    de31a60: -3350.58,
    de61a90: -173.73,
    de91a180: 0,
    de181a360: 0,
    mais360: -627.24,
  },
  {
    empresa: "MOTA-ENGIL BRASIL S/A",
    valor: -7457133.98,
    aVencer: 0,
    ate30: -5725204.00,
    de31a60: -803.98,
    de61a90: -73832.23,
    de91a180: -5506.20,
    de181a360: -59380.90,
    mais360: -122027.58,
  },
  {
    empresa: "Tracevia Brasil",
    valor: -1469231.50,
    aVencer: 0,
    ate30: -141893.53,
    de31a60: -509785.67,
    de61a90: -38515.17,
    de91a180: -274607.67,
    de181a360: -26991.53,
    mais360: -127268.64,
  },
  {
    empresa: "Mota Engil Engenharia",
    valor: -21695552.91,
    aVencer: 0,
    ate30: -15086427.81,
    de31a60: -3382351.30,
    de61a90: -1590376.76,
    de91a180: -1578854.49,
    de181a360: -51631.27,
    mais360: 4895.00,
  },
  {
    empresa: "REDUC",
    valor: -177161.71,
    aVencer: 0,
    ate30: -100000,
    de31a60: -1036.20,
    de61a90: -1171.22,
    de91a180: -1971.22,
    de181a360: -21.66,
    mais360: 0,
  },
];

export const agingFornecedoresTotals: AgingFornecedorEntry = {
  empresa: "Total Geral",
  valor: -41528051.99,
  aVencer: 0,
  ate30: -30627024.51,
  de31a60: -3077828.55,
  de61a90: -1707419.97,
  de91a180: -1942658.15,
  de181a360: -290053.61,
  mais360: -1037195.16,
};

// ── Aging Clientes (snapshot 20/03/2026) ──

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
  { empresa: "MOTA ENGIL ENGENHARIA", cliente: "Outros Clientes / Base Total", aReceber: 313383.05, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 302922.53, mais3anos: 10460.52 },
  { empresa: "MOTA ENGIL ENGENHARIA", cliente: "PETROBRAS", aReceber: 71733239.24, aVencer: 68670551.60, ate30: 516934.02, de31a60: 327555.16, de61a90: 313598.04, de91a180: 189580.12, de181a1ano: 142245.44, de1a2anos: 0, de2a3anos: 1879.15, mais3anos: 1570895.71 },
  { empresa: "CONSÓRCIO ALSUB", cliente: "ECOLOGIKA AMBIENTAL TRANSPORTE", aReceber: 46384, aVencer: 7064, ate30: 39320, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "MOTA ENGIL FUNDAÇÕES", cliente: "BESIX-ECB SPE LTDA", aReceber: 27097858.01, aVencer: 813255.09, ate30: 14524602.92, de31a60: 0, de61a90: 11760000, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "MOTA-ENGIL BRASIL S/A", cliente: "AUTOPISTA FERNAO DIAS S.A", aReceber: 544752.36, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 544752.36 },
  { empresa: "MOTA-ENGIL BRASIL S/A", cliente: "CONCESSIONARIA RODOVIAS DO OESTE SP", aReceber: 0, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "MOTA-ENGIL BRASIL S/A", cliente: "GUARA-NORTE OPERACOES MARITIMAS", aReceber: 549487.21, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 549487.21, de2a3anos: 0, mais3anos: 0 },
  { empresa: "MOTA-ENGIL BRASIL S/A", cliente: "PETROLEO BRASILEIRO S A PETROBRAS", aReceber: 132139387.75, aVencer: 130773638.39, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 110044.11, de2a3anos: 416661.07, mais3anos: 839044.18 },
  { empresa: "MOTA-ENGIL BRASIL S/A", cliente: "TUPI NORDESTE OPERACOES MARITIMAS", aReceber: 160732.33, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 87644.08, de1a2anos: 73088.25, de2a3anos: 0, mais3anos: 0 },
  { empresa: "MOTA-ENGIL BRASIL S/A", cliente: "VALE SA", aReceber: 3262186.84, aVencer: 3262186.84, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "TRACEVIA", cliente: "COLOMBIA ME SAS", aReceber: 24685.88, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 24685.88, de2a3anos: 0, mais3anos: 0 },
  { empresa: "TRACEVIA", cliente: "CONCESSIONARIA DAS RODOVIAS", aReceber: 72589.02, aVencer: 65123.55, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 7465.47 },
  { empresa: "TRACEVIA", cliente: "CONCESSIONARIA DE RODOVIA NOVA 364", aReceber: 45886.10, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 45886.10, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "TRACEVIA", cliente: "CONCESSIONARIA DE RODOVIAS NOROESTE", aReceber: 444802.64, aVencer: 391207.44, ate30: 0, de31a60: -1857.64, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 55452.84, de2a3anos: 0, mais3anos: 0 },
  { empresa: "TRACEVIA", cliente: "CONCESSIONARIA ECOVIAS", aReceber: 121539.98, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 121539.98 },
  { empresa: "TRACEVIA", cliente: "CONCESSIONARIA ROTA DO OESTE S.A.", aReceber: 857878.17, aVencer: 0, ate30: 857878.17, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "TRACEVIA", cliente: "ECO101 CONCESSIONARIA DE RODOVIAS", aReceber: 51897.79, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 51897.79 },
  { empresa: "TRACEVIA", cliente: "ECORODOVIAS CONCESSOES E SERVICOS", aReceber: 5250.02, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 5250.02 },
  { empresa: "TRACEVIA", cliente: "LABOR ENGENHARIA E TECNOLOGIA", aReceber: 66353.17, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 66353.17, mais3anos: 0 },
  { empresa: "TRACEVIA", cliente: "VELSIS SISTEMA E TECNOLOGIA VIARIA", aReceber: 425009.98, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 425009.98, mais3anos: 0 },
  { empresa: "TRACEVIA", cliente: "VIABAHIA CONCESSIONARIA", aReceber: 218150.48, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 87796.71, de1a2anos: 130353.77, de2a3anos: 0, mais3anos: 0 },
  { empresa: "TRACEVIA", cliente: "VIAPAULISTA S.A", aReceber: 3472.75, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 3472.75 },
  { empresa: "REDUC", cliente: "ECBSA UO BC LOTE 3", aReceber: 68824.12, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 65053.62, de2a3anos: 3770.50, mais3anos: 0 },
  { empresa: "REDUC", cliente: "MOTA ENGIL ENGENHARIA", aReceber: 11179.70, aVencer: 0, ate30: 1458, de31a60: 4348.28, de61a90: 0, de91a180: 0, de181a1ano: 2964.18, de1a2anos: 2409.24, de2a3anos: 0, mais3anos: 0 },
  { empresa: "REDUC", cliente: "PETROBRAS", aReceber: 229612.06, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 107127.79, mais3anos: 122484.27 },
];

export const agingClientesTotals = {
  aReceber: 238494542.65,
  aVencer: 203983026.91,
  ate30: 15940193.11,
  de31a60: 330045.80,
  de61a90: 12073598.04,
  de91a180: 189580.12,
  de181a1ano: 366536.51,
  de1a2anos: 1010574.92,
  de2a3anos: 1323724.19,
  mais3anos: 3277263.05,
};
