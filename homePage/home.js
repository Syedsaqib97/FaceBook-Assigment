const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))

if(!loggedInUser) window.location.href = "../login/login.html"







const logOutHandler = () =>{
    // document.querySelector('#logoutBtn')
    localStorage.removeItem('loggedInUser')
    window.location.href = '../login/login.html'
}