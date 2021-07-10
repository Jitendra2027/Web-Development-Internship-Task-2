function display(){
    var x=document.getElementById('form')
    var y=document.getElementsByTagName('body')
    x.style.display='block'
}
function register(){
    var x=document.getElementById('login')
    var y=document.getElementById('register')
    var z=document.getElementById('btn')
    x.style.left='-400px'
    y.style.left='70px'
    z.style.left='110px'
}
function login(){
    var x=document.getElementById('login')
    var y=document.getElementById('register')
    var z=document.getElementById('btn')
    x.style.left='70px'
    y.style.left='450px'
    z.style.left='0px'
}
function typingTest(){
    var x=document.getElementById('text')
    x.innerText="Typing Demo Test"
}
function stenoTest(){
    var x=document.getElementById('text')
    x.innerHTML="Shorthand Demo Test"
}
function typingLearner(){
    var x=document.getElementById('text')
    x.innerHTML="Demo Typing Learner"
}
function shorthand(){
    var x=document.getElementById('text')
    x.innerHTML="Shorthand Demo Learner"
}