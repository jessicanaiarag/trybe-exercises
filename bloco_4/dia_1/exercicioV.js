let estadoCandidato = "Lista";
switch (estadoCandidato) {
    case "Aprovada":
        console.log("Parabéns, você foi aprovado(a)!");
        break;
    case "Lista":
        console.log("Você esta na lista de espera");
        break;
    case "Reprovada":
        console.log("Você foi reprovado(a)");
        break;
    default:
        console.log("valor não identificado");
}