function add(){
    let btnstatus = document.querySelector('.add')
    let addtional = document.querySelector('.addinfo')
    if(btnstatus.textContent == "Additional information"){
        btnstatus.innerText = '- Additional information'
        addtional.innerHTML = '<div class="col"> <p>Date of Birth</p><input type="text" class="box"><p>Place of Birth</p><input type="text" class="box"></div>'
    }
    else{
        btnstatus.innerHTML = 'Additional information'
        addtional.innerHTML = ''
    }
}