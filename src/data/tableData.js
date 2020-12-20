const tableData = [
  {
    id: 2,
    chain_name: 'Arbitrum',
    type: '---',
    tx_cost: '---',
    finality: '---',
    consensus: '---',
    efficient: '---',
    max_tps: '---',
    url: 'arbitrum-doc'
  },
  {
    id: 3,
    chain_name: 'Aztec',
    type: '---',
    tx_cost: '---',
    finality: '---',
    consensus: '---',
    efficient: '---',
    max_tps: '---',
    url: 'aztec-doc'
  },
  {
    id: 4,
    chain_name: 'Celer',
    type: '---',
    tx_cost: '---',
    finality: '---',
    consensus: '---',
    efficient: '---',
    max_tps: '---',
    url: 'celer-doc'
  },
  {
    id: 5,
    chain_name: 'Connext',
    type: 'Micropayment',
    tx_cost: '0',
    finality: 'instant',
    consensus: 'state channel',
    efficient: 'Yes',
    max_tps: '1000+',
    url: 'connext-doc'
  },
  {
    id: 6,
    chain_name: 'Dapp Solutions',
    type: '---',
    tx_cost: '---',
    finality: '---',
    consensus: '---',
    efficient: '---',
    max_tps: '---',
    url: 'dapp-solutions-doc'
  },
  {
    id: 7,
    chain_name: 'Dragonchain',
    type: '---',
    tx_cost: '---',
    finality: '---',
    consensus: '---',
    efficient: '---',
    max_tps: '---',
    url: 'dragonchain-doc'
  },
  {
    id: 8,
    chain_name: 'Everest',
    type: '---',
    tx_cost: '---',
    finality: '---',
    consensus: '---',
    efficient: '---',
    max_tps: '---',
    url: 'everest-doc'
  },
  {
    id: 9,
    chain_name: 'Fuel Labs',
    type: '---',
    tx_cost: '---',
    finality: '---',
    consensus: '---',
    efficient: '---',
    max_tps: '---',
    url: 'fuel-labs-doc'
  },
  {
    id: 10,
    chain_name: 'Hubble Project',
    type: '---',
    tx_cost: '---',
    finality: '---',
    consensus: '---',
    efficient: '---',
    max_tps: '---',
    url: 'hubble-project-doc'
  },
  {
    id: 11,
    chain_name: 'KChannels',
    type: '---',
    tx_cost: '---',
    finality: '---',
    consensus: '---',
    efficient: '---',
    max_tps: '---',
    url: 'kchannels-doc'
  },
  {
    id: 12,
    chain_name: 'Loopring',
    type: '---',
    tx_cost: '---',
    finality: '---',
    consensus: '---',
    efficient: '---',
    max_tps: '---',
    url: 'loopring-doc'
  },
  {
    id: 13,
    chain_name: 'Matic Network',
    type: 'POS+Plasma',
    tx_cost: '0.00001',
    finality: '2 seconds',
    consensus: 'POS',
    efficient: 'Yes',
    max_tps: '7200',
    url: 'maticnetwork-doc'
  },
  {
    id: 14,
    chain_name: 'Matter Labs',
    type: '---',
    tx_cost: '---',
    finality: '---',
    consensus: '---',
    efficient: '---',
    max_tps: '---',
    url: 'matter-labs-doc'
  },
  {
    id: 15,
    chain_name: 'Meter',
    type: '---',
    tx_cost: '---',
    finality: '---',
    consensus: '---',
    efficient: '---',
    max_tps: '---',
    url: 'meter-doc'
  },
  {
    id: 16,
    chain_name: 'Minter',
    type: '---',
    tx_cost: '---',
    finality: '---',
    consensus: '---',
    efficient: '---',
    max_tps: '---',
    url: 'minter-doc'
  },
  {
    id: 17,
    chain_name: 'Near',
    type: '---',
    tx_cost: '---',
    finality: '---',
    consensus: '---',
    efficient: '---',
    max_tps: '---',
    url: 'near-doc'
  },
  {
    id: 18,
    chain_name: 'OMG',
    type: '---',
    tx_cost: '---',
    finality: '---',
    consensus: '---',
    efficient: '---',
    max_tps: '---',
    url: 'omg-doc'
  },
  {
    id: 19,
    chain_name: 'Raiden',
    type: '---',
    tx_cost: '---',
    finality: '---',
    consensus: '---',
    efficient: '---',
    max_tps: '---',
    url: 'raiden-doc'
  },
  {
    id: 20,
    chain_name: 'Serv',
    type: '---',
    tx_cost: '---',
    finality: '---',
    consensus: '---',
    efficient: '---',
    max_tps: '---',
    url: 'services'
  },
  {
    id: 21,
    chain_name: 'Skale',
    type: '---',
    tx_cost: '---',
    finality: '---',
    consensus: '---',
    efficient: '---',
    max_tps: '---',
    url: 'skale-doc'
  },
  {
    id: 22,
    chain_name: 'Solana',
    type: '---',
    tx_cost: '---',
    finality: '---',
    consensus: '---',
    efficient: '---',
    max_tps: '---',
    url: 'solana-doc'
  },
  {
    id: 23,
    chain_name: 'Starkware',
    type: '---',
    tx_cost: '---',
    finality: '---',
    consensus: '---',
    efficient: '---',
    max_tps: '---',
    url: 'starkware-doc'
  },
  {
    id: 24,
    chain_name: 'Syscoin',
    type: '---',
    tx_cost: '---',
    finality: '---',
    consensus: '---',
    efficient: '---',
    max_tps: '---',
    url: 'syscoin-doc'
  },
  {
    id: 25,
    chain_name: 'xDai',
    type: 'POS',
    tx_cost: '1 gwei',
    finality: '2f+1≤n',
    consensus: 'POS',
    efficient: 'Yes',
    max_tps: '~70',
    url: 'xdai-doc'
  },

];

export default tableData
