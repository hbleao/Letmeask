import { firebase, auth } from './firebaseConfig';

export const googleAuthentication = {
  Auth: async () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      const response = await auth.signInWithPopup(provider);

      if(response.user) {
        const { displayName, photoURL, uid } = response.user;
      
        if(!displayName|| !photoURL) {
          throw new Error('Missing information from Google Authentication.');
        }; 
    
        return {
          id: uid,
          name: displayName, 
          avatar: photoURL, 
        };
      }
  },
  CheckUnsubscribe: (setUser: any) => {
    auth.onAuthStateChanged(user => {
      if(user) {
        const { displayName, photoURL, uid } = user;

        if(!displayName|| !photoURL) {
          throw new Error('Missing information from Google Authentication.');
        };

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL, 
        })
      }
    })
  } 
}