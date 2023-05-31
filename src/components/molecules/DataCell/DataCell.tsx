import styles from "./DataCell.module.css";

interface DataCellProps {
  leftText: string;
  rightText: string;
}

export const DataCell = ({ leftText, rightText }: DataCellProps) => {
  return (
    <div className={styles.dataCell}>
      <h2 className={styles.left}>{leftText}</h2>
      <h2 className={styles.right}>{rightText}</h2>
    </div>
  );
};
