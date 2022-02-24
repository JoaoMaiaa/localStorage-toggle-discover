let toggle = document.getElementById('toggle')

toggle.addEventListener('click', ()=>{
    let body = document.getElementsByTagName('body')
    let icon = document.getElementsByTagName('i')
    let button = document.getElementsByTagName('button')

    body[0].classList.toggle('is-dark')
    body[0].classList.remove('is-light')
    button[0].classList.toggle('is-light')
    icon[0].classList.toggle('fa-sun')
    icon[0].classList.add('fa-moon')

    // body
    // if(body){
    //     body[0].classList.toggle('is-dark')
    //     body[0].classList.remove('is-light')
    //     button[0].classList.toggle('is-light')
    //     icon[0].classList.toggle('fa-sun')
    //     icon[0].classList.add('fa-moon')
    // }else{
    //     body[0].classList.toggle('is-light')
    //     body[0].classList.remove('is-dark')
    //     button[0].classList.toggle('is-dark')
    //     icon[0].classList.toggle('fa-sun')
    //     icon[0].classList.add('fa-sun')
    // }
    // outra possibilidade
    
})