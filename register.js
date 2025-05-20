let arrayOfUsers = []
function registerUser(){
    let firstName = document.getElementById("firstName").value
    let lastName = document.getElementById("lastName").value
    let dateOfBirth = document.getElementById("dob").value
    let email = document.getElementById("email").value
    let gender = document.getElementById("gender").value
    let password = document.getElementById("password").value

    let userObject = {firstName, lastName, dateOfBirth, email, gender, password, date: new Date().toLocaleDateString()}

    arrayOfUsers.push(userObject)
    displayUser()
}
function displayUser(){
    let show = "";
    for(let index = 0; index < arrayOfUsers.length; index++){

        show += `<tr><td>${index + 1}</td>
        <td>${arrayOfUsers[index].firstName} ${arrayOfUsers[index].lastName}</td>
        <td>${arrayOfUsers[index].email}</td>
        <td>${arrayOfUsers[index].password}</td>
        </tr>`
    }
    document.getElementById("display").innerHTML = show
}