// Observe o código abaixo e faça as alterações necessárias 
// para que ele passe a respeitar o Princípio do Aberto/Fechado(OCP).

// export default function progressNotification(
//   message: string,
//   notificationType: string
// ): void {
//   switch (notificationType) {
//     case 'Email':
//       console.log('Email: ', message);
//       break;
//     case 'Phone':
//       console.log('Phone: ', message);
//       break;
//     case 'Console':
//       console.log('Console: ', message);
//       break;
//   }
// };

// solução

type notification = { type: string, send: (message: string) => void};

// Criando variaveis para guardar cada tipo aceito por nossa função
const consoleNotification: notification = {
  type: "Console",
  send: function(message) {
    console.log('Console: ', message);
  }
};

const emailNotification: notification = {
  type: "Email",
  send: function(message) {
    console.log('Email: ', message);
  }
}

const phoneNotification: notification = {
  type: "Phone",
  send: function(message) {
    console.log('Phone: ', message);
  }
}

const notifications = Notification[] = [
  consoleNotification, emailNotification,phoneNotification
]

// Agora podemos adicionar novos tipos sem modificar nossa função
export function progressNotification(
  messsage: string,
  type_: string = 'Console',
  notificationsArray: Notification[] = notifications
): void {
  notificationsArray.forEach(notification => {
    if (notification.type === type_) {
      notification.send(message);
    }
  })
};