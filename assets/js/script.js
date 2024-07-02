//Abrir o Formulario
function openPopup() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("popup").style.display = "block";
    document.body.classList.add("blurred");
    document.addEventListener('click', handleOutsideClick);
}

//Fechar o Formulario
function closePopup() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("popup").style.display = "none";
    document.body.classList.remove("blurred");
    document.removeEventListener('click', handleOutsideClick);
}

//fechar ao clicar Fora
function handleOutsideClick(event) {
    const popup = document.getElementById("popup");
    if (!popup.contains(event.target) && !event.target.matches('.menu-button')) {
        closePopup();
    }
}

//scroll suave
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('header nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            if (targetId === 'home') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});