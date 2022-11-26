import authSlice, {
    changeAuthState,
    INITIAL_STATE,
    Auth,
    AuthState
} from '../authSlice';

describe("Auth Slice", () => {
  describe("My First function", () => {
    it("should auth the user in the store", () => {
        const auth: Auth = {
            isLoggedIn: true
          };
          const action = changeAuthState(auth);
          const expectedResult: AuthState = {
            auth,
          };
          const actualResult = authSlice.reducer(INITIAL_STATE, action);
          expect(actualResult).toEqual(expectedResult);
    });
  });
});