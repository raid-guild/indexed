const tableData = [
  {
    id: 2,
    chain_name: 'Arbitrum',
    type: 'POS/plasma',
    tx_cost: '30 gwei',
    consensus: 'Consortium',
    max_tps: '4.5k',
    url: 'arbitrum-doc'
  },
  {
    id: 3,
    chain_name: 'Aztec',
    type: 'ZkRollup',
    tx_cost: '0.7040 Gwei',
    consensus: 'Roll-up proofs',
    max_tps: '300',
    url: 'aztec-doc'
  },
  {
    id: 5,
    chain_name: 'Connext',
    type: 'Micropayment',
    tx_cost: '0',
    consensus: 'State Channel',
    max_tps: '1k',
    url: 'connext-doc'
  },
  {
    id: 9,
    chain_name: 'Fuel Labs',
    type: 'Rollup',
    tx_cost: '21k gwei',
    consensus: 'PoW',
    max_tps: '320',
    url: 'fuel-labs-doc'
  },
  {
    id: 12,
    chain_name: 'Loopring',
    type: 'Chain-agnostic',
    tx_cost: '140 gwei',
    consensus: 'ZkRollup',
    max_tps: '16k',
    url: 'loopring-doc'
  },
  {
    id: 13,
    chain_name: 'Matic Network',
    type: 'POS+Plasma',
    tx_cost: '7 gwei',
    consensus: 'POS',
    max_tps: '7.2k',
    url: 'maticnetwork-doc'
  },
  {
    id: 14,
    chain_name: 'Matter Labs',
    type: 'ZKSNARK',
    tx_cost: '700 gwei',
    consensus: 'Validity proofs',
    max_tps: '2k',
    url: 'matter-labs-doc'
  },
  {
    id: 16,
    chain_name: 'Minter',
    type: 'DPoS',
    tx_cost: '1500 gwei',
    consensus: 'DPoS',
    max_tps: '1k',
    url: 'minter-doc'
  },
  {
    id: 17,
    chain_name: 'Near',
    type: 'PoS',
    tx_cost: '280 gwei',
    consensus: 'POS',
    max_tps: '100k',
    url: 'near-doc'
  },
  {
    id: 18,
    chain_name: 'OMG',
    type: 'Plasma',
    tx_cost: '160k gwei',
    consensus: 'PoA > PoS',
    max_tps: '4k',
    url: 'omg-doc'
  },
  {
    id: 19,
    chain_name: 'Raiden',
    type: 'State Channel',
    tx_cost: '---',
    consensus: 'PoS',
    max_tps: '100k',
    url: 'raiden-doc'
  },
  {
    id: 21,
    chain_name: 'Skale',
    type: 'BLS Rollup',
    tx_cost: '0',
    consensus: 'PoS',
    max_tps: '2k',
    url: 'skale-doc'
  },
  {
    id: 22,
    chain_name: 'Solana',
    type: 'POS + POH',
    tx_cost: '7 gwei',
    consensus: 'PBFT PoS & PoH',
    max_tps: '50k',
    url: 'solana-doc'
  },
  {
    id: 24,
    chain_name: 'Starkware (Validium)',
    type: 'CVM',
    tx_cost: '17 gwei',
    consensus: 'Validium proofs',
    max_tps: '3k',
    url: 'starkware-validium-doc'
  },
  {
    id: 23,
    chain_name: 'Starkware (Zkrollup)',
    type: 'CVM',
    tx_cost: '315 gwei',
    consensus: 'ZK proofs',
    max_tps: '3k',
    url: 'starkware-zkrollup-doc'
  },
  {
    id: 25,
    chain_name: 'Syscoin',
    type: 'Standalone',
    tx_cost: '3 gwei',
    consensus: 'Hybrid PoW/PoS',
    max_tps: '61k',
    url: 'syscoin-doc'
  },
  {
    id: 26,
    chain_name: 'xDai',
    type: 'POS',
    tx_cost: '1 gwei',
    consensus: 'POS',
    max_tps: '70',
    url: 'xdai-doc'
  },

];

export default tableData
