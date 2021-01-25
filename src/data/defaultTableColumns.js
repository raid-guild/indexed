import React from 'react'

const defaultTableColumns = [
  {
    name: 'Chain Name',
    selector: 'chain_name',
    sortable: true,
    isShown: true,
    defaultSortAsc: true,
    cell: row => <a href={`/docs/${row.url}`}>{row.chain_name}</a>,
    style: {
      'a': {
        color: '#f9036c',
        textAlign: 'left'
      }
    },
    conditionalCellStyles: [
      {
        when: cell => cell.chain_name === "Chain Name",
        style: { color: '#13ce7d' },
      },
    ]
  },
  {
    name: 'Type',
    selector: 'type',
    sortable: true,
    isShown: true,
  },
  {
    name: 'Tx Cost',
    selector: 'tx_cost',
    sortable: true,
    isShown: true,
    conditionalCellStyles: [
      {
        when: cell => cell.tx_cost === "Very Low",
        style: { color: '#69ce7c' }
      },
      {
        when: cell => cell.tx_cost === "Low",
        style: { color: '#2382de' }
      },
      {
        when: cell => cell.tx_cost === "Average",
        style: { color: '#2402ff' }
      },
      {
        when: cell => cell.tx_cost === "High",
        style: { color: '#8e2abf' }
      },
      {
        when: cell => cell.tx_cost === "Very High",
        style: { color: '#f9036c' }
      }
    ]
  },
  {
    name: 'Consensus',
    selector: 'consensus',
    sortable: true,
    isShown: true
  },
  {
    name: 'Max TPS',
    selector: 'max_tps',
    sortable: true,
    isShown: true,
  },
];

export default defaultTableColumns