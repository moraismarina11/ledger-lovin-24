// ── Aging Fornecedores (snapshot 13/03/2026) ──
// Same data for all periods (Jan, Fev, S4, S5, Mar, Total)

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
    valor: -1164707.43,
    aVencer: -884,
    ate30: 806637,
    de31a60: -3351,
    de61a90: -81719,
    de91a180: -155900,
    de181a360: -788295,
    mais360: -941196,
  },
  {
    empresa: "CONSÓRCIO ECB SEA_ALSUB",
    valor: -5357553.35,
    aVencer: -5357553,
    ate30: 0,
    de31a60: 0,
    de61a90: 0,
    de91a180: 0,
    de181a360: 0,
    mais360: 0,
  },
  {
    empresa: "MEBR - Part. Consultoria",
    valor: -987.66,
    aVencer: 0,
    ate30: 0,
    de31a60: 0,
    de61a90: 0,
    de91a180: 0,
    de181a360: -627,
    mais360: -360,
  },
  {
    empresa: "MOTA-ENGIL BRASIL S/A",
    valor: -8972558.43,
    aVencer: -7225848,
    ate30: -30243,
    de31a60: -53069,
    de61a90: -10314,
    de91a180: -60678,
    de181a360: -122028,
    mais360: -1470379,
  },
  {
    empresa: "Tracevia Brasil",
    valor: -1805497.10,
    aVencer: -248371,
    ate30: -705419,
    de31a60: -343863,
    de61a90: -5529,
    de91a180: -32260,
    de181a360: -124213,
    mais360: -345843,
  },
  {
    empresa: "Mota Engil Engenharia",
    valor: -40340418.58,
    aVencer: -29655391,
    ate30: -3830884,
    de31a60: -3700213,
    de61a90: 0,
    de91a180: -51631,
    de181a360: -3091493,
    mais360: -10806,
  },
  {
    empresa: "REDUC",
    valor: -151568.91,
    aVencer: -151569,
    ate30: 0,
    de31a60: 0,
    de61a90: 0,
    de91a180: 0,
    de181a360: 0,
    mais360: 0,
  },
];

export const agingFornecedoresTotals: AgingFornecedorEntry = {
  empresa: "Total Geral",
  valor: -57793291,
  aVencer: -42639617,
  ate30: -3759909,
  de31a60: -4100496,
  de61a90: -97561,
  de91a180: -300468,
  de181a360: -4126656,
  mais360: -2768585,
};

// ── Aging Clientes (snapshot 13/03/2026) ──

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
  { empresa: "MOTA ENGIL ENGENHARIA", cliente: "Outros Clientes / Base Total", aReceber: 313383.05, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 313383, mais3anos: 0 },
  { empresa: "MOTA ENGIL ENGENHARIA", cliente: "PETROBRAS", aReceber: 69427212.26, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 7188, de91a180: 49286, de181a1ano: 13182960, de1a2anos: 55835858, de2a3anos: 344243, mais3anos: 7677 },
  { empresa: "CONSÓRCIO ALSUB", cliente: "ECOLOGIKA AMBIENTAL TRANSPORTE", aReceber: 84160, aVencer: 75620, ate30: 8540, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "MOTA ENGIL FUNDAÇÕES", cliente: "BESIX-ECB SPE LTDA", aReceber: 27097858.01, aVencer: 813255, ate30: 14524603, de31a60: 0, de61a90: 12209765, de91a180: -449765, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "MOTA-ENGIL BRASIL S/A", cliente: "AUTOPISTA FERNAO DIAS S.A", aReceber: 544752.36, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 544752 },
  { empresa: "MOTA-ENGIL BRASIL S/A", cliente: "BESIX-ECB SPE LTDA", aReceber: 0, aVencer: 544024, ate30: 303202, de31a60: -847226, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "MOTA-ENGIL BRASIL S/A", cliente: "CONCESSIONARIA RODOVIAS DO OESTE SP", aReceber: 0, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "MOTA-ENGIL BRASIL S/A", cliente: "GUARA-NORTE OPERACOES MARITIMAS", aReceber: 549487.21, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 549487, de2a3anos: 0, mais3anos: 0 },
  { empresa: "MOTA-ENGIL BRASIL S/A", cliente: "PETROLEO BRASILEIRO S A PETROBRAS", aReceber: 132139387.75, aVencer: 130773638, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 110044, de2a3anos: 416661, mais3anos: 839044 },
  { empresa: "MOTA-ENGIL BRASIL S/A", cliente: "TUPI NORDESTE OPERACOES MARITIMAS", aReceber: 160732.33, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 87644, de1a2anos: 73088, de2a3anos: 0, mais3anos: 0 },
  { empresa: "MOTA-ENGIL BRASIL S/A", cliente: "VALE SA", aReceber: 5866487.61, aVencer: 5866488, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "TRACEVIA", cliente: "COLOMBIA ME SAS", aReceber: 24685.88, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 24686, de2a3anos: 0, mais3anos: 0 },
  { empresa: "TRACEVIA", cliente: "CONCESSIONARIA DAS RODOVIAS", aReceber: 7465.47, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 7465 },
  { empresa: "TRACEVIA", cliente: "CONCESSIONARIA DE RODOVIA NOVA 364", aReceber: 45886.10, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 45886, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "TRACEVIA", cliente: "CONCESSIONARIA DE RODOVIAS NOROESTE", aReceber: 241215.63, aVencer: 0, ate30: 185763, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 55453, de2a3anos: 0, mais3anos: 0 },
  { empresa: "TRACEVIA", cliente: "CONCESSIONARIA ECOVIAS", aReceber: 121539.98, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 121540 },
  { empresa: "TRACEVIA", cliente: "CONCESSIONARIA ROTA DO OESTE S.A.", aReceber: 698797.64, aVencer: 0, ate30: 698798, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "TRACEVIA", cliente: "ECO101 CONCESSIONARIA DE RODOVIAS", aReceber: 51897.79, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 51898 },
  { empresa: "TRACEVIA", cliente: "ECORODOVIAS CONCESSOES E SERVICOS", aReceber: 5250.02, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 5250 },
  { empresa: "TRACEVIA", cliente: "EPR VIA MINEIRA S.A.", aReceber: 8096.49, aVencer: 0, ate30: 8096, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "TRACEVIA", cliente: "LABOR ENGENHARIA E TECNOLOGIA", aReceber: 66353.17, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 66353, mais3anos: 0 },
  { empresa: "TRACEVIA", cliente: "VELSIS SISTEMA E TECNOLOGIA VIARIA", aReceber: 425009.98, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 425010, mais3anos: 0 },
  { empresa: "TRACEVIA", cliente: "VIABAHIA CONCESSIONARIA", aReceber: 218150.48, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 87797, de1a2anos: 130354, de2a3anos: 0, mais3anos: 0 },
  { empresa: "TRACEVIA", cliente: "VIAPAULISTA S.A", aReceber: 3472.75, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 3473 },
  { empresa: "REDUC", cliente: "ECBSA UO BC LOTE 3", aReceber: 68824.12, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 65054, de2a3anos: 3771, mais3anos: 0 },
  { empresa: "REDUC", cliente: "MOTA ENGIL ENGENHARIA", aReceber: 11179.70, aVencer: 0, ate30: 5806, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 2964, de1a2anos: 2409, de2a3anos: 0, mais3anos: 0 },
  { empresa: "REDUC", cliente: "PETROBRAS", aReceber: 229612.06, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 107128, mais3anos: 122484 },
];

export const agingClientesTotals = {
  aReceber: 238410897.84,
  aVencer: 138073025,
  ate30: 15734808,
  de31a60: -847226,
  de61a90: 12216953,
  de91a180: -400479,
  de181a1ano: 13407251,
  de1a2anos: 56846433,
  de2a3anos: 1676549,
  mais3anos: 1703583,
};
