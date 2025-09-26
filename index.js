let isModalOpen = false;
let contratToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
    
    for (let i = 0; i < shapes.length; ++i) {
        shapes[i].computedStyleMap.transform = 'translate(${x}px, $(y)px)'
    }
}

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible" 
    emailjs
    .sendForm(
        'service_3taky7f',
        'template_hltfhiw',
        event.target,
        'kqXVQSSOW_8zEboQV'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible")
        success.classList =+ " modal__overlay--visible"
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible")
        alert(
            "The email service is temporarily unavailable. Please contact me directly on allmightyrae@gmail.com"
        );
    })
}

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = !isModalOpen;
    document.body.classList += " modal--open";
}