import { Labels, LocalStorageKeys } from "../../pages/core/configs"
import styles from '../../styles/Atoms.module.scss';

const SaveArticleButton = ({ saveArticle }: IArticleActions) => {
    return (
        <button
            className={styles.saveButton} 
            type="button" 
            onClick={ () => saveArticle && saveArticle() }
        >{Labels.SAVE}</button>
    )
}

export default SaveArticleButton;
