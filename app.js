let users = [ 
    {
    username: 'Kate', 
    email: 'kate@hotmail.com',
    password: 'test123',
    subscriptionStatus: 'VIP',
    discordId: 'kate#0001',
    lessonsCompleted: [0, 1]
},
{
    username: 'Mitri', 
    email: 'mitri@hotmail.com',
    password: 'mitri123',
    subscriptionStatus: 'VIP',
    discordId: 'mitri#0001',
    lessonsCompleted: [0, 1]
}
]

function login(email, password) {
    for (let i = 0; i < users.length; ++i) {
        console.log(users[i]);
    }
}


login('kate@hotmail.com', 'test123');
