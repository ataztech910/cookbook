import Link from "next/link";
import styles from '../../styles/Atoms.module.scss';

const LinkToPage = ({ title, link }: {title : string, link: string}) => {
    return (
        <Link
            className={styles.link}
            href={link}>
                {title}
        </Link>
    )
}

export default LinkToPage;
