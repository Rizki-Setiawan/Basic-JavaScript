function buyTollRoadCard(money) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (money >= 25) {
        console.log('buying card');
        resolve({ tollRoadCard: true, balance: 0 });
        return;
      }

      reject(new Error('not enough money to buy card'));
    }, 1000);
  });
}

function topUpBalance(card, amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (card) {
        console.log('topping up balance');
        resolve({ ...card, balance: card.balance + amount });
        return;
      }

      reject(new Error('no card'));
    }, 1000);
  });
}

function useTollRoad(card) {
  const TOLL_PRICE = 10;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (card.balance < TOLL_PRICE) {
        reject(new Error('not enough balance'));
        return;
      }

      card.balance -= TOLL_PRICE;

      console.log('using toll road');
      resolve();
    }, 1000);
  });
}

/**
 * @TODO
 * Lengkapilah kode di bawah ini agar dapat mengakses jalan tol.
 * 1. Beli kartu tol (buyTollRoadCard) -> isi argumen money dengan angka 25 -> mengembalikan objek { tollRoadCard: true, balance: 0 }.
 * 2. Isi saldo kartu tol (topUpBalance) -> isi argumen card dengan objek card yang didapat dari langkah 1 dan isi argumen amount dengan angka 10 -> mengembalikan objek { tollRoadCard: true, balance: 10 }.
 * 3. Gunakan akses jalan toll (useTollRoad) -> isi argumen card dengan objek card yang didapat dari langkah 2.
 *
 * Catatan:
 * - Anda boleh menggunakan async/await atau .then() atau .catch() atau kombinasi keduanya.
 * - Jika ada error, tampilkan error (error.message) tersebut dengan console.log.
 * - Masing-masing langkah di atas harus dijalankan secara berurutan.
 * - Masing-masing langkah akan mencetak pesan ke console.
 * - Anda bisa mengeksplorasi fungsi yang sudah disediakan di utils.js. Namun, Anda tidak boleh mengubah isi dari utils.js.
 */

async function getTollAccess() {
  try {
    const buyCard = await buyTollRoadCard(25);
    console.log(buyCard);
    const topUp = await topUpBalance(buyCard, 10);
    console.log(topUp);
    const useToll = await useTollRoad(topUp);
  } catch (error) {
    console.log(error.message);
  }
}

// Jangan hapus kode di bawah ini
getTollAccess();