function processData(data) {
    // Use the fetched data here
    console.log(data)
    const name = document.querySelector("#JOE-SMITH")
    const Location = document.querySelector('.Location')
    const cell = document.querySelector('.Cellphone')
    const mail = document.querySelector('.Email')
    const git = document.querySelector('.github')
    const job = document.querySelector('#job')
    // const 
    console.log(git.innerHTML)
    job.innerText = data.job
    var github = data.github
    git.innerHTML = github
    mail.innerText = data.email
    cell.innerText = data.number
    Location.innerText = data.location
    name.innerText = data.name
    const skills = document.querySelector('#sk')
    size = (data.skills.length)
    for(i=0;i<size;i++){
    const li = document.createElement('li')
    // li.classList.add('skills')
    li.innerText = data.skills[i]
    skills.append(li)
    }
  }

fetch('/api/data') 
    .then(res=>res.json())
    .then((data)=> {
        processData(data) 
    })


// const access = document.querySelector('#degree')
// access.firstChild.innerText = 'higher school'
// access.lastChild.innerText = 'jun 21 - sept 25'

// const education = document.querySelector('.education')
// console.log(education)

