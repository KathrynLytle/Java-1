


async function firstSixIncomplete(elem) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos");
    

    const result = await promise.json()


    const incompletedTasks = result.filter(elem => !elem.completed).slice(0, 6);

    console.log(incompletedTasks)
    
}
firstSixIncomplete(6); 