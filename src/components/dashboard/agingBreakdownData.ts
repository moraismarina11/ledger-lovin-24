// ── Aging Fornecedores (snapshot 06/03/2026) ──
// Same data for all periods (Jan, Fev, S4, Total)

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
    valor: -1986568.97,
    aVencer: 0,
    ate30: -16469.04,
    de31a60: -2990.86,
    de61a90: -138763.46,
    de91a180: -98855.01,
    de181a360: -788295.05,
    mais360: -941195.55,
  },
  {
    empresa: "CONSÓRCIO ECB SEA_ALSUB",
    valor: -7926480.40,
    aVencer: -7926480.40,
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
    valor: -8685705.10,
    aVencer: -6551361,
    ate30: -309584,
    de31a60: -160695,
    de61a90: -11605,
    de91a180: -59386,
    de181a360: -122023,
    mais360: -1471051,
  },
  {
    empresa: "Tracevia Brasil",
    valor: -1238646.10,
    aVencer: -222723,
    ate30: -235931,
    de31a60: -272148,
    de61a90: -5529,
    de91a180: -43440,
    de181a360: -113033,
    mais360: -345843,
  },
  {
    empresa: "Mota Engil Engenharia",
    valor: -39651961.53,
    aVencer: -28918826,
    ate30: -3851026,
    de31a60: -3691318,
    de61a90: -4412,
    de91a180: -79186,
    de181a360: -3096388,
    mais360: -10806,
  },
  {
    empresa: "REDUC",
    valor: -77161.71,
    aVencer: 0,
    ate30: -1136,
    de31a60: -1071,
    de61a90: -1971,
    de91a180: -22,
    de181a360: 0,
    mais360: -72961,
  },
];

export const agingFornecedoresTotals: AgingFornecedorEntry = {
  empresa: "Total Geral",
  valor: -59567511,
  aVencer: -43619390,
  ate30: -4414146,
  de31a60: -4128223,
  de61a90: -162280,
  de91a180: -280889,
  de181a360: -4120366,
  mais360: -2842218,
};

// ── Aging Clientes (snapshot 06/03/2026) ──

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
  { empresa: "MOTA ENGIL ENGENHARIA", cliente: "Outros Clientes / Base", aReceber: 313383.05, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 302923, mais3anos: 10461 },
  { empresa: "MOTA ENGIL ENGENHARIA", cliente: "PETROBRAS", aReceber: 37494117.75, aVencer: 33821436, ate30: 1089488, de31a60: 273193, de61a90: 440437, de91a180: 143540, de181a1ano: 155128, de1a2anos: 0, de2a3anos: 0, mais3anos: 1570896 },
  { empresa: "REDUC", cliente: "ECBSA UO BC LOTE 3", aReceber: 68824, aVencer: 68824, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "REDUC", cliente: "MOTA ENGIL ENGENHARIA", aReceber: 11180, aVencer: 11180, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "REDUC", cliente: "PETROBRAS", aReceber: 229612, aVencer: 229612, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "MOTA ENGIL FUNDAÇÕES", cliente: "BESIX-ECB SPE LTDA", aReceber: 26284603, aVencer: 26284603, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "CONSORCIO ALSUB", cliente: "ECOLOGIKA AMBIENTAL TRANSPORTE", aReceber: 7636, aVencer: 7636, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "MOTA ENGIL BRASIL S/A", cliente: "PETROBRAS", aReceber: 16889507, aVencer: 16889507, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "MOTA ENGIL BRASIL S/A", cliente: "AUTOPISTA FERNAO DIAS S.A", aReceber: 544752, aVencer: 544752, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "MOTA ENGIL BRASIL S/A", cliente: "CONCESSIONARIA RODOVIAS DO OESTE SP", aReceber: 0, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "MOTA ENGIL BRASIL S/A", cliente: "VALE SA", aReceber: 5866488, aVencer: 5866488, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "MOTA ENGIL BRASIL S/A", cliente: "BESIX-ECB SPE LTDA", aReceber: 544024, aVencer: 544024, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "MOTA ENGIL BRASIL S/A", cliente: "TUPI NORDESTE OPER. MARITIMAS", aReceber: 160732, aVencer: 160732, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "MOTA ENGIL BRASIL S/A", cliente: "GUARA-NORTE OPER. MARITIMAS", aReceber: 549487, aVencer: 549487, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "TRACEVIA", cliente: "COLOMBIA ME SAS", aReceber: 24685.88, aVencer: 24686, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "TRACEVIA", cliente: "VIABAHIA CONCESSIONARIA", aReceber: 218150.48, aVencer: 218150, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "TRACEVIA", cliente: "ECORODOVIAS CONC. E SERVIÇOS", aReceber: 5250.02, aVencer: 5250, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "TRACEVIA", cliente: "ECO101 CONC. DE RODOVIAS", aReceber: 51897.79, aVencer: 51898, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "TRACEVIA", cliente: "VELSIS SIST. E TEC. VIÁRIA", aReceber: 425009.98, aVencer: 425010, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "TRACEVIA", cliente: "VIAPAULISTA S.A.", aReceber: 3472.75, aVencer: 3473, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "TRACEVIA", cliente: "CONC. DAS RODOVIAS", aReceber: 7465.47, aVencer: 7465, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "TRACEVIA", cliente: "CONC. ECOVIAS", aReceber: 121539.98, aVencer: 121540, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "TRACEVIA", cliente: "LABOR ENG. E TECNOLOGIA", aReceber: 66353.17, aVencer: 66353, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "TRACEVIA", cliente: "CONC. RODOVIAS NOROESTE", aReceber: 239357.99, aVencer: 239358, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "TRACEVIA", cliente: "EPR VIA MINEIRA S.A.", aReceber: 8096.49, aVencer: 8096, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "TRACEVIA", cliente: "CONC. RODOVIA NOVA 364", aReceber: 45886.10, aVencer: 45886, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "TRACEVIA", cliente: "CONC. ROTA DO OESTE S.A.", aReceber: 698797.64, aVencer: 698798, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
];

export const agingClientesTotals = {
  aReceber: 90880310.29,
  aVencer: 86894245,
  ate30: 1089488,
  de31a60: 273193,
  de61a90: 440437,
  de91a180: 143540,
  de181a1ano: 155128,
  de1a2anos: 0,
  de2a3anos: 302923,
  mais3anos: 1581356,
};
