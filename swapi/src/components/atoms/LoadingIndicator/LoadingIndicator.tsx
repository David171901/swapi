import styles from './LoadingIndicator.module.css'

const LoadingIndicator = () => {
  return (
    <>
        <div className={styles.LoadingIndicator}>
            <img src="/spinner.svg" alt="Spinner" className={styles.spinner}/>
            <h2 className={styles.h2}>Loading</h2>
        </div>
    </>
  )
}

export default LoadingIndicator