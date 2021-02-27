let createCard = emp => {
    let card = `<div class='card'><div class='cardTop'><h3>${emp.Name}</h3><br><h4>${emp.Role}</h4></div><br>ID: ${emp.Id}<br>Email: ${emp.Email}<br>`;
    switch (emp.role) {
        case 'Manager':
            return card + `Office: ${emp.Office}<br></div>`;
        case 'Engineer':
            return card + `Github: ${emp.Github}<br></div>`;
        case 'Intern':
            return card + `School: ${emp.School}<br></div>`;
        default:
            return card + `</div>`;
    }
}

let createEnd = () => {
    return `</div></main></body></html>`
}

let createHead = () => {
    return `<html><head><link rel="stylesheet" href="style.css"><title>My Team</title></head><body><main><div class='title'><h1>My Team</h1></div><div class='container'>`
}

let generateHTML = team => {
    let genHTML = '';
    genHTML += createHead();
    for (emp of team) {
        genHTML += createCard(emp);
    }
    genHTML += createEnd();
    return genHTML;
}


module.exports = generateHTML;