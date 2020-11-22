import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import Modal from 'react-modal'
import styles from './Filters.module.css';


const Filters = ({ search, setSearch, columns, setColumns }) => {

  const [modalIsOpen, setIsOpen] = useState(false)

  const searchName = (e) => {
    const search = e.target.value.trim().toLowerCase()
    setSearch(search)
  }

  const filterColumns = (e) => {

    const filteredCol = columns.map(column => {

      if (column.selector === e.target.value) {
        return {
          ...column,
          isShown: e.target.checked
        }
      } else {
        return column
      }
      
    })

    setColumns(filteredCol)
  }

  return (
    <div>

      <input 
        type="text"
        placeholder="Search chains"
        onChange={(e) => searchName(e) }
        className={styles.searchBar}
      />

      <button onClick={() => setIsOpen(true)}>Filters</button>
      
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Example Modal"
        className={styles.Modal}
        overlayClassName={styles.Overlay}
      >
        <p>Select Columns</p>
        {
          columns.map(col => (
            <div key={col.selector}>
              <input 
                checked={col.isShown} 
                value={col.selector} 
                id={col.selector}
                type='checkbox' 
                onClick={(e) => filterColumns(e)}
              />
              <label htmlFor={col.selector}>{col.name}</label>
            </div>
          ))
        }
        <button onClick={() => setIsOpen(false)}>Close</button>
      </Modal>
    </div>
  )
}

export default Filters;
