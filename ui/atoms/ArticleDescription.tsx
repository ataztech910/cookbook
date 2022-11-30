import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../pages/hooks';
import { selectArticleState, changeArticleState } from '../../pages/store/articleSlice';
import { selectAuthState } from '../../pages/store/authSlice';
import styles from '../../styles/Atoms.module.scss';

const ArticleDescription = ({ description, isEdit }: { description: string, isEdit: boolean }) => {
    const [value, setValue] = useState(description);
    const currentArticle = useSelector(selectArticleState);
    const dispatch = useAppDispatch();
    
    const onChangeHandler = (event: Partial<any>) => {
        const value = event.target.value;
        setValue(value);
        dispatch(changeArticleState({...currentArticle, description: value}));
    }
    return (
        <div className={styles.input}>
            {!isEdit &&
                <span className={styles.dates}>{description}</span> 
            }
            {isEdit && 
                <input placeholder="add description" onChange={onChangeHandler} type="text" value={value}/>
            }
        </div>
    )
}

export default ArticleDescription;
