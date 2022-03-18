# 12 Vue CLI

## Resume
1. Vue CLI
2. Vue Komponen File Tunggal
3. Vue Struktur Folder

#### Vue CLI
Merupakan alat untuk memudahkan pembuatan aplikasi Vue baru
Webpack adalah sebuah modul bundler dalam penggabungan seluruh modul projek aplikasi
seperti javascript, HTML, CSS dan lain-lain menjadi satu file

Cara kerja Vue CLI
1. Pasang Vue CLI
Menjalankan perintah npm install -g @vue/cli dan memastikan pemsanagan dengan vue --version
2. Menginisiasi Aplikasi dengan menjalankan code berikut :
- vue create <nama aplikasi>
- vue create .
3. Menjalankan Aplikasi
Menjalankan npm run serve
Jika pada direktori tak terdapat node_moduled atau isinya tak mutakhir jalankan perintah npm install
Lalu compile dengan perintah npm run serve

Tools Penting 
- ESLint - Linter : alat untuk memindai kode untuk mengetahui masalah penyebab bug
- Prettier-Code formatter : alat untuk menyeragamkan gaya kode
- Vetur : highlighter untuk memberikan warna pada code sesuai ekstensi file
- GitLens - Git supercharged (Inspector) : alat untuk mengetahui versi dalam tiap baris

#### Vue Komponen File Tunggal
Memungkinkan kita untuk membangun seluruh komponen dalam satu file, fie tunggal memiliki ekstensi .vue

Cara kerja komponen File Tunggal :
- Terdapat 3 tag utama yaitu <template>, <script> dan <style>
- Template : HTML body memuat dan me-render HTML tag pada umumnya
- Script : Memuat sintaks javascript dan dapat menerima atribut lang pada penggunaan typescript
- Style : Dapat menerima atribut lang pada penggunaan CSS prprocessor seperti Stylus. SCSS

#### Vue Struktur Folder 
- Default : Direktori yand dipilih dengan setelan bawaan, seiring perkembangan dan kompleksitas aplikasi, maka susuna direktori dapat berubah
-  Assets : Pada direktori ini, seluruh aset tersimpan
- Components : Direktori ini akan menyimpan semua file komponen file tungal vue
- Router : Direktori ini menyimpan file terkati vue-router(linrary untuk mengatur routing addres vue application)
- Store : Direktori penyimpanan vuex untuk menyimpan file terkait vuex
Vuex merupakan library untuk mengatur penyimpanan state yang global di aplikasi vue
- View : Meiliki isi yang mirip dengan direktori komponen yaitu komponne file tunggal, 
Direktori view digunakan sebagai halaman, yang berhubungan langsung dengan router
- Test : Direktori ini dgunakan untuk unit testing komponen/fungsi dalam direktori src.
Direktori test terletak di luar direktori src, yang tak berhubungan langsung dengan file pada proses pengembangan.

## TASK

1. Membuat suatu input dengan sebuah button
2. Menampailkan list yang ditambahkan, serta me-reset input saat button ditekan
3. Menampilkan kata "Hebat!" saat list yang dimasukkan sudah sama dengan 4 ataupun lebih besar dari 4
 



