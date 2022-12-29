import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

export type ArticleState = {
    id: number
    title: string
    description: string
    text: string
    publishingDate: string
    isNew?: boolean
    save?: boolean
}

export const INITIAL_STATE: ArticleState = {
    id: 0,
    title: '',
    description: '',
    text: '',
    publishingDate: '',
    isNew: false
};

const articleSlice = createSlice({
  name: "article",
  reducers: {
    changeArticleState: (state: RootState, action: PayloadAction<ArticleState>) => {
        const newArticleState = action.payload;
        state = {...newArticleState };
        return state;
    }
  },
  initialState: INITIAL_STATE, 
});

export const selectArticleState = (state: RootState) => {
    return state.article;
}
export const { changeArticleState } = articleSlice.actions;
export default articleSlice;