const about = document.querySelector('.about-scroll')
const text = document.querySelector('.discover-text')
let dragged = null;
const bab = document.querySelector('.discover'); 
bab.addEventListener('click', event => {
    dragged = document.querySelector('.scroll-drag');
    const x = dragged.parentNode;
    if (x.nextElementSibling) {
        dragged.classList.add('moveforward')
        setTimeout(() => {
                dragged.classList.remove('moveforward')
            x.removeChild(dragged);
            x.nextElementSibling.appendChild(dragged);
            about.classList.remove('hide');
            text.classList.add('hide')
        }, 500);
    } else {
        dragged.classList.add('moveback');
            setTimeout(() => {
            dragged.classList.remove('moveback')
            x.removeChild(dragged);
                x.previousElementSibling.appendChild(dragged);
                about.classList.add('hide');
                text.classList.remove('hide')
        }, 500);
    }
}, false)

const image2Text = document.querySelector('.img2-text');

document.addEventListener('mouseover', (event) => {
    if (event.target.classList == 'img2-name') {
        event.target.classList.add('hover');
        let hr = event.target.nextElementSibling;
        hr.nextElementSibling.classList.remove('hover');
        hr.nextElementSibling.addEventListener('mouseover', () => {
            hr.nextElementSibling.classList.add('hover');
            event.target.classList.remove('hover');
        })
    }
})
document.addEventListener('touchstart', (event) => {
    if (event.target.classList == 'img2-name') {
        event.target.classList.add('hover');
        let hr = event.target.nextElementSibling;
        hr.nextElementSibling.classList.remove('hover');
        hr.nextElementSibling.addEventListener('toucmove', () => {
            hr.nextElementSibling.classList.add('hover');
            event.target.classList.remove('hover');
        })
    }
})
function popup(iconCard, card) {
    if (iconCard.classList[0] === 'keys') {
        card.innerHTML = `<div class="keys-icon"></div>
                    <div class="card-items">
                        <div class="column">
                            <p>Username:</p>
                            <input id="GET-name" class="input name" placeholder="......">
                        </div>
                        <div class="column">
                            <p>Password:</p>
                            <input type="text" class="password" placeholder="...............">
                        </div>
                            <div class="button-row">
                            <button type="button" class="request">Submit</button>
                            <p class="attention hide">Incorrect password</p>
                            </div>
                    </div>`
    } else if (iconCard.classList[0] === 'phone') {
        card.innerHTML = `<div class="phone-icon">
                    </div>
                    <form name='reborn' class="card-items" id="formid" action="https://formspree.io/f/xdobqnze" method="POST">
                        <div class="first-row">
                            <div class="column">
                                <label for="GET-prefix">Prefix:</label>
                                <input id="GET-prefix" type="text" name="userprefix" class="input prefix" required>
                            </div>
                            <div class="column">
                                <label for="GET-name">Last Name:</label>
                                <input id="GET-name" type="text" name="username" class="input last-name" required>
                            </div>
                        </div>
                        <div class="column">
                            <label for="GET-email">Email:</label>
                            <input id="GET-email" type="email" name="userid" class="input email" required></input>
                        </div>
                        <div class="column">
                            <label for="GET-message">Message:</label>
                            <textarea id="GET-message" type="text" name="message" class="input message" rows="5"></textarea>
                        </div>
                        <div class="button-row">
                            <button class="request">Send Request</button>
                            <p class="attention"></p>
                        </div>
                    </form>`
    } else if (iconCard.classList[0] === 'planet') {
        card.innerHTML = `<div class="planet-icon"></div>
                    <div class="card-items">
                    <div id="lang" class="lang">
                        <div class="column">
                            <h2>English</h2>
                            <hr>
                        </div>
                        <div class="column">
                            <h2>Spanish</h2>
                            <hr>
                        </div>
                        <div class="column">
                            <h2>French</h2>
                            <hr>
                        </div>
                        <div class="column">
                            <h2>Russian</h2>
                            <hr>
                        </div>
                        </div>
                        <div class="button-row">
                        <button type="button" class="request">Choose language</button>
                        <p class="attention"></p>
                    </div>
                    </div>`;
        const langButton = document.querySelector('.lang');
            langButton.addEventListener('click', () => {
                document.querySelector('.attention').innerText = '';
            })
        
        langButton.addEventListener('click', (event) => {
        for (let i of event.target.closest('DIV[id]').children) {
            for (let j of i.children) {
            j.classList.remove('red');   
            }
        }
        if (event.target.innerText) {
            event.target.classList.add('red');
        }
        })  
    }
}
function takeData(card) {
    card.addEventListener('input', (e) => {
        localStorage.setItem(e.target.id, e.target.value);
    });

}
let jgh = [];
let i = 0
function fillData(card) {
    const inputs = document.querySelectorAll('.input');
    for (let i of inputs) {
        if (localStorage.getItem(`${i.id}`)) {
            i.value = localStorage.getItem(`${i.id}`)
        }
    }
    
}

