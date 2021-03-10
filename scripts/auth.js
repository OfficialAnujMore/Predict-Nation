// Signup
signupForm = document.querySelector('#signup-form');
signinForm = document.querySelector('#signin-form');
login_container = document.querySelector('.container');
logout = document.querySelector('.logout');

//maintain session
const loggedInLinks = document.querySelectorAll('.logged-in');

const loggedOutLinks = document.querySelectorAll('.logged-out');

const accountDetails = document.querySelector('.welcome-text');



auth.onAuthStateChanged(user => {
    if (user) {

        // show user details
        const html = `
        <div> Welcome ${user.email} </div>`;
        accountDetails.innerHTML = html;

     

        console.log('User Logged In', user);
        setupUI(user);
    }
    else {

        // hide user details
        accountDetails.innerHTML = "Welcome to skillbased salary prediction";
        setupUI();
        console.log('User logged out');
    }

});


const setupUI = (user) => {

    if (user) {

        loggedInLinks.forEach(item => item.style.display = 'none');
        loggedOutLinks.forEach(item => item.style.display = 'block');

    }
    else {
        loggedInLinks.forEach(item => item.style.display = 'block');
        loggedOutLinks.forEach(item => item.style.display = 'none');
    }
}



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

logout.addEventListener("click", (e) => {
    e.preventDefault();

    auth.signOut().then(() => {
        console.log("pressed");

    });

});



