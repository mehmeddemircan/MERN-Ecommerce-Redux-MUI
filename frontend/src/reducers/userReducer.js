import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAIL
} from "../constants/userConstants";

const initialState = {
  token: null,
  user: {
    name: "",
    email: "",
    password: "",
  },
  authenticate: false,
  authenticating: false,
  loading: false,
  error: null,
  message: "",
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        authenticating: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        authenticate: true,
        authenticating: false,
      };

    case LOGIN_FAIL:
      return {
        ...state,
        authenticating: false,
      };

    case LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case LOGOUT_SUCCESS:{
      return {
     ...initialState
       

      }
      
    }
    case LOGOUT_FAIL: {
      return {
        ...state,
        error: action.payload.error,
        loading: false
      }
    }
  
    case REGISTER_REQUEST:
      return {
        ...state,
        authenticating: true,
      };
    // case REGISTER_SUCCESS:
    //   return {
    //     ...state,
    //     user: action.payload.user,
    //     token: action.payload.token,
    //     authenticate: true,
    //     authenticating: false,
    //   };
    case REGISTER_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};


export const userDetailsReducer =  (state = initialState, action) => {
  switch (action.type) {

  case USER_DETAILS_REQUEST:
    return { ...state,
      loading: true
      
    
    }
    case USER_DETAILS_SUCCESS:
      return { ...state, loading:false , user: action.payload.user};

      case USER_DETAILS_FAIL:
        return { ...state, loading: false, error: action.payload }
  default:
    return state
  }
}



export const updateUserProfileReducer =  (state = initialState, action) => {
  switch (action.type) {

  case USER_UPDATE_PROFILE_REQUEST:
    return { ...state,
      loading: true
      
    
    }
    case USER_UPDATE_PROFILE_SUCCESS:
      return { ...state, loading:false ,success: true, user: action.payload.user};

      case USER_UPDATE_PROFILE_FAIL:
        return { ...state, loading: false, error: action.payload }
  default:
    return state
  }
}
