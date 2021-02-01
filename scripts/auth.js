auth.onAuthStateChanged(user =>{
    if (user){
        console.log('user logged in', user);
    }
    else{
        console.log('user logged out', user);
    }
    // console.log(user);
});


// Signup
const signupForm = document.querySelector('#signup-form');
const signinForm = document.querySelector('#signin-form');
const login_container = document.querySelector('.container');
// const logout = document.querySelector('#logout');


signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    //Signup the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        // console.log(cred.user);
        login_container.classList.remove("sign-up-mode");
        signupForm.reset();
    });




});

//Login user
signinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = signinForm['signin-email'].value;
    const password = signinForm['signin-password'].value;
    // console.log(email, password);

    // Login the user
    auth.signInWithEmailAndPassword(email, password).then(cred => {
        // console.log(cred);
        signinForm.reset();
        window.location = "/index.html";
    });
});

//Logout

// logout.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log("pressed");
//     auth.signOut().then(() => { });

// });
