import LoadingIndicator from '../../atoms/LoadingIndicator/LoadingIndicator'
import styles from './LoadingCell.module.css'

const LoadingCell = () => {
  return (
    <>
        <div className={styles.LoadingCell}>
            <LoadingIndicator></LoadingIndicator>
        </div>
    </>
  )
}

export default LoadingCell