let toggle = document.getElementById('toggle')

let body = document.getElementsByTagName('body')
let icon = document.getElementsByTagName('i')
let button = document.getElementsByTagName('button')

toggle.addEventListener('click', (e)=>{
    body[0].classList.toggle('is-dark')
    body[0].classList.remove('is-light')
    button[0].classList.toggle('is-light')
    icon[0].classList.toggle('fa-sun')
    icon[0].classList.add('fa-moon')
    
    if (e.target.classList[4] == 'is-light' || icon[0].classList[2] == 'fa-sun'){
        localStorage.setItem('code', true)
        console.log('true')
    }else{ 
        console.log('false')
        localStorage.setItem('code', false)
    }
})