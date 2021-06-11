let states = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
];

const select = document.getElementById("estado");
for (let index = 0; index < states.length; index += 1) {
  const state = states[index];
  const option = document.createElement("option");
  option.value = state;
  option.innerText = state;
  select.appendChild(option);
}

const picker = new Pikaday({ field: document.getElementById("datepicker") });

function check() {
  const req = document.querySelectorAll("[required]");
  //console.log(req);
  for (let index = 0; index < req.length; index += 1) {
    const element = req[index];
    if (element.value === "") {
      alert("O campo " + element.name + " é obrigatório!");
      break;
    }
  }
}

validation.init();
function validate() {
    if (validation.isValid()) {
        validation.highlight();  
        alert("O campo ");
    }
}

const botao = document.getElementById('enviar');
botao.addEventListener('click', validate);


