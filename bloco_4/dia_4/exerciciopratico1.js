let info1 = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Bem-vinda, ' + info1.personagem);

info1['recorrente'] = 'sim';
console.log(info1);

for (let index in info1) {
    console.log(info1[index]);
}

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
};

console.log(info1.personagem + ' e ' + info2.personagem);
console.log(info1.origem + ' e ' + info2.origem);
console.log(info1.nota + ' e ' + info2.nota);
console.log(info1.recorrente + ' e ' + info2.recorrente);


