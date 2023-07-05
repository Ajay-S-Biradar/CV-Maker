function processData(data) {
    // Use the fetched data here
    const skill = document.querySelector('#sk')
    console.log(skill) 
    if(typeof(data.skills)=='string'){
        let l = document.createElement('li')
        // li.classList.add('skills') 
        l.innerText = data.skills
        skill.append(l)
    }
    else{ 
        size = (data.skills.length)
        for(i=0;i<size;i++){
            let li = document.createElement('li')
            // li.classList.add('skills') 
            li.innerText = data.skills[i]
            skill.append(li)
            }
    }
    console.log(data.skills)
    const name = document.querySelector("#JOE-SMITH")
    const Location = document.querySelector('.Location')
    const cell = document.querySelector('.Cellphone')
    const mail = document.querySelector('.Email')
    const git = document.querySelector('.github')
    const job = document.querySelector('#job')
    const education = document.querySelector('.degree')
    const technology = document.querySelector('#tech')
    
    if(typeof(data.tech)=='string'){
        let l = document.createElement('li')
        // li.classList.add('skills')  
        l.innerText = data.tech
        technology.append(l)
    }
    else{
        n = data.tech.length
        for(i=0;i<n;i++){
            let l = document.createElement('li')
            // li.classList.add('skills') 
            l.innerText = data.tech[i] 
            technology.append(l)
        }
    }

    for(i=0;i<data.eduli.length;i++){
        const div = document.createElement('div')
        const para = document.createElement('p')
        para.innerText = data.eduli[i++]
        para.classList.add('sanserif')
        let time = document.createElement('time')
        let college = document.createElement('p')
        college.innerText = data.eduli[i++]
        time.innerText = data.eduli[i] 
        let li = document.createElement('li') 
        div.append(para) 
        div.append(time)
        li.append(div)
        li.append(college)
        education.append(li) 
    }
    job.innerText = data.job
    var github = data.github
    git.innerHTML = github
    mail.innerText = data.email
    cell.innerText = data.number
    Location.innerText = data.location
    name.innerText = data.name
    

  }
  
fetch('/api/data')
    .then(res=>res.json())
    .then((data)=> {
        processData(data) 
    })