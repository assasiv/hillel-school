const object1 = {x: 10, y: 20};
const object2 = {z: 30};
const object3 = {x: 10};
const object4 = {x: 20, y: 30};

function objectMerging(obj1, obj2) {
    const newObj = Object.assign(obj1, obj2);
    return newObj;
}

console.log(object1);
console.log(object2);
console.log(objectMerging(object1, object2));