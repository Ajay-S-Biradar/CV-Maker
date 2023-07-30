function process(data) {
    // Use the fetched data here
    console.log(data)
    const name = document.querySelector("#JOE-SMITH")
    const Location = document.querySelector('.Location')
    const cell = document.querySelector('.Cellphone')
    const mail = document.querySelector('.Email')
    const git = document.querySelector('.github')
    // const 
    console.log(git.innerHTML)
    // var github = data.github
    // git.innerHTML = github
    mail.innerText = data.email
    cell.innerText = data.number
    Location.innerText =data.address + "," + data.city 
    name.innerText = data.name1[0]+" " +data.name1[1]
    // const skills = document.querySelector('#sk')
    // size = (data.skills.length)
    // for(i=0;i<size;i++){
    // const li = document.createElement('li')
    // li.classList.add('skills')
    // li.innerText = data.skills[i]
    // skills.append(li)
    // }
  }

function process2(data){
    console.log(data)

    const edu = document.querySelector('.edu')
    ul = edu.childNodes[0]
    const li1 = edu.childNodes[0]
    const li2 = edu.childNodes[1]
    const li3 = edu.    childNodes[2]
    p1 = document.createElement('p')
    p1.innerText = data.school
    p2 = document.createElement('p')
    p2.innerText = data.college
    p3 = document.createElement('p')
    p3.innerText = data.degree
    li1.append(p1)
    li2.append(p2)
    li3.append(p3)

    const exp = document.querySelector('.experience')
    const ol = exp.childNodes[0]
    let li = document.createElement('li')
    li.innerText = data.exp
    ol.append(li)
    
    const skills = document.querySelector('#sk')
    size = (data.skills.length)
    for(i=0;i<size;i++){
    const li = document.createElement('li')
    li.classList.add('skills')
    li.innerText = data.skills[i]
    skills.append(li)
    }
}

fetch('api/data1')
    .then(res=>res.json())
    .then((data)=>{
    process(data)
})

fetch('api/data2')
    .then(res=>res.json())
    .then((data2)=>{
        process2(data2)
    })
