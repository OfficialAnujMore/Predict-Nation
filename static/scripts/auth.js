

//maintain session
const loggedInLinks = document.querySelectorAll('.logged-in');

const loggedOutLinks = document.querySelectorAll('.logged-out');

const accountDetails = document.querySelector('.welcome-text');



auth.onAuthStateChanged(user => {
    if (user) {

        // show user details
        console.log('User Logged In', user);
        const html = `
        <div> Welcome ${user.email} </div>`;
        accountDetails.innerHTML = html;

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







