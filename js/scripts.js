// БУРГЕР МЕНЮ

const burger = document.querySelector('#burger'),
    menu = document.querySelector('#menu')

const toggleMenu = () => { // функция для открытия и закрытия меню
    burger.classList.toggle('active')
    menu.classList.toggle('active')
}

burger.addEventListener('click', toggleMenu)

// АНИМАЦИЯ

const hero = document.querySelector('.hero'),
    section = document.querySelector('.section'),
    about = document.querySelector('.about'),
    tracking = document.querySelector('.tracking'),
    contact = document.querySelector('.contact'),
    header = document.querySelector('header'),
    preview = document.querySelector('.preview'),
    aboutSections = document.querySelectorAll('.about__section'),
    aboutChoose = document.querySelector('.about__choose')

const isBlockVisible = (elem) => {
    if(elem) {
        windowTop = window.scrollY
        windowBottom = windowTop + window.innerHeight
        elemTop = elem.offsetTop
        elemBottom = elemTop + elem.offsetHeight

        return ( 
            (( windowBottom > elemTop + 70) && (windowTop < elemTop + 70))
            || ((windowTop < elemBottom + 70) && (windowTop > elemTop + 70))
            || ((elemBottom <= windowBottom) && (elemTop >= windowTop))
        )
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if(isBlockVisible(hero)) {
        header.classList.add('animate')
        hero.classList.add('animate')
    }

    if(isBlockVisible(section)) {
        header.classList.add('animate')
        section.classList.add('animate')
    } 

    if (isBlockVisible(about)) {
        about.classList.add('animate')
    }

    if (isBlockVisible(tracking)) {
        tracking.classList.add('animate')
    }

    if (isBlockVisible(contact)) {
        contact.classList.add('animate')
    }

    if (isBlockVisible(preview)) {
        preview.classList.add('animate')
        header.classList.add('animate')
    }

    aboutSections.forEach(item => {
        if (isBlockVisible(item)) {
            item.classList.add('animate')
        }
    })

    if (isBlockVisible(aboutChoose)) {
        aboutChoose.classList.add('animate')
    }
})

window.onscroll = () => {
    if(isBlockVisible(hero)) {
        header.classList.add('animate')
        hero.classList.add('animate')
    }

    if(isBlockVisible(section)) {
        header.classList.add('animate')
        section.classList.add('animate')
    } 

    if (isBlockVisible(about)) {
        about.classList.add('animate')
    }
    
    if (isBlockVisible(tracking)) {
        tracking.classList.add('animate')
    }

    if (isBlockVisible(contact)) {
        contact.classList.add('animate')
    }

    if (isBlockVisible(preview)) {
        preview.classList.add('animate')
        header.classList.add('animate')
    }

    aboutSections.forEach(item => {
        if (isBlockVisible(item)) {
            item.classList.add('animate')
        }
    })
    
    if (isBlockVisible(aboutChoose)) {
        aboutChoose.classList.add('animate')
    }
}


// TOUCH КЛИК

const touchClickELements = document.querySelectorAll('.touch-click')

const handlerTouchStart = (elem) => {

    let isClicked = elem.getAttribute('data-isClicked')

    if(isClicked === 'false') {
        elem.setAttribute('data-isCLicked', true)
        elem.removeAttribute('href')
    }else {
        elem.setAttribute('href', '/contact')
    }

}

touchClickELements.forEach(elem => elem.addEventListener('touchend', (e) => handlerTouchStart(elem) ))

