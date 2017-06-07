function parseEmployeeData(employeeData) {
    let regex = /^([A-Z][a-zA-Z]*) - ([1-9]\d*) - ([A-Za-z0-9- ]+)$/;
    let results = [];
    let match;
    for (let data of employeeData) {
        while (match = regex.exec(data)) {
            let name = match[1];
            let position = match[3];
            let salary = Number(match[2]);
            results.push(`Name: ${name}\nPosition: ${position}\nSalary: ${salary}`);
        }
    }

    console.log(results.join('\n'));
}

parseEmployeeData(['Isacc - 1000 - CEO',
    'Ivan - 500 - Employee',
    'Peter - 500 - Employee']);

parseEmployeeData(['Jonathan - 2000 - Manager', 'Peter- 1000- Chuck', 'George - 1000 - Team Leader']);