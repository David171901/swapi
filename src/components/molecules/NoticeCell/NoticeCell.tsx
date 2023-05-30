import styles from './NoticeCell.module.css';

interface Props {
  label: string;
}

const NoticeCell = ({ label }: Props) => {
  return (
    <div className={styles.noticeCell}>
      <h2 className={styles.heading}>{label}</h2>
    </div>
  );
};

export default NoticeCell;
