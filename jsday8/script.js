let userData = []

function validateForm (e) {
    e.preventDefault()

    let input = e.target.username.value

    userData.push(input)

    e.target.username.value =""

    document.getElementById("display").innerHTML +="<li>" + input + "</li>"
}
