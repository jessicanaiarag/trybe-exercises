function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
//1
const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
let days = document.getElementById('days');
for (let index = 0; index < dezDaysList.length; index += 1) {
  const day = dezDaysList[index];
  let li = document.createElement('li');
  li.className = 'day';
  li.innerText = day;
  days.appendChild(li);
  if (day === 24 || day === 25 || day === 31) {
    li.className += ' holiday';
  }
  if (day === 4 || day === 11 || day === 18 || day === 25) {
    li.className += ' friday';
  }
}
console.log(days);
// 2
function feriados(string){
  let botao = document.createElement('button');
  botao.name = string;
  botao.id = 'btn-holiday';
  botao.innerText = string;
  let buttonsContainer = document.getElementsByClassName('buttons-container')[0];
  buttonsContainer.appendChild(botao);
  console.log(buttonsContainer);
}
feriados('Feriados');
//3
function colorHoliday(){
  let holidays = document.getElementsByClassName('holiday');
  let corNova = 'green';
  let corOriginal = '#777';
  for (let index = 0; index < holidays.length; index +=1) {
    const holiday = holidays[index];
    if(holiday.style.color === corNova) {
      holiday.style.color = corOriginal;
    } else {
      holiday.style.color = corNova;
    }
  }
}
let btnHoliday = document.getElementById('btn-holiday');
btnHoliday.addEventListener('click', colorHoliday);
//4
function sextaFeira(string){
  let botao = document.createElement('button');
  botao.name = string;
  botao.id = 'btn-friday';
  botao.innerText = string;
  let buttonsContainer = document.getElementsByClassName('buttons-container')[0];
  buttonsContainer.appendChild(botao);
  console.log(buttonsContainer);
}
sextaFeira('Sexta-feira');
//5
function colorFriday(){
  let friday = document.getElementsByClassName('friday');
  let corNova = 'red';
  let corOriginal = '#777';
  for (let index = 0; index < friday.length; index +=1) {
    const holiday = friday[index];
    if(holiday.style.color === corNova) {
      holiday.style.color = corOriginal;
    } else {
      holiday.style.color = corNova;
    }
  }
}
let btnFriday = document.getElementById('btn-friday');
btnFriday.addEventListener('click', colorFriday);
//6
function dayOver(event){
  event.target.style.fontSize = '30px';
}
function dayOut(event){
  event.target.style.fontSize = '20px';
}
days = document.getElementById('days');
days.addEventListener('mouseover', dayOver);
days.addEventListener('mouseout', dayOut);
//7
function tarefa(nome){
  let tarefa = document.createElement('span');
  tarefa.innerText = nome;
  let myTasks = document.getElementsByClassName('my-tasks')[0];
  myTasks.appendChild(tarefa);
}
tarefa('Aula Trybe');
//8
function legenda(cor){
  let legenda = document.createElement('div');
  legenda.className = 'task';
  legenda.style.backgroundColor = cor;
  let myTasks = document.getElementsByClassName('my-tasks')[0];
  myTasks.appendChild(legenda);
}
legenda('blue');
//9
function taskSelected(event) {
  if (event.target.className === 'task') {
    event.target.className = 'task selected';
  } else {
    event.target.className = 'task';
  }
}
let myTasks = document.getElementsByClassName('my-tasks')[0];
myTasks.addEventListener('click', taskSelected);
//10
function tarefaDia(event){
  let selectedTask = document.getElementsByClassName('task selected');
  if (selectedTask.length > 0){
    selectedTask = selectedTask[0];
    let corOriginal = '#777';

    if(event.target.style.color === selectedTask.style.backgroundColor) {
      event.target.style.color = corOriginal;
    } else {
      event.target.style.color = selectedTask.style.backgroundColor;
    }
  }
}
days = document.getElementById('days');
days.addEventListener('click', tarefaDia);