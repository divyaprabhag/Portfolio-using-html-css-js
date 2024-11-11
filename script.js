const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.contact .btn').addEventListener('click' , function() {
        const emailInput=document.querySelector('.input-box input').value;
        if(emailInput){
            alert("Submitted Successfully!");
        }else{
            alert("Please enter a valid email.");
        }
    });
});

