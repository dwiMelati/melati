// API Melati
// function untuk mendapatkan buku menggunakan fetch
function getBooks(judul) {
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${judul}`)
    .then((res) => res.json())
    .then((res) => console.log(res));
}

// membuat event ketika button submit di klick
let submit = document.getElementById("submit");
submit.addEventListener("click", () => {
  // memanggil function search
  search();
});
// membuat function search
function search() {
  // mengambil element form dan membuat event ketika di submit
  let form = document
    .getElementById("form-search")
    .addEventListener("submit", (e) => {
      // mengambil element input
      let input = document.getElementById("keyword");
      //   validasi value tag input
      if (input.value == "") {
        // menahan action form
        e.preventDefault();
      } else {
        // menyimpan value tag input ke local storage
        localStorage.setItem("keyword", input.value);
      }
    });
}
// memanggil function untuk mendapatkan buku
getBooks("Bumi");
getBooks("habiburrahman el shirazy");
