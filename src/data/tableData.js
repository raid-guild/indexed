const tableData = [
  {
    id: 2,
    chain_name: 'Arbitrum',
    type: 'POS/plasma',
    tx_cost: '30 gwei',
    finality: '1.7 mh/s',
    consensus: 'consortium',
    max_tps: '<= 4.5k/sec',
    url: 'arbitrum-doc'
  },
  {
    id: 3,
    chain_name: 'Aztec',
    type: 'ZkRollup',
    tx_cost: '$0.000001',
    finality: '< 1 sec',
    consensus: 'Roll-up proofs',
    max_tps: '300',
    url: 'aztec-doc'
  },
  {
    id: 4,
    chain_name: 'Celer',
    type: '---',
    tx_cost: '---',
    finality: '---',
    consensus: '---',
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
    max_tps: '---',
    url: 'kchannels-doc'
  },
  {
    id: 12,
    chain_name: 'Loopring',
    type: 'Chain-agnostic',
    tx_cost: '$0.0002',
    finality: 'Immediate',
    consensus: 'zkRollup',
    max_tps: '16,400',
    url: 'loopring-doc'
  },
  {
    id: 13,
    chain_name: 'Matic Network',
    type: 'POS+Plasma',
    tx_cost: '$0.00001',
    finality: '2 seconds',
    consensus: 'POS',
    max_tps: '7200',
    url: 'maticnetwork-doc'
  },
  {
    id: 14,
    chain_name: 'Matter Labs',
    type: 'ZKSNARK',
    tx_cost: '$0.001',
    finality: '10 min',
    consensus: 'Validity proofs',
    max_tps: '2000',
    url: 'matter-labs-doc'
  },
  {
    id: 15,
    chain_name: 'Meter',
    type: '---',
    tx_cost: '---',
    finality: '---',
    consensus: '---',
    max_tps: '---',
    url: 'meter-doc'
  },
  {
    id: 16,
    chain_name: 'Minter',
    type: 'DPoS',
    tx_cost: '~1500 gwei',
    finality: '5 sec',
    consensus: 'DPoS',
    max_tps: '~1000',
    url: 'minter-doc'
  },
  {
    id: 17,
    chain_name: 'Near',
    type: 'PoS',
    tx_cost: '$0.0004',
    finality: '2 sec',
    consensus: 'POS',
    max_tps: '100k +',
    url: 'near-doc'
  },
  {
    id: 18,
    chain_name: 'OMG',
    type: 'Plasma',
    tx_cost: '$0.23',
    finality: '~15 sec',
    consensus: 'PoA > PoS',
    max_tps: '4000',
    url: 'omg-doc'
  },
  {
    id: 19,
    chain_name: 'Raiden',
    type: '---',
    tx_cost: '---',
    finality: '---',
    consensus: '---',
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
    max_tps: '---',
    url: 'services'
  },
  {
    id: 21,
    chain_name: 'Skale',
    type: 'BLS Rollup',
    tx_cost: 'Gasless*',
    finality: '< 1 sec',
    consensus: 'PoS',
    max_tps: '2000',
    url: 'skale-doc'
  },
  {
    id: 22,
    chain_name: 'Solana',
    type: 'POS + POH',
    tx_cost: '$0.00001',
    finality: '< 1 sec',
    consensus: 'PBFT PoS & PoH',
    max_tps: '50,000',
    url: 'solana-doc'
  },
  {
    id: 23,
    chain_name: 'Starkware',
    type: '---',
    tx_cost: '---',
    finality: '---',
    consensus: '---',
    max_tps: '---',
    url: 'starkware-doc'
  },
  {
    id: 24,
    chain_name: 'Syscoin',
    type: 'Standalone',
    tx_cost: '$0.00000464',
    finality: '10 sec',
    consensus: 'Hybrid PoW/PoS',
    max_tps: '~61000',
    url: 'syscoin-doc'
  },
  {
    id: 25,
    chain_name: 'xDai',
    type: 'POS',
    tx_cost: '1 gwei',
    finality: '2f+1≤n',
    consensus: 'POS',
    max_tps: '~70',
    url: 'xdai-doc'
  },

];

export default tableData
