var count=0;
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
    input.setAttribute('name','tech')
    li.append(input)
    tech.append(li)
}   

const secretcount = document.querySelector('.count')

function edadd(){
    const li = document.createElement('li')
        input1 = document.createElement('input')
        input1.setAttribute('name','eduli')
        input1.setAttribute('placeholder','Education')
        input2 = document.createElement('input')
        input2.setAttribute('name','eduli')
        input2.setAttribute('placeholder','college name')
        input3 = document.createElement('input')
        input3.setAttribute('name','eduli')
        input3.setAttribute('placeholder','Eduation period')
        li.append(input1,input2,input3)

    count++;
    secretcount.setAttribute("value",count);
    education.append(li)
}