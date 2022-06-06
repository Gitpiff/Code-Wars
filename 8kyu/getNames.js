function getNames(names){
    let onlyNames = []

    for( let i = 0; i < names.length; i ++){
        if(names[i].hasOwnProperty("name")){
            onlyNames.push(names[i].name)
        }
    }

    return onlyNames
}

console.log(getNames([{a:1, name:"Chachi"}, {b:2}, {name:"Whale"}]))