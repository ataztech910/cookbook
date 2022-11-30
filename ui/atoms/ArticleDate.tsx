import styles from '../../styles/Atoms.module.scss';

const ArticleDate = ({ date }: { date: string}) => {
    return (
        <span className={styles.dates}>{date}</span>
    )
}

export default ArticleDate;
