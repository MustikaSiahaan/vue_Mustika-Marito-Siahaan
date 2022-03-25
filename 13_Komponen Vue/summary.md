# Komponen Vue

## Resume
1. Module Export dan Import
2. Komponen Dapat Digunakan Kembali
3. Instance Lifecycle Hooks
4. Instance Lifecycle Hooks



#### Module Export dan Import

a. Javascript Module
Modul merupakan sebuah fileyang dapat berisi library fungsi dalam tujuan tertentu, satu kode skrip merupakan satu modul
b. Perbedaan Module dan Regular Script
Modul dapat memuat satu sama lain serta menggunakan export dan import pada pemanggilan fungsi antar modul
- Export : menyediakan fungsi, objek, ataupun nilai primitf dari modul, jadi dapat digunakan pada modul lain dengan import
Terdapat dua jenis export :
* Named exports(0>per modul) = expert const 
* Default exports(1 per modul) = export default
- Import : mengambil nilai variable, objek atau fungsi dari modul lain
Terdapat empat jenis import :
* Importing defaults : import target
* Import multiple exports : import {target}
* Rename multiple exports : import {target as t}
* Import defaults + multiple : import targetDefault, {target as}

#### Komponen Dapat Digunakan Kembali
Suatu file komponen file tunggal Vue yang dapat digunakan lebih dari sekali pada tempat berbeda
Komponen vue bekerja dengan menggunakan induk dan anak
a. Direktori Komponen
Komponen disatukan dengan komponen lain tapi dipisah dengan komponen yang menjadi halaman
- Halaman bisa menggunakan komponne, tetapi komponen tak bisa menggunakan halaman
- Komponen bisa menggunakan komponen lain

b. Komunikasi Anak Komponen dan Induk Komponen
- Variable>Props : <Hello World msg = "Welcome to Your Vue.js App">
- Fungsi/event>Emits : <Hello World msg = "Welcome to Your Vue.js App" @click="showAlert">


#### Paradigma Fungsi Pembantu
Ditujukan agar dapat digunakan lebih dari sekali pada tempat berbeda
Cara kerja
Direktori komponen : Fungsi disatukan dengan direktori yang sejajar dengan halaman/komponen
a. Tips :
* Menggunakan nama berbeda tapi dimengerti, jamak dan self descripting, misalnya utilities, utils, helpers, tools
* Beberapa fungsi yang sering dipakai :
- Operator(sum, average, median, min-max, count umur, dll)
- Formatter (date, time, mata uang, dll)
- Validator (email, nomor HP, nomor kartu credit, dll)
- Generator (random number, text random, color, format text, dll)

#### Instance Lifecycle Hooks
Lifcycle merupakan saat tiap vue instance melewat beberapa rangkaian tahapan saat dibuat
Cara kerja lifecycle di Vue : berawal dari inisiasi dan berakhir saat penghancuran
Tiap siklus mempunyai hook masing- masing berbentuk fungsi

Tiga Lifecycle utama yaitu :
a. Created : terjadi saat instance terbentuk dan sebelum DOM di render
Contoh : menambah SECO Meta dan memasang event listener scrol
b. Mounted : tejadi saat DOM telah di render
Contoh : handling loader
c. Destroyed : terjadi sebelum instance dihancurkan
Contoh : melepas event listener scroll


## TASK
1. Membuat input todo yang lebar nya memenuhi layar
2. Membuat fungsi edit dan delete untuk setiap item










