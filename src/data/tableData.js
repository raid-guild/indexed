const tableData = [
  {
    id: 1,
    chain_name: 'Abridged',
    tx_cost: 'Very Low',
    finality: '1 week',
    consensus: 'POS',
    efficient: 'NO',
    max_tps: '10,000*',
    url: 'abridged-kchannels-doc'
  },
  {
    id: 2,
    chain_name: 'Arbitrum',
    tx_cost: 'Low',
    finality: '1 week',
    consensus: 'POS',
    efficient: 'NO',
    max_tps: '10,000*',
    url: 'arbitrum-doc'
  },
  {
    id: 3,
    chain_name: 'Aztec',
    tx_cost: 'Very High',
    finality: '1 week',
    consensus: 'POS',
    efficient: 'YES',
    max_tps: '10,000*',
    url: 'aztec-doc'
  },
  {
    id: 4,
    chain_name: 'Celer',
    tx_cost: 'Very Low',
    finality: '1 week',
    consensus: 'POS',
    efficient: 'NO',
    max_tps: '10,000*',
    url: 'celer-doc'
  },
  {
    id: 5,
    chain_name: 'Connext',
    tx_cost: 'Low',
    finality: '1 week',
    consensus: 'POS',
    efficient: 'NO',
    max_tps: '10,000*',
    url: 'connext-doc'
  },
  {
    id: 6,
    chain_name: 'Dapp Solutions',
    tx_cost: 'Very High',
    finality: '1 week',
    consensus: 'POS',
    efficient: 'YES',
    max_tps: '10,000*',
    url: 'dapp-solutions-doc'
  },
  {
    id: 7,
    chain_name: 'Dragonchain',
    tx_cost: 'Very Low',
    finality: '1 week',
    consensus: 'POS',
    efficient: 'NO',
    max_tps: '10,000*',
    url: 'dragonchain-doc'
  },
  {
    id: 8,
    chain_name: 'Everest',
    tx_cost: 'Low',
    finality: '1 week',
    consensus: 'POS',
    efficient: 'NO',
    max_tps: '10,000*',
    url: 'everest-doc'
  },
  {
    id: 9,
    chain_name: 'Fuel Labs',
    tx_cost: 'Very High',
    finality: '1 week',
    consensus: 'POS',
    efficient: 'YES',
    max_tps: '10,000*',
    url: 'fuel-labs-doc'
  },
  {
    id: 10,
    chain_name: 'Hubble Project',
    tx_cost: 'Very Low',
    finality: '1 week',
    consensus: 'POS',
    efficient: 'NO',
    max_tps: '10,000*',
    url: 'hubble-project-doc'
  },
  {
    id: 11,
    chain_name: 'Loopring',
    tx_cost: 'Low',
    finality: '1 week',
    consensus: 'POS',
    efficient: 'NO',
    max_tps: '10,000*',
    url: 'loopring-doc'
  },
  {
    id: 12,
    chain_name: 'Matic Network',
    tx_cost: 'Very High',
    finality: '1 week',
    consensus: 'POS',
    efficient: 'YES',
    max_tps: '10,000*',
    url: 'maticnetwork-doc'
  },
  {
    id: 13,
    chain_name: 'Matter Labs',
    tx_cost: 'Very Low',
    finality: '1 week',
    consensus: 'POS',
    efficient: 'NO',
    max_tps: '10,000*',
    url: 'matter-labs-doc'
  },
  {
    id: 14,
    chain_name: 'Meter',
    tx_cost: 'Low',
    finality: '1 week',
    consensus: 'POS',
    efficient: 'NO',
    max_tps: '10,000*',
    url: 'meter-doc'
  },
  {
    id: 15,
    chain_name: 'Minter',
    tx_cost: 'Very High',
    finality: '1 week',
    consensus: 'POS',
    efficient: 'YES',
    max_tps: '10,000*',
    url: 'minter-doc'
  },
  {
    id: 16,
    chain_name: 'Near',
    tx_cost: 'Very Low',
    finality: '1 week',
    consensus: 'POS',
    efficient: 'NO',
    max_tps: '10,000*',
    url: 'near-doc'
  },
  {
    id: 17,
    chain_name: 'OMG',
    tx_cost: 'Low',
    finality: '1 week',
    consensus: 'POS',
    efficient: 'NO',
    max_tps: '10,000*',
    url: 'omg-doc'
  },
  {
    id: 18,
    chain_name: 'Raiden',
    tx_cost: 'Very High',
    finality: '1 week',
    consensus: 'POS',
    efficient: 'YES',
    max_tps: '10,000*',
    url: 'raiden-doc'
  },
  {
    id: 19,
    chain_name: 'Serv',
    tx_cost: 'Very Low',
    finality: '1 week',
    consensus: 'POS',
    efficient: 'NO',
    max_tps: '10,000*',
    url: 'services'
  },
  {
    id: 20,
    chain_name: 'Skale',
    tx_cost: 'Low',
    finality: '1 week',
    consensus: 'POS',
    efficient: 'NO',
    max_tps: '10,000*',
    url: 'skale-doc'
  },
  {
    id: 21,
    chain_name: 'Solana',
    tx_cost: 'Very High',
    finality: '1 week',
    consensus: 'POS',
    efficient: 'YES',
    max_tps: '10,000*',
    url: 'solana-doc'
  },
  {
    id: 22,
    chain_name: 'Starkware',
    tx_cost: 'Very Low',
    finality: '1 week',
    consensus: 'POS',
    efficient: 'NO',
    max_tps: '10,000*',
    url: 'starkware-doc'
  },
  {
    id: 23,
    chain_name: 'Syscoin',
    tx_cost: 'Low',
    finality: '1 week',
    consensus: 'POS',
    efficient: 'NO',
    max_tps: '10,000*',
    url: 'syscoin-doc'
  },
  {
    id: 24,
    chain_name: 'xDai',
    tx_cost: 'Very High',
    finality: '1 week',
    consensus: 'POS',
    efficient: 'YES',
    max_tps: '10,000*',
    url: 'xdai-doc'
  },

];

export default tableData
