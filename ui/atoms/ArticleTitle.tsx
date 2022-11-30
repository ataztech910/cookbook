import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../pages/hooks';
import { changeArticleState, selectArticleState } from '../../pages/store/articleSlice';
import styles from '../../styles/Atoms.module.scss';

const ArticleTitle = ({ title, isEdit }: { title: string, isEdit: boolean}) => {
    const [value, setValue] = useState(title);
    const currentArticle = useSelector(selectArticleState);
    const dispatch = useAppDispatch();
    
    const onChangeHandler = (event: Partial<any>) => {
        const value = event.target.value;
        setValue(value);
        dispatch(changeArticleState({...currentArticle, title: value}));
    }
    return (
        <div className={styles.input}>
            {!isEdit &&
                <span className={styles.dates}>{title}</span> 
            }
            {isEdit && 
                <input placeholder="add title" onChange={onChangeHandler} type="text" value={value}/>
            }
        </div>
    )
}

export default ArticleTitle;
