function withDrawMoney(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (amount > 100) {
        reject(new Error('Not enough money to withdraw'));
      }

      resolve(amount);
    }, 1000);
  });
}

function buyCinemaTicket(money) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (money < 10) {
        reject(new Error('not enough money to buy ticket'));
      }

      resolve('ticket-1');
    }, 1000);
  });
}

function goInsideCinema(ticket) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!ticket) {
        reject(new Error('no ticket'));
      }

      resolve('enjoy the movie');
    }, 1000);
  });
}

// function watchMovie() {
//   withDrawMoney(10)
//     .then((money) => {
//       return buyCinemaTicket(money);
//     })
//     .then((ticket) => {
//       return goInsideCinema(ticket);
//     })
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       console.log(error.message);
//     });
// }

//  arrow function implisit return
function watchMovie() {
  withDrawMoney(10)
    .then((money) => buyCinemaTicket(money))
    .then((ticket) => goInsideCinema(ticket))
    .then((result) => console.log(result))
    .catch((error) => console.log(error.message));
}

watchMovie();