// Signup

login_container = document.querySelector('.container');

signupForm = document.querySelector('#signup-form');
signinForm = document.querySelector('#signin-form');


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
        // window.location = "/index.html";
        window.location.href = "http://127.0.0.1:5000/";
    });
});
