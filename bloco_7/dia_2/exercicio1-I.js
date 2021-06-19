const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  //Complete a função customerInfo() para que seu retorno seja similar a "Olá
  //Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416,
  //. Rua das Flores, Nº: 389, AP: 701".
  return `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, 
  Telefone: ${order.phoneNumber}, ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}.`;
}

 console.log(customerInfo(order));

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  //"Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola 
  //Zero é R$ 50,00."
  const name2 = order.name = 'Luiz Silva';
  const newPag = order.payment.total = 50;

  let sabores = [];
  
  for(const key in order.order.pizza) {
    sabores.push(key);
  }
  

 return `Olá ${order.name} o total do seu pedido de ${sabores.join(', ')} e ${order.order.drinks.coke.type} é 
 R$ ${order.payment.total}.`;
};
console.log(orderModifier(order)); 


