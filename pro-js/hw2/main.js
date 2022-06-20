userFirstName = prompt("What is your first name?").trim();
userLastName = prompt("What is your last name?").trim();
userEmail = prompt("Please enter your email address").replaceAll(' ', '');
userBirthDay = prompt("Please enter your year of birth").replaceAll(' ', '');

today = new Date();
currentYear = today.getFullYear();
userAge = currentYear - userBirthDay;

userEmail = userEmail.toLowerCase();

outputMsg = userEmail;  

if(userEmail.indexOf(`@`) === -1) {
    outputMsg = `not valid email <b>${userEmail}</b> (symbol @ not exist)`;
} else if(!userEmail.indexOf(`@`)) {
    outputMsg = `not valid email <b>${userEmail}</b> (symbol @ found in first place)`;
} else if(userEmail.indexOf(`@`) === userEmail.length - 1) {
    outputMsg = `not valid email <b>${userEmail}</b> (symbol @ found in last place)`
}

document.write (`
    <ul>
        <li>Full name: <b>${userLastName} ${userFirstName}</b></li>
        <li>Email: ${outputMsg}</li>
        <li>Age:<b> ${userAge}</b></li>
    </ul>`)