// mengambil value dari local storage dgn key keyword
const keyword = localStorage.getItem("keyword");
// membuat function untuk get buku berdasarkan keyword
function searchData() {
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${keyword}`)
    .then((res) => res.json())
    .then((res) => console.log(res));
}
// memanggil function searchData
searchData();
