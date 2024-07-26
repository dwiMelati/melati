// ******************************* LOGIN *******************************
let tam = 3; //variabel untuk jumlah kesempatan dalam login
// menambahkan event listener pada form dengan ID "login".
document.login.addEventListener('submit', (e) => { //function saat submit
  e.preventDefault(); //mencegah default dari form (merefresh halaman)
  // Mendapatkan nilai input
  let user = document.login.username.value; //mendapatkan nilai yang dimasukkan dalam inputan dengan nama username
  let pass = document.login.password.value; //mendapatkan nilai yang dimasukkan dalam inputan dengan nama password
  if (user == "nur" && pass == "1234") { //memeriksa inputan dan memebrikan respons
    alert("Welcome Nur");//Menampilkan alert
    window.open("../html/index.html");//membuat halaman menggunakan window.open()
    return false; //menghentikan proses submit karena masuk ke hal. lain
  } else { //apabila inputan salah, maka akan terdapat notif
    alert("isi username dan password dengan benar");
    tam--; //mengurangi nilai tam dengan 1, sehingga kesempatan login berkurang 
  }
});