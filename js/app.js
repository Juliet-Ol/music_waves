



const firebaseConfig = {
    apiKey: "AIzaSyDGZfZjNapHptrCaF1Rg-NgV6hoXTYMTFM",
    authDomain: "music-waves-26f41.firebaseapp.com",
    databaseURL: "https://music-waves-26f41-default-rtdb.firebaseio.com",
    projectId: "music-waves-26f41",
    storageBucket: "music-waves-26f41.appspot.com",
    messagingSenderId: "227518591905",
    appId: "1:227518591905:web:5d18ee240137ddc1a0d1e0"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database =getDatabase(app);
  const auth = getAuth();

  signup.addEventListener('click',(e) => {

      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      var username = document.getElementById('username').value;

      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;

          set(ref(database, 'users/' + user.uid),{
              username: username,
              email: email
          }) 

          alert('Account has been created');
          // ...
      })

      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
          // ..
      });

  })

  login.addEventListener('click',(e) => {

      var email = document.getElementById('email2').value;
      var password = document.getElementById('password2').value;
      // var username = document.getElementById('username').value;

      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;

          const dt = new Date();
          update(ref(database, 'users/' + user.uid),{
              last_login: dt,
             
          }) 

          alert('You are logged in! ');
          // ...
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
      });

  })

  const user = auth.currentUser;
  onAuthStateChanged(auth, (user) => {
  if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
  } else {
      // User is signed out
      // ...
  }
  });

  logout.addEventListener('click',(e) => {
      const auth = getAuth();
      signOut(auth).then(() => {
      // Sign-out successful.
      alert('You are now logged out!');
      }).catch((error) => {
      // An error happened.
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
      });

  });