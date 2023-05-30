import styles from './PersonCell.module.css'

const PersonCell = () => {
  return (
    <>
        <div className={styles.PersonCell}>
            <div className={styles.div}>
                <h2 className={styles.h2}>Luke Skywalker</h2>
                <p className={styles.p}>Human from Tatooine</p>
            </div>
            <img src="/arrow_right.svg" alt="Arrow" className={styles.arrow}/>
        </div>
    </>
  )
}

export default PersonCell