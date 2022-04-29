<template>
  <div class="section3">
    <h1> CSS </h1>
    <p>
      Pengertian CSS
Menghias halaman web seperti color, size, font background, width, height, dll dan mengatur halaman web(float, align display, psosition)

Menambah File CSS
External : tag link rel=”stylesheet” href=”main.css”
Internal : Didefinisikan di dalam elemen style, di dalam bagian head atau body
Inline : h1 style=color>Hello World
CSS Selector
ID: (#) tiap elemen memiliki satu tag id, pada 1 halaman tidak boleh ada 2 penamaan id yang berbeda
Class : (.) tag class dengan nama sama dapat digunakan berulang pada satu halaman satu elemen boleh punya class berbeda yang lebih dari satu
CSS gruouping, CSS Font, CSSC Margin&Padding dan CSS Background
CSS Grouping
Mengelompokkan beberapa selector dalam satu deklarasi style.

CSS Font
Font : Menetapkan semua properti font dalam satu deklarasi
Font-family : Menentukan kelompok font teks
Font-size : Menentukan ukuran font teks
Font-weight : Menentukan ketebalan untuk font teks
Font-style : Menentukan font teks menjadi miring
CSSC Margin & Padding
Memberikan ukuran ruang disekitar element.

.content { margin: 25px 20px; padding: 25px 40px; }

CSS Background
Background-color : Menetapkan warna background pada suatu elemen
Background-image : Menentukan gambar background pada suatu elemen
Background-repeat :Menentukan gambar background untuk di ulang
Background-size : Menentukan ukuran gambar untuk background
Background-position : Mengatur posisi awal gambar
CSS Link Event, CSS Transisi, CSS Display dan CSS Table
CSS Link Event
:hover = Kondisi style ketika mouse berada diatas elemen.
:active = Style ketika link “a” ditekan.
:visited = Style dimana elemen link “a” telah di kunjungi / di klik.
CSS Transisi
Transisi CSS ditujukan untuk mengubah value properti dengan lebih halus dalam durasi yang ditentukan

CSS Display
Ditujukan untuk tampilan dari elemen

Block : Elemen block selalu dimulai pada baris baru. (dimulai dari kiri ke kanan).
Inline-block : Elemen inline-block membutuhkan lebar sesuai yang diperlukan.
None : Menyembunyikan elemen untuk tidak ditampilkan.
CSS Table
Border : Menambahkan border pada table, th dan td
Border-collapse : Membuat border menjadi single border
:nth-child(even) : Membuat background stripe
    </p>
    <img src="@/assets/images/section6_1.jpg" width="50%" alt="">
    <img src="@/assets/images/section6_2.jpg" width="50%" alt="">
    <img src="@/assets/images/section6_3.jpg" width="50%" alt="">
  </div>
</template>
