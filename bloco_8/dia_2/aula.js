const feijao = ['feijao', 'farinha', 'torresmo', 'bacon'];

console.log('Os ingredientes do torresmo são:');
for (let index = 0; index < feijao.lengt; index +=1) {
    const ingredient = feijao[index];
    console.log(`${index + 1}. ${ingredient}`); 
}

feijao.forEach((value, index, array) => {
    console.log(value);
});

feijao.forEach((ingredient, index, array) => {
    console.log(`value: ${ingredient}.index: ${index} Array:${array}`);
});

const users = [
    {firstName: 'Homer', lastName: 'Simpson', isDriver: true},
    {firstName: 'Bart', lastName: 'Simpson', isDriver: false},
    {firstName: 'Marge', lastName: 'Simpson', isDriver: true},
];

for (user of users) {
    console.log(`${user.firstName} ${user.lastName} sabe dirigir?${user.isDriver}`)  
};

let firstNotDrive;

for (user of users) {
    if (user.isDriver !== true){
        firstNotDrive = user;
        break;  
    }   
}

const notDrive = users.find((user) => {
    return user.isDriver === false;
})

console.log(notDrive)

console.log(`O primeiro usuário que não sabe dirigir é ${firstNotDrive.firstName}`);

const alguemQNDrive = users.some((user) => {

    return user.isDriver === false;
})
console.log(`existe alguem que não dirige? ${alguemQNDrive}`);

/*/let everyOneDrive = true;
for (user of users) {
   if(user.isDriver === false) {
    everyOneDrive === false
    break;
   }   
}*/


const everyOneDrive = users.every((value) => {
    return user.isDriver === true;
})

console.log(`Todos sabem dirigir? ${everyOneDrive}`);

const names = ['wallisson', 'Amanda', 'Tiago', 'Leticia'];
console.log(`antes: ${names}`);
names.sort();
console.log(`depois: ${names}`);

const number = [1 , 4, 8, 9, 3, 4];
console.log(`antes: ${number}`);
number.sort((value1, value2) => {
    return value1 - value2;
});
console.log(`depois enxuta: ${number}`);

const users1 = [
    {firstName: 'Homer', lastName: 'Simpson', isDriver: true, age: 40},
    {firstName: 'Bart', lastName: 'Simpson', isDriver: false, age: 15},
    {firstName: 'Marge', lastName: 'Simpson', isDriver: true, age:41},
];

users1.sort((a,b) => a - b);

console.log(users1.sort(users1.age));