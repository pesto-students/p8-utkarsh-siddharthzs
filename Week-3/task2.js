function printObject(...args) {
    Object.keys(this).forEach((key)=>{
        console.log(`${key}: '${this[key]}'`)
    })
    if(args.length === 0){
        console.log("----------------------------");
        return;
    }
    console.log("Unnecessary Huddles (arguments)");
    for(let i = 0; i < arguments.length; i++)
        console.log(args[i]);

    console.log("----------------------------");
}

// Problem
printObject.call({
    'User': 'anonymous love',
    'status': 'bf1'
})
printObject.call({
    'User': 'anonymous love',
    'status': 'bf2'
})


// Reality
printObject.apply({
    'User': 'anonymous love',
    'status': 'bf'
}, [{
    'User': 'anonymous2',
    'status': 'bff1'
}, {
    'User': 'anonymous3',
    'status': 'bff2'
}])

// Idea, bind it permanently !!!!
printObject.bind({
    'User': 'anonymous',
    'solution': 'government job'
})

// Solution
printObject.call({
    'User': 'anonymous',
    'solution': 'move on :)'
})

