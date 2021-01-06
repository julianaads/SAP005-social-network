export const Google = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

export const Facebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

export const Conta = (email, senha, userName) => {
  firebase.auth().createUserWithEmailAndPassword(email, senha).then((userReturn) => {
    userReturn.user.updateProfile({
      displayName: userName,
    }).then(() => {
      // Update successful.
    }, (error) => {
      // An error happened.
      alert('An error happened.', error);
    });
    // console.log('usuario', userReturn);
    // alert('usuario criado e logado');
  });
};

export const Email = (email, senha) => firebase.auth().signInWithEmailAndPassword(email, senha).then(() => {
});
