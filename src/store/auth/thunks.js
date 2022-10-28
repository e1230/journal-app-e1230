import { signInWithGoogle } from "../../firebase/providers"
import { checkingCredentials } from "./"

export const checkingAuthentication = (email, password) => {

    return async (dispatch) => {
        dispatch(checkingCredentials())
    }
}

export const startGoogleSignIn = (email, password) => {

    return async (dispatch) => {
        dispatch(checkingCredentials());
        const result = await signInWithGoogle();

    }
}