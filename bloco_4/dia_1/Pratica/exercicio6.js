//bispo, rei, rainha, torre, cavalo, peão. 
let peca = "Rei";

switch (peca.toLowerCase()){
    case 'rei':
        console.log('mover-se em qualquer direção, porém apenas uma casa por vez');
        break;
    case 'rainha':
        console.log('mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.');
        break;
    case 'torre':
        console.log('Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.');
        break
    case 'cavalo':
        console.log('É a única peça que pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas.');
        break;
    case 'peão':
        console.log('Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas.');
        break;
    case 'bispo':
        console.log('Move-se na diagonal, quantas casas quiser.');
        break;     
    default:
        console.log('erro');
        break;       
}
