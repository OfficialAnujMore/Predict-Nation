const loggedInLinks = document.querySelectorAll('.logged-in');

const loggedOutLinks = document.querySelectorAll('.logged-out');

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