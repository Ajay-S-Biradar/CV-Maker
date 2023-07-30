let skills = document.querySelector('.addskills')
ul1 = skills.childNodes[1]
// console.log(ul)
function addsk(){
    li = document.createElement('li')
    input = document.createElement('input')
    input.classList.add('box')
    input.setAttribute('name','skills')
    li.append(input)
    ul1.append(li)
}

let exp = document.querySelector('.addexp')
ul2 = exp.childNodes[1]
function addexp(){
    li = document.createElement('li')
    input = document.createElement('input')
    input.classList.add('box')
    input.setAttribute('name','exp')
    li.append(input)
    ul2.append(li)
}