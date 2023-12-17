    // SignUp

    const userName = document.querySelector('#userName')
    const email = document.querySelector('#email')
    const password = document.querySelector('#password')
    const cPassword = document.querySelector('#cpassword')
    
    // console.log(email, password);
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
    
    // if(loggedInUser)window.location.href = '../homePage/home.html'
    
    const signUpHandler = () => {
        const users = JSON.parse(localStorage.getItem('users')) || []
        // console.log(users, "-====>>> users")
    
        //checking fields
        if (!userName.value || !email.value || !password.value || !cPassword.value) return alert('All Fields Must Be Filed');
        //Pasword Lenght Must be 8Digit
    
        if (password.value.length < 8) return alert('Password must Be 8 chracters')
        //Checking Passwords 
        if (password.value != cPassword.value) return alert('Password and Confirm Pasword Must be Same')
    
        const userNameFound = users.find(user => {
            if (user.userName === userName.value) return user
        })
    
        if(userNameFound) return alert("UserName already taken")
        
        const userEmailFound = users.find(user => {
            if(user.email === email.value) return user
        })
    
        if(userEmailFound) return alert("UserEmail already exist")
    
        const user = {
            id: Date.now(),
            userName: userName.value,
            email: email.value,
            password: password.value,
            cPassword: cPassword.value
        }
    
        users.push(user)
    
        localStorage.setItem("users", JSON.stringify(users))
    
        alert("Signup Successfully, now you can login, diverting you to the login page")
        setTimeout(() => {
            window.location.href = '../login/login.html'
        }, 2000)
    
    }
    
        // Login
        
    const loginEmail = document.querySelector('#inputE')
    const loginPassword = document.querySelector('#inputP')
    const loginBtn = document.querySelector('#loginBtn')
    
    
    const loginHandler = () => {
    
        const users = JSON.parse(localStorage.getItem('users'))
        console.log((users));
    
        // checking fileds
        if (!loginEmail.value || !loginPassword.value) return alert('Fill Up All fileds');
        // checking Password
        if (loginPassword.value.length < 8) return alert('Password must Be 8 chracters')
    
        if(!users) return alert('No User Found')
     
        const foundUser = users.find(user=>{
            if(user.email === loginEmail.value) return user
        });
    
        if(!foundUser) return alert('Sorry No User Found')
    
        if(foundUser.password !== loginPassword.value){
            return alert('Sorry Invalid credentials')
        }else{
            alert("Login Successfully, diverting you to the home page")
        }    
    
        localStorage.setItem('loggedInUser', JSON.stringify(foundUser))
        setTimeout(()=>{
            window.location.href = '../homePage/home.html'
        }, 2000)
    
    }
    
    const createNew = () => {
        const createBtn = document.querySelector('#createBtn')
        const main = document.querySelector('.main')
        const signUp = document.querySelector('.signUp')
        main.style.display = 'none'
        signUp.style.display = 'block'
        // console.log(createNew);
    }