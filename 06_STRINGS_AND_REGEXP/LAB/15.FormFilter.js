function formFilter(username, email, phone, senntences) {
    let userNameRegex = /<![A-Za-z]+!>/g;
    let emailRegex = /<@[A-Za-z]+@>/g;
    let phoneRegex = /<\+[A-Za-z]+\+>/g;

    for (let i = 0; i < senntences.length; i++) {
        senntences[i] = senntences[i].replace(userNameRegex, username);
        senntences[i] = senntences[i].replace(emailRegex, email);
        senntences[i] = senntences[i].replace(phoneRegex, phone);
    }

    senntences.forEach(s => console.log(s));
}

function fillForm(username, email, phone, data) {
    data.forEach(line => {
        line = line.replace(/<![a-zA-Z]+!>/g, username);
        line = line.replace(/<@[a-zA-Z]+@>/g, email);
        line = line.replace(/<\+[a-zA-Z]+\+>/g, phone);
        console.log(line);
    });
}

fillForm('Pesho',
    'pesho@softuni.bg',
    '90-60-90',
    ['Hello, <!username!>!',
        'Welcome to your Personal profile.',
        'Here you can modify your profile freely.',
        'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
        'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
        'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']
);