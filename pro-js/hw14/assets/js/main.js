const obj = { 
    x: 10, 
    y: 20, 
    inner: { 
        x: 20, 
        z: 30,
    }, 
    foo2: { 
        k: 23, 
        p: 13,
    } 
}

// ------ version 1 start ------

// function convert(obj) {
//     const newObj = {};

//     for(let key in obj) {
//         let value = obj[key];

//         if(typeof value === "object") {

//             for(let innerKey in value) {
//                 newObj[innerKey] = value[innerKey];
//             }
        
//         } else {
//             newObj[key] = value;
//         }
//     }
//     return newObj;
// }
// ------ version 1 end ------


// ------ version 2 start ------

function convert(obj) {
    const newObj = {};
    convertRec(obj, newObj);
    return newObj;
}

function convertRec(sourceObj, resultObj) {
    for(let key in sourceObj) {
        let value = sourceObj[key];
        if(typeof value === "object") {
            convertRec(value, resultObj);
        } else {
            resultObj[key] = value;
        }
    }
}

// ------ version 2 end ------

console.log(convert(obj));

