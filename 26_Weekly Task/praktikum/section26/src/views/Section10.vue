<template>
  <div class="section3">
    <h1>Frontend Fundamental </h1>
    <p>
      HMTL
Merupakan bahasa markup yang standar dalam mnyusun halaman web. HTML merupakan kerangka CSS sebagai kuli & pakaian, serta javascript sebagai otaknya Ekstensi dari file HTML ini diakhiri .hmtl atau .htm yang bisa di render dalam browser apapun HTML memiliki tags atau elemen yang terdiri dari tag pembuka dan penutup Tag block yang harus dimiliki pada dokumen HTML yaitu html, head, body.

CSS (Cascading Style Sheets)
Digunakan dalam mendesain tampilan web, CSS digunakan denganpembuatan style yang berinteraksi dengan elemen HTML CSS memiliki tiga jenis yaitu, inline CSS, Internal CSS dan External CSS Media quries adalah modul CSS yang berfungsi membuat layout kita responsive yang menyesuaikan dengan ukuran layar perangkat

Pembahasan Javascript & Node.js
Javascript
Merupakan script yang menjadikan halaman wwh hidup dengan interaksi pengguna Javascript ditulis pada kode html yang berjalan otomatis saat halaman dimuat Javascritp bisa berjalan pada borser dan server. Javascript ditambahkan dengan tag script yang diletakkan antara tag head ataupun tag body

Variabel : untuk menyimpan nilai
Operasi matematika
Fungsi : menyimpan logika yang bisa digunakan lagi
Kelas : fungsi khusus sebagai template untuk mmebuat objek
Kondisi : logika pemisah antara dua nilai, true & false
Pengulangan : for each, map, filter
Node.js
Merupakan suatu runstime environtmen pada javascript dengan menjalankan file yang memiliki ekstensi js. Node.js dapat diapsang dengan mengakses web resmi node js

Pembahasan NPM & Git
NPM (Node Package Manager)
Merupakan command line untuk install dan uninstall package, kelola versi, serta dependensi untuk menjalankan proyek Package node.js membuat file yang dibutuhkan menjadi module(library javascript) Key yang penting :

name : nama proyek
script : daftar perintah untuk dijalankan
dependencies : daftar library ketika production
devDependencies : daftar library ketika pengembangan
Cara menambahkan dependencies :

Menjalankan perintah npm install kemudian ditambah -D. Contoh : menjalankan perintah npm install vue dab npm install eslint -D
Pada direktori proyek akan ditambahkan file berikut :

a. node_modules : menampung library yang siap digunakan, yang memiliki ukuran yan besar saat memberikan proyek ke penyimpanan node_module dihapus, jika dibutuhkan dapat dikembalikan dengan menjalankan perintah npm install

b. package-lock.json : menyimpa informasi isi dan versi node_modules

Git
Merupakan control versi pada proyek software yang mencatat setiap perubahan pada file Git mempunyai 3 area kerja yaitu working directory , staging area dan .git repository Kta kunci penting :

Modified : perubahan dicatat dan dapat dibandingkan dengan versi sebelumnya
Staged : file yang telah dimodified dan di add, file ini akan jadi commit selanjutnya
Commit : mengmabil berkas dari staging area, menyimpan snapshot secara tetap ke direktori git
Brabch : cerminan direktori git
    </p>
    <img src="@/assets/images/section10_1.jpg" width="50%" alt="">
    <img src="@/assets/images/section10_2.jpg" width="50%" alt="">
    <img src="@/assets/images/section10_3.jpg" width="50%" alt="">
  </div>
</template>
