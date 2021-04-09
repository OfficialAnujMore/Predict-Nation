

//maintain session


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
        accountDetails.innerHTML = "Welcome to Skills Based Salary Prediction";
        setupUI();
        console.log('User logged out');
    }
});









