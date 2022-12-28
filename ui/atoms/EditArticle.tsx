import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Labels, LocalStorageKeys } from "../../pages/core/configs"
import { useAppDispatch } from "../../pages/hooks";
import { ArticleState, changeArticleState, selectArticleState } from "../../pages/store/articleSlice";
import styles from '../../styles/Atoms.module.scss';
import ArticleEdit from "../molecules/ArticleEdit";
import ArticleModalCloseButton from "./ArticleModalCloseButton";


const EditArticleButton = ({ editArticle, article }: { editArticle: ()=> void, article: ArticleState}) => {
    const [showModal, setModalState] = useState(false);

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(changeArticleState({...article, isNew: false}));
    });
    
    const saveArticle = async () => {
        dispatch(changeArticleState({...article, save: true}));
    }
    
    return (
        <>
        <button
            role="checkbox"
            className={styles.editButton} 
            type="button" 
            onClick={ () => setModalState(true) }
        >
            {Labels.EDIT}
        </button>
        {showModal &&
            <div id="edit" className={styles.modal}>
                <div className={styles.modalContent}>
                    <div className={styles.modalContent__first}>
                       <ArticleEdit isEdit={true} article={article} editArticle={saveArticle} />
                    </div>
                    <div>
                        <ArticleModalCloseButton closeModal={ () => setModalState(false) } />
                    </div>
                </div>
            </div>
        }
        </>
    )
}

export default EditArticleButton;
