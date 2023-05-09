import styles from '../../styles/Atoms.module.scss';

const ArticleDate = ({ date }: IDate) => {
    return (
        <span className={styles.dates}>{date}</span>
    )
}

export default ArticleDate;
