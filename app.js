


function isLoggedInAndSubscribed(loggedIn, subscribed) {
    return (loggedIn === 'LOGGED_IN') || (subscribed === 'SUBSCRIBED')
       
    }

   

console.log(isLoggedInAndSubscribed('LOGGED_OUT', 'UNSUBSCRIBED'));