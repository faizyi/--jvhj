function showpassword(){
    let show = document.getElementById('signup-password')
    if(show.type == 'password'){
        show.type = 'text'
    }
    else{
        show.type = 'password'
    }
}
function showpass(){
    let show = document.getElementById('signin-password')
    if(show.type == 'password'){
        show.type = 'text'
    }
    else{
        show.type = 'password'
    }
}

allusers = [];
let users = localStorage.getItem('users')
if(users !== null){
    allusers = JSON.parse(users)
}

function signup(){
    let email = document.getElementById('signup-email').value
    let password = document.getElementById('signup-password').value
    let serequired = document.getElementById('se-required')
    let sprequired = document.getElementById('sp-required')
    let sevalid = document.getElementById('se-valid')
    let checkLocalEmail = JSON.parse(localStorage.getItem(email.value))

      
      if(email=='' && password== ''){
        alert('Please fill out these fields')
    return;
    }
  

    if(email.length == ''){
        serequired.innerHTML = 'Email is required.'
        return;
    }
    if(!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)){
        sevalid.innerHTML = "Enter Valid Email";
        return;
    }
    if(password.length == ''){
        sprequired.innerHTML = 'Password is required.'
        return;
    }
    if(password.length < 6){
        alert('Your password must contain at least 8 characters')
        return;
    }
    let obj = {
        email : email,
        password : password
    }
    allusers.push(obj)
    localStorage.setItem('users', JSON.stringify(allusers))
    location.href = './index.html'
   
}
// let a =   JSON.parse(localStorage.getItem('users'))
// document.write(a)


function login(){
    let email = document.getElementById('signin-email').value
    let password = document.getElementById('signin-password').value
    let lprequired = document.getElementById('lp-required')
    let lerequired = document.getElementById('le-required')
    let levalid = document.getElementById('le-valid')

    if(email == '' && password == ''){
        alert('Please fill out these fields')
        return;
    }
    if(email.length == ''){
        lerequired.innerHTML = 'Email is required'
        return;
    }
    if(!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)){
        levalid.innerHTML = "Enter Valid Email";
        return;
    }

    if(password.length == ''){
        lprequired.innerHTML= 'Password is required'
        return;
    }
   
    let filterusers = allusers.filter(function(data){
        return data.email === email && data.password === password
    })
    if(filterusers.length){
        alert('Welcome')
        location.href = './EMS.html'
    }
    else{
        alert('Please Signup. Your account does not exist')
        location.href = './signup.html'
    }


}





























// let allUsers = [];

// let users = localStorage.getItem('users');


// if(users !== null){
//     allUsers = JSON.parse(users)
// }

// function signup(){
//     let name = document.getElementById('name');
//     let email = document.getElementById('email');
//     let password = document.getElementById('password');
//     let user = {
//         name: name.value,
//         email: email.value,
//         password: password.value
//     }

//     allUsers.push(user)
//     localStorage.setItem('users',JSON.stringify(allUsers))
// }


// function login(){
//     let email = document.getElementById('email');
//     let password = document.getElementById('password');

//     let filterUser = allUsers.filter(data=> data.email === email.value && data.password === password.value);

//     if(filterUser.length){
//         alert("user login succesful")
//     }else{
//         alert("email/password incorrect")
//     }
// }