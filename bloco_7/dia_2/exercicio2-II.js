const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };
  //1-Crie uma função para adicionar o turno da manhã na lesson2. Essa 
  //função deve possuir três parâmetros, sendo eles: o objeto a ser modificado,
  //a chave que deverá ser adicionada e o valor dela.

  const addTurno = (objeto, key, value) => {
      objeto[key] = value;
  };
  addTurno(lesson2, 'turno', 'manhã');
  console.log(lesson2);

  //2-Crie uma função para listar as keys de um objeto. Essa função deve receber 
  //um objeto como parâmetro.

  const listaKeys = (objeto) => {
    return Object.keys(objeto);
  };
  console.log(listaKeys(lesson3));

  //3-Crie uma função para mostrar o tamanho de um objeto.
  const tamanho = (objeto) => {
   return Object.keys(objeto).length;
  };
  console.log(tamanho(lesson2));

  //4-Crie uma função para listar os valores de um objeto. Essa função deve receber
  // um objeto como parâmetro.
  const valores = (objeto) => Object.values(objeto);
  console.log(valores(lesson3));


//5-Crie um objeto de nome allLessons , que deve agrupar todas as aulas através
//do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas 
//chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando 
//console.log(allLessons) , a saída deverá ser a seguinte:
/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/

const allLessons = {}
Object.assign(allLessons, { lesson1, lesson2, lesson3 });
console.log(allLessons);