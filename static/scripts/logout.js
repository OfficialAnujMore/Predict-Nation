logout = document.querySelector('#logout');

logout.addEventListener("click", (e) => {
    // e.preventDefault();

    
    window.location.href = "http://127.0.0.1:5000/form";
    auth.signOut().then(() => {
        console.log("pressed");

    });

});
