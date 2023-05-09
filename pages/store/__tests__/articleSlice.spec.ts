import articleSlice, {
    changeArticleState,
    INITIAL_STATE,
    ArticleState
} from '../articleSlice';

describe("Article Slice", () => {
  describe("Article check function", () => {
    it("should change artile in store", () => {
        const state: ArticleState = {
          isNew: true,
          id: 0,
          title: '',
          description: '',
          text: '',
          publishingDate: ''
        };
          const action = changeArticleState(state);
          const expectedResult: ArticleState = state;
          const actualResult = articleSlice.reducer(INITIAL_STATE, action);
          expect(actualResult).toEqual(expectedResult);
    });
  });
});