const secations = document.querySelectorAll('section');
const li = document.querySelectorAll('.navbar .container ul li a');
const nav = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    secations.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {

            let id = sec.getAttribute('id');
            li.forEach(links => {
                let link = links.getAttribute('href');
                links.classList.remove('active');
                if (link.includes(id)) {
                    links.classList.add('active');
                }
            });
        }
    });
});
let sendbtn = document.getElementById('sendbtn');
let resetbtn = document.getElementById('resetbtn');
let form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
})



resetbtn.addEventListener('click', (e) => {
    let first = document.getElementById('first');
    let last = document.getElementById('last');
    let email = document.getElementById('email');
    let sub = document.getElementById('sub');
    let message = document.getElementById('message');
    
    first.value = '';
    last.value = '';
    email.value = '';
    sub.value = '';
    message.value = '';
    
    first = first.value;
    localStorage.removeItem('first', first);

    last = last.value;
    localStorage.removeItem('last', last);

    email = email.value;
    localStorage.removeItem('email', email);


    sub = sub.value;
    localStorage.removeItem('sub', sub);

    message = message.value;
    localStorage.removeItem('message', message);

    first.value = '';
    last.value = '';
    email.value = '';
    sub.value = '';
    message.value = '';
});

sendbtn.addEventListener('click', (e) => {
    let first = document.getElementById('first');
    let last = document.getElementById('last');
    let email = document.getElementById('email');
    let sub = document.getElementById('sub');
    let message = document.getElementById('message');
    first = first.value;
    localStorage.setItem('first', first);
    last = last.value;
    localStorage.setItem('last', last);
    email = email.value;
    localStorage.setItem('email', email);
    sub = sub.value;
    localStorage.setItem('sub', sub);
    message = message.value;
    localStorage.setItem('message', message);
});

const skills = document.querySelector(".skills");
let progres = document.querySelectorAll(".progress .progress-bar");

window.onscroll = function () {
    if (window.scrollY >= skills.offsetTop) {
        progres.forEach(pro => {
            pro.style.width = pro.dataset.width;
        });
    }
}