function dg(code) {
    if (code.id) {
        jgh.push(code.id);
    }
    Array.from(code.children).map((element) => {
        dg(element);
    })
    return jgh;
}

let fuller = [];
function newarr(arr) {
    if (arr.length === 2) {
        fuller.push(arr); 
    } else {
        fuller.push(arr.slice(0, 2));
        return newarr(arr.slice(1, arr.length));
    }
    return fuller;
}
   
const iconsButtons = document.querySelector('.icons-box');
const iconsCard = document.getElementById('box')
const head = document.querySelector('.header');
const card = document.querySelector('.card');
const aboutScroll = document.querySelector('.about');
let aboutcoord = aboutScroll.getBoundingClientRect().y

head.addEventListener('click', (event) => {
    event.stopPropagation();
    const iconCard = event.target;
    window.onscroll = function () {
            if (document.documentElement.scrollTop > aboutcoord-5)  {
                card.classList.add('hover')
            }
        }
    if (iconCard.closest('DIV[id]')) {
    card.classList.remove('hover')
    }
    
    popup(iconCard, card);
    takeData(card);
    fillData(card);
    const requestButton = document.querySelector('.request');
    requestButton.addEventListener('click', (event) => {
        sendreq(event);
    })
})

const youTube = document.querySelector('.section6');
const toTop = document.querySelector('.arrow');
toTop.addEventListener('click', () => {
    window.scrollTo(0, 0);
})

function sendreq(event) {
    event.stopPropagation();
    const mailButton = document.querySelector('.email'); 
    const inputButton = document.querySelectorAll('.input');
    if (event.target.innerText === 'Send Request') {
        if (mailButton.value.match(/\./g).length !== 1 ||
            mailButton.value.match(/@/g).length !== 1 ||
            mailButton.value.match(/\s/g) ||
            !/^.+\@{1}.+\.{1}[a-z]+$/.test(mailButton.value)) {
            event.preventDefault();
            document.querySelector('.attention').innerText = 'Incorrect email'
            mailButton.addEventListener('click', () => {
                document.querySelector('.attention').innerText = ''
            })
        } if (Array.from(inputButton).some((el) => el.value === '')) {
               event.preventDefault();
            document.querySelector('.attention').innerText = 'Please fill the form'
            for (let input of inputButton) {
                input.addEventListener('click', () => {
                    event.preventDefault();
                    document.querySelector('.attention').innerText = ''
                })
            }
        }
    }else if (event.target.innerText === 'Submit') {
        event.preventDefault();
        const passwordButton = document.querySelector('.password');
        document.querySelector('.attention').classList.remove('hide')
        passwordButton.addEventListener('click', () => {
            document.querySelector('.attention').classList.add('hide')
        })
            
    }else if (event.target.innerText === 'Choose language') {
        event.preventDefault();
        const xx = document.querySelectorAll('.column h2');
        if (Array.from(xx).some(el => el.classList[0] === 'red')) {
            const mylanguage = document.querySelector('.lang .red').innerText
            if (mylanguage !== 'English') {
                document.querySelector('.attention').innerText = 'Under costruction'
            } else {
                card.classList.add('hover');
            }
            
        } else {
            document.querySelector('.attention').innerText = 'Choose Language'
        }
    }
}