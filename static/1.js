const skills = document.querySelector('.skills')
const tech  = document.querySelector('.tech')
const education = document.querySelector('.education')

function skadd(){
    const li = document.createElement('li')
    const input = document.createElement('input')
    input.classList.add('skli')
    input.setAttribute('name','skills')
    li.append(input)
    skills.append(li)
}


function techadd(){
    const li = document.createElement('li')
    const input = document.createElement('input')
    input.classList.add('skli')
    input.setAttribute('name','skills')
    li.append(input)
    tech.append(li)
}   

function edadd(){
    const li = document.createElement('li')
    for(i=0;i<3;i++){
        input = document.createElement('input')
        input.setAttribute('name','eduli')
        li.append(input)
    }
    education.append(li)
}