// ********************* KODE JAVASCRIPT UNTUK NAVBAR *********************
// ********************* PERUBAHAN NANBAR STICKY SAAT PENGULURAN KE BAWAH *********************
const nav = document.querySelector("header") //Mencari elemen header pertama dalam dokumen HTML dan menyimpannya dalam variabel nav.
window.addEventListener("scroll", ()=> { //menambahkan event listener ketika pengguna menggulir halaman
    // (CSS menggunakan posisi navbar)
    if(document.documentElement.scrollTop > 20){ //memeriksa apabila pengguna mengulir lebih dari 20px
        nav.classList.add("sticky"); //penambahan kelas sticky
    }else{
        nav.classList.remove("sticky"); //menghapus kelas sticky
    }
});
// ********************* SHOW MENU *********************
const navMenu = document.getElementById('nav-menu'), //mendeklar variabel dan mengakses elemen berdasarkan id nav-menu
    navToggle = document.getElementById('nav-toggle'), //mendeklar variabel dan mengakses elemen berdasarkan id nav-toggle
    navClose = document.getElementById('nav-close') //mendeklar variabel dan mengakses elemen berdasarkan id nav-close

//  ********************* MENU SHOW ********************* 
if(navToggle){ //memeriksa apakah elemen nav-toggle ada berada di halaman
    navToggle.addEventListener('click', () =>{ //menambahkan event listener
        navMenu.classList.add('show-menu') //menambahkan kelas show-menu
    })
}

//  ********************* MENU HIDDEN ********************* 
if(navClose){ //memeriksa apakah elemen nav-close ada berada di halaman
    navClose.addEventListener('click', ()=>{ //menambahkan event listener
        navMenu.classList.remove('show-menu') //mengahapus kelas show-menu
    })
}