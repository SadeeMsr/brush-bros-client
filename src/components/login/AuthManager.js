import { auth, gProvider } from './firebase';

export const handleGoogleSignIn = () => {
    return auth.signInWithPopup(gProvider)
    .then(res => {
      const {displayName, photoURL, email} = res.user;
      const signedInUser = {
        isSignedIn: true,
        name: displayName,
        email: email,
        photo: photoURL,
        success: true
      };
      return signedInUser;
    })
    .catch(err => {
      const signedInUser = {};
      signedInUser.error = err.message;
      signedInUser.success = false;
      return signedInUser;
    })
  }


export const handleSignOut = () => {
    return auth.signOut()
    .then(res => {
      const signedOutUser = {
        isSignedIn: false,
        name: '',
        email: '',
        photo: '',
        error: '',
        success: false
      }
      return signedOutUser;
    }).catch(err => {
       alert(err.message)
    });
  }
  