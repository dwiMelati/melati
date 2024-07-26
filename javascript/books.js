// ****************************** MENAMPILKAN API  ******************************
// mendeklar variabel untuk mengakses elemen berdasarkan id(elemen html)
const bookContainer = document.getElementById('book-container'); // menyimpan referensinya dalam variabel bookContainer
const bookContainer2 = document.getElementById('book-containerr');// menyimpan referensinya dalam variabel bookContainer2
const modal = document.getElementById('modal'); //menyimpan referensinya dalam variabel modal.
const modalClose = document.getElementById('modalClose');// menyimpan referensinya dalam variabel modalClose.
const bookDetails = document.getElementById('bookDetails');//dan menyimpan referensinya dalam variabel bookDetails.

//mendeklar variabel untuk mengakses elemen berdasarkan selector 
const bookTitle = bookDetails.querySelector('h2');//Mencari elemen h2 pertama (tag heading level 2) di dalam elemen bookDetails dan menyimpan referensinya dalam variabel bookTitle (judul buku).
const bookAuthors = bookDetails.querySelector('p:nth-child(2)');//Mencari elemen p (paragraf) kedua (:nth-child(2)) di dalam elemen bookDetails dan menyimpan referensinya dalam variabel bookDescription
const bookDescription = bookDetails.querySelector('p:nth-child(3)');//Mencari elemen p (paragraf) ketiga (:nth-child(3)) di dalam elemen bookDetails dan menyimpan referensinya dalam variabel bookDescription
const addedTitles = new Set();// set

//function untuk  elemen buku yang didalamnya terdapat judul, penulis, gambar, dan deskripsi
function createBookElement(title, authors, thumbnail, description) { 
  const bookElement = document.createElement('div'); //mendeklarasikan variabel dengan elemen div
  bookElement.classList.add('book'); //menambah kelas pada div

  const imgElement = document.createElement('img'); //mendeklarasikan variabel dengan elemen img
  imgElement.src = thumbnail; //mengatur artibut src dari elemen imgElement dengan thumnail (gambar dari API)
  imgElement.alt = title; //mengatur artibut alt dari elemen imgElement dengan title (judul dari API)
  imgElement.className = "gambar" //menambahkan kelas pada imgElement

  const titleElement = document.createElement('h3'); //mendeklarasikan variabel dengan elemen h3
  titleElement.textContent = title; //mengisi titleElement dengan value title (judul dari API)

  const authorsElement = document.createElement('p'); //mendeklarasikan variabel dengan elemen p
  authorsElement.textContent = authors; //mengisi authorsElement dengan value authors (API)

  //menambahkan elemen- elemen html sebagai child (anak) dari elemen bookElement
  bookElement.appendChild(imgElement);
  bookElement.appendChild(titleElement);
  bookElement.appendChild(authorsElement);

  // menambahkan sebuah event listener ke elemen bookElement
  bookElement.addEventListener('click', () => { 
    showBookDetails(title, authors, description); //memanggil fuction showBookDetails
  });

  //mengembalikan nilai value bookElement yang telah dibuat
  return bookElement; 
}


function fetchBooks(tam) {
  // mengakses REST API menggunakan fetch
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(tam)}`) 
    .then((response) => response.json()) //  parameter untuk menampung JSON dari fetch REST API
    .then((data) => { // mengubah hasil JSON dari parameter tapi sebagai objek untuk digunakan pada HTML
      const books = data.items; //mendeklarasikan variabel yang akan menampung array dari objek buku
      books.forEach((book) => { //pengulangan pada elemen
        const bookInfo = book.volumeInfo; //mendeklarasikan variabel yang akan menampung objek
        const title = bookInfo.title; //mendeklarasikan variabel yang akan menampung title
        const authors = bookInfo.authors ? bookInfo.authors.join(', ') : 'Unknown Author'; //mendeklarasikan variabel yang akan menampung nama author, apabila tidak ada nama author maka akan tampil Unknown Author
        const thumbnail = bookInfo.imageLinks?.thumbnail; //mendeklarasikan variabel yang akan menampung gambar, jika tidak ada maka akan menjadi undefined
        const description = bookInfo.description || 'No description available'; //mendeklarasikan variabel yang akan menampung deskripsi, apabila tidak ada nama deskipsi maka akan tampil No description available

        if (!addedTitles.has(title) && thumbnail && description !== 'No description available') { //memeriksa apakah api memiliki gambar dan judul yg sama atau api tidak memiliki deskripsi/gambar
          addedTitles.add(title);
          const bookElement = createBookElement(title, authors, thumbnail, description); //mendeklarasikan variabel yang akan menampung elemen buku yang telah dibuat
          if(tam === 'habiburrahman el shirazy'){
            bookContainer2.appendChild(bookElement); //menambahkan child (anak) pada bookContainer2
          }else if(tam === 'boy candra'){
            bookContainer.appendChild(bookElement); //menambahkan child (anak) pada bookContainer
          }
        }        
      });
    })
    //ketika terjadi error maka bakal ditampilkan di console
    .catch((error) => {
      console.error('Error fetching books:', error); 
    });

}

 //function ini untuk menampilkan detail buku
function showBookDetails(title, authors, description) {
   //ini mengisi bookTitle dengan title
  bookTitle.textContent = title;
  //mengisi bookAuthors dengan author
  bookAuthors.textContent = `Authors: ${authors}`; 
   //mengisi bookDescription dengan description
  bookDescription.textContent = description;
  //menambahkan kelas pada modal
  modal.classList.add('show'); 
}

//function untuk menghapus kelas show
function hideModal() { 
  modal.classList.remove('show');
}

//menambahkan event listener pada saat di klik
modalClose.addEventListener('click', () => { 
  hideModal(); //memanggil function hideModal
});

//menambahkan event listener pada saat di klik
window.addEventListener('click', (event) => { 
  //apabila yang diklik adalah bagian dari modal
  if (event.target === modal) {
    hideModal();
  }
});

//memanggil fuction dengan melempar nilai
fetchBooks('boy candra'); 
// fetchBooks('pramoedya ananta toer');
// fetchBooks('andre hirata');
// fetchBooks('deborah sampurna');
// fetchBooks('asma nadia');
// fetchBooks('ilana tan');
fetchBooks('habiburrahman el shirazy');