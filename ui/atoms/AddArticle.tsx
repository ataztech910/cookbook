import Link from "next/link";
import { useEffect, useState } from "react";
import { Labels } from "../../pages/core/configs"
import { useAppDispatch, useAppSelector } from "../../pages/hooks";
import { changeArticleState } from "../../pages/store/articleSlice";
import { selectAuthState } from "../../pages/store/authSlice";
import styles from '../../styles/Atoms.module.scss';
import ArticleEdit from "../molecules/ArticleEdit";
import ArticleModalCloseButton from "./ArticleModalCloseButton";

const AddArticleButton = ({ openModal }: IAddArticleButton) => {
    const [buttonLabel, setButtonState] = useState(Labels.SUBMIT);
    const [showModal, setModalState] = useState(false);
    const isLoggedIn = useAppSelector(selectAuthState);
    const dispatch = useAppDispatch();
    const newArticle = {
        id: -1,
        title: '',
        description: '',
        text: '',
        publishingDate: '',
        isNew: true
    };

    const saveData = (data: IArticle) => {
        console.log('data to save', data)
    }

    useEffect(() => {
        if (isLoggedIn) {
            setButtonState(Labels.ADD_ARTICLE);
        }
        dispatch(changeArticleState(newArticle));
    }, [newArticle]);
    return (
        <>
            {isLoggedIn &&
                
                    <button
                        className={styles.blueButton} 
                        type="button" 
                        onClick={ () => setModalState(true) }
                    >{Labels.ADD_ARTICLE}</button>
            }

            {showModal &&        
                    <div id="edit" className={styles.modal}>
                        <div className={styles.modalContent}>
                            <div className={styles.modalContent__first}>
                                <ArticleEdit isEdit={true} article={newArticle} editArticle={saveData} />
                            </div>
                            <div>
                                <ArticleModalCloseButton closeModal={ () => setModalState(false) } />
                            </div>
                        </div>
                    </div>
                
            }
            {!isLoggedIn && <Link className={styles.blueButton}  href={"/login"}>{Labels.SUBMIT}</Link>}
        </>
    )
}

export default AddArticleButton;
