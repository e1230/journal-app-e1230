import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleprovider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {

    try {
        const result = await signInWithPopup(FirebaseAuth, googleprovider);
        //const credential = GoogleAuthProvider.credentialFromResult(result);
        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,

            displayName, email, photoURL, uid
        }

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.mesage
        return {
            ok: false,
            errorMessage

        }

    }
}

export const registerUserWithEmailPassword = async ({ displayName, email, password }) => {
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = resp.user;
        console.log(resp);
        return {
            ok: true,
            uid,
            photoURL,
            email,
            password,
            displayName

        };
    } catch (error) {
        return { ok: false, errorMessage: error.message }
    }
}