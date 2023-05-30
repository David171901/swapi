import styles from './DataCell.module.css'

const DataCell = () => {
  return (
    <>
        <div className={styles.DataCell}>
            <h2 className={styles.left}>Eye Color</h2>
            <h2 className={styles.right}>Blue</h2>
        </div>
    </>
  )
}

export default DataCell