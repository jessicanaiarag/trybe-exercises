const titulo = document.getElementsByTagName('h1')[0];
titulo.style = 'background-color: green; color: white;';

let bloco1 = document.getElementsByClassName('emergency-tasks')[0];
bloco1.style = 'background-color: antiquewhite';

let bloco1a = document.querySelectorAll('.emergency-tasks h3')[0];
bloco1a.style = 'background-color: #f7c5f7fc; color: white';

let bloco1b = document.querySelectorAll('.emergency-tasks h3')[1];
bloco1b.style = 'background-color: #f7c5f7fc; color: white';

let bloco2 = document.getElementsByClassName('no-emergency-tasks')[0];
bloco2.style = 'background-color: yellow';

let bloco2a = document.querySelectorAll('.no-emergency-tasks h3')[0];
bloco2a.style = 'background-color: black; color: white';

let bloco2b = document.querySelectorAll('.no-emergency-tasks h3')[1];
bloco2b.style = 'background-color: black; color: white';