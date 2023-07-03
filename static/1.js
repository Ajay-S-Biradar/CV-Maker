const skills = document.querySelector('.skills')

function skadd(){
    const li = document.createElement('li')
    const input = document.createElement('input')
    input.classList.add('skli')
    input.setAttribute('name','skills')
    console.log(input)
    li.append(input)
    skills.append(li)
}


function add(){
    skadd()
    console.log('hii')
}   