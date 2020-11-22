import React from 'react'
import DataTable from 'react-data-table-component'
import styles from './Table.module.css'
import tableData from '../../data/tableData'

const customTableStyles = {
  rows: {
    style: {
      backgroundColor: 'white',
      fontSize: '16px',
      color: '#15003E',
    }
  },
  headCells: {
    style: {
      border: '2px solid #eee',
      borderBottom: '4px solid #f9036c',
      fontSize: '16px',
      fontWeight: '700 !important'
    },
  },
  cells: {
    style: {
      border: '2px solid #eee',
      fontWeight: '700 !important'
    },
  },
}

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="#f9036c"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M0 0h24v24H0z" stroke="none" />
    <path d="M12 5v14M18 13l-6 6M6 13l6 6" />
  </svg>
)


const Table = ({ columns, search }) => (
  <div className={styles.tableContainer}>
    <DataTable
      noHeader
      defaultSortField='chain_name'
      sortIcon={<ArrowIcon/>}
      columns={columns.filter(col => col.isShown)}
      data={tableData.filter(item => item.chain_name.toLowerCase().includes(search))}
      customStyles={customTableStyles}
    />
  </div>
)

export default Table;
