try { 

  // kode yang berpeluang menghasilkan error
  console.log("awal blok try");
  errorCode;
  console.log("akhir blok try");

} catch (error) { 

  // error handling, jika tidak error akan diabaikan
  console.log("error");
  console.log(error.name); // nama error yang terjadi
  console.log(error.message); // pesan tentang detail error
  console.log(error.stack); // informasi urutan kejadian yang menyebabkan error, umumnya digunakan untuk debugging

} finally {

  // blok kode yang tetap dijalankan tanpa peduli apa yang terjadi di blok try-catch
  console.log("akan selalu dieksekusi");

}