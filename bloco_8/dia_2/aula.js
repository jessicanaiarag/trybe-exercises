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