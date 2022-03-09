# 8_Javascript Refrehment

## Resume
Dalam materi ini, mempelajari:
1. Penjelasan javascript, Value dan Destructing
2. Penjelasan Method, Control Flow dan Function
3. Penjelasan Class, Async wait, DOM

### Penjelasan javascript, Value dan Destructing

Java script merupakan bahas pemorograman berlevel tinggi, scripting, untyped dan
interpreted. Bahasa ini berada pada tingkatan paling atas yang dimengerti manusia
Bahasa ini dibuat untuk bahasa pemorograman web. Javascript dapat dijalankan pada
beberapa browser seperti chrome, internet explorer, opera, mozila firefox.
Bahasa ini tidak berpengaruh dengan tipe data
Javascript ini memiliki beberapa framework seperti bootstrap, react.js, dan vue.js

Pengertian Var, Let , const
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

### Penjelasan Method, Control Flow dan Function

- Method pada array, 
Method adalah fungsi terkait object, program dibuar sederhana sesuai kegunaan
Terdiri dari concat, map, foreach, slice, filter, reduce
- Normal Flow : eksekusi atas ke bawah, kiri ke kanan berurutan
- Control flow : mengatur alur eksekusi agar sesuai keinginan kita
Misalnya : For, while, do while, if...else, switch, break, try catch, throw, dll
- Function : sebuah objek, yang memiliki properti dan method
Deklarasi fungsi : nama fungsi, parameter, scope dan pemanggilan fungsi


### Penjelasan Class, Async wait, DOM

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

## TASK
 
 1. Mengambiil index kedua dari line 5, menampilkan baris 22 dan memanggil function di baris 31. Hasil dari code ialah sebagai berikut
![gambar one](https://github.com/MustikaSiahaan/vue_Mustika-Marito-Siahaan/blob/master/8_Javascript%20Refreshment/screenshots/soal1.JPG)
 2. Menjawab beberapa pertanyaan terkait kode program sebelumnya, dapat dilihat pada link ini :
 3. Melakukan destructuring agar setiap nama tersimpan di variabel
 ![gambar one](https://github.com/MustikaSiahaan/vue_Mustika-Marito-Siahaan/blob/master/8_Javascript%20Refreshment/screenshots/soal3.JPG)
 4. Megubah tanda (-) menjadi (/) pada variabe yang ditentukan
 ![gambar one](https://github.com/MustikaSiahaan/vue_Mustika-Marito-Siahaan/blob/master/8_Javascript%20Refreshment/screenshots/soal4.JPG)
 5. Mengalikan value dari array pada soal yang telah ditentukan
 ![gambar one](https://github.com/MustikaSiahaan/vue_Mustika-Marito-Siahaan/blob/master/8_Javascript%20Refreshment/screenshots/soal5.JPG)
 6. Mmebulatkan bilangan pada variabel yang ditentukan
 ![gambar one](https://github.com/MustikaSiahaan/vue_Mustika-Marito-Siahaan/blob/master/8_Javascript%20Refreshment/screenshots/soal6.JPG)

 





















