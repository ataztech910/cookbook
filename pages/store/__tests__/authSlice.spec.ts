import authSlice, {
    changeAuthState,
    INITIAL_STATE,
    AuthState
} from '../authSlice';

describe("Auth Slice", () => {
  describe("My First function", () => {
    it("should auth the user in the store", () => {
        const auth: AuthState = {
            isLoggedIn: true
          };
          const action = changeAuthState(auth);
          const expectedResult: AuthState = {
            ...auth,
          };
          const actualResult = authSlice.reducer(INITIAL_STATE, action);
          expect(actualResult).toEqual(expectedResult);
    });
  });
});