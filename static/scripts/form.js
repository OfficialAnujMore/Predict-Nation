const userDetails = document.querySelector('.email-address');
const loggedInLinks = document.querySelectorAll('.logged-in');

const loggedOutLinks = document.querySelectorAll('.logged-out');

auth.onAuthStateChanged(user => {
    if (user) {

        // show user details
        console.log('User Logged In', user);


        const html = `
        <input type="email" class="form-control email-address" id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Enter email"> ${user.email} </input>`;

        // <div> Welcome ${user.email} </div>`;
        userDetails.innerHTML = html;

        setupUI(user);
    }
    else {
        // hide user details
        userDetails.innerHTML = "Welcome to skillbased salary prediction";
        setupUI();
        console.log('User logged out');
    }
});

// const setupUI = (user) => {

//     if (user) {

//         loggedInLinks.forEach(item => item.style.display = 'none');
//         loggedOutLinks.forEach(item => item.style.display = 'block');

//     }
//     else {
//         loggedInLinks.forEach(item => item.style.display = 'block');
//         loggedOutLinks.forEach(item => item.style.display = 'none');
//     }
// }