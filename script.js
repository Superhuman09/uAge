let name = prompt('Enter your name')
let age = prompt('Enter your birth Year')
let year = prompt('Enter the current Year')

function userInfo(uName,  uAge, currentYear) {
    let userName = 'Your name is ' + uName + ', '
    let userAge = currentYear - uAge
    let userYear = 'Your age is ' +  userAge  + ' You were born in ' +uAge

    let userInfoStr = userName + userYear
    return userInfoStr
}

let currentUserInfo = userInfo(name, age, year);
alert(currentUserInfo)
