const AuthReducer =(state, action)=>{
  switch(action.type){
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false
      };
    case "LOGIN_SUCCESS":
      sessionStorage.setItem("a33123245", JSON.stringify(action.payload));
      return {
        user: action.payload,
        isFetching: false,
        error: false
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: action.payload
      };
      case "LOGOUT_START":
        sessionStorage.removeItem('a33123245');
        return {
          user: null,
          isFetching: false,
          error: action.payload
        };
    default:
      return state
  }
}

export default AuthReducer;