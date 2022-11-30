import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../pages/hooks';
import { selectArticleState, changeArticleState } from '../../pages/store/articleSlice';
import { selectAuthState } from '../../pages/store/authSlice';
import styles from '../../styles/Atoms.module.scss';

const ArticleText = ({ text, isEdit }: { text: string, isEdit: boolean}) => {
    const [value, setValue] = useState(text)
    const currentArticle = useSelector(selectArticleState);
    const dispatch = useAppDispatch();

    const onChangeHandler = (event: Partial<any>) => {
        const value = event.target.value;
        setValue(value);
        dispatch(changeArticleState({...currentArticle, text: value}));
    }
    return (
        <div className={styles.input}>
            {!isEdit &&
                <span className={styles.dates}>{text}</span> 
            }
            {isEdit && 
                <textarea placeholder="add text" onChange={onChangeHandler} value={value}></textarea>
            }
        </div>
    )
}

export default ArticleText;
