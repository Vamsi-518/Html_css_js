


let userData = []

const validateForm = (e) => {
    event.preventDefault()

    let username = e.target.username
    let password = e.target.password

    console.log(username);
    console.log(username.value);

    if (username.value === "") {
        username.style.borderColor = "red"
    }
    else{
        username.style.borderColor = "black"
    }
    
    if (password.value === "") {
        password.style.borderColor = "red"
    }
    else{
        password.style.borderColor = "black"
    }

    // userData.push(userInput)
    // e.target.username.value = ""
    // let display = document.getElementById("display")
    // display.innerHTML = userData
    
}


const showPassword = () => {
    let show = document.getElementById("show")
    let password = document.getElementById("password")

    if (!show.checked) {
        password.type = "text"
    } else {
        password.type = "password"
    }
}