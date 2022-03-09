Explanation, Value dan Destructing

Java script merupakan bahas pemorograman berlevel tinggi, scripting, untyped dan
interpreted. Bahasa ini berada pada tingkatan paling atas yang dimengerti manusia
Bahasa ini dibuat untuk bahasa pemorograman web. Javascript dapat dijalankan pada
beberapa browser seperti chrome, internet explorer, opera, mozila firefox.
Bahasa ini tidak berpengaruh dengan tipe data
Javascript ini memiliki beberapa framework seperti bootstrap, react.js, dan vue.js

Pengertian Var, Let Const

1. Declaration ialah proses pembuatan variabel untuk menyimpan data, 
Var(jarang dipakai), let(digunakan jika mebutuhkan nilai yang dapat diubah), const(digunakan
saat dibutuhakn nilai yang tak bisa di reassign dan saat dideklarasikan harus diberi nilai)
- Redeclaration : Var
- Reassigment : Var, Let

2. Scoping ialah mengendalikan ruang lingkup variabel bergantung lokasi deklarasi
Scoping  : global(variable bisa diakses), function(variable tak dapat diakses di luar), 
block(variable yang bisa di akses hanya var)

3. Hoisting ialah beberapa variabel dapat diakses sebelum di deklarsikan, misalnya
var dan function digunakan sebelum deklarasi terjadi 

Value and References

- Primitive ialah unit pemrosesan terkecil dan paling sederhana
Misalnya, string, boolean, number dll
- Object ialah unit penyimpanan properti dan fungsi
Misalnya, array, date, set, map , dll
- Destructing
Merupakan ekspresi untuk menyalin nilai dari array, atau properti dari objek, ke variabel berbdea
a. Array : deklarasi variabel dulu
b. Object : menyalin nilai properti ke objek ke dalam variabel
- Spread dapat digunakan jika elemen dari objetc/array perlu dimasukkan ke semacam daftar

Method, Control Flow dan Function

- Method pada array, 
Method adalah fungsi terkait object, program dibuar sederhana sesuai kegunaan
Terdiri dari concat, map, foreach, slice, filter, reduce
- Normal Flow : eksekusi atas ke bawah, kiri ke kanan berurutan
- Control flow : mengatur alur eksekusi agar sesuai keinginan kita
Misalnya : For, while, do while, if...else, switch, break, try catch, throw, dll
- Function : sebuah objek, yang memiliki properti dan method
Deklarasi fungsi : nama fungsi, parameter, scope dan pemanggilan fungsi


Class, Async wait, DOM

a. Async wait
- Synchronous : mengeksekusi perintah satu persatu sesuai urutan
- Asynchronous : mengeksekusi berdasarkan waktu proses(setTimeout menunda eksekusi)
- Callback : fungsi yang dikirimkan sebagai parameter di fungsi lain, fungsi yang dieksekusi
setelah fungsi lain selesai
- Promise : objek yang mempresentasikan keberhasilan dan kegagalan 
- Fungsi Aysncronous menghasilkan promise sebagai return value
- Await ialah keyword pada async function untuk menghentikan eksekusi

b. Classes
- Class adalah prototype dari suatu objek yang dibuat
- Constructor : method dalam class yang terpanggil pertama
- Method : fungsi dalam class
- Atributes : kumpulan variabel untuk membentuk objek dari class
- Extend : membuat kelas anak dari indukan

c. DOM(Document Object Model)
Merupakan API untuk HTML mempresentasikan halaman web di dokumen menjadi objek
DOM Selection Method
- getElementById() : elemen
- getElementByTagName : HTMLCollection
- getElementByClassName : HTMLCollection
- querySelector : nodeList
DOM Manipulation
- element.innerHTML : merubah isi tag yang telah diseleksi
- element.style.<propertyCSS> : merubah isi style dari tag yang telah diseleksi
- element.setAtribute() : memanipulasi atribut yang telah diseleksi
- element.classList.add() : memanipulasi class yang telah diseleksi
DOM Event 
- onClick : mengklik mouse
- onchange : kombinasi validasi bidang input
- onblur : meniggalkan kolom input
- onmouseover : mengarahkan mouse ke atas pada objek
- onmouseout : mengarahkan mouse keluar pada objek
- oncopy : mengcopy objek

 





















