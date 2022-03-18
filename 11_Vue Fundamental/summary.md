# 11 Vue Fundamental

## Resume
1. Pembahasan Vue
2. Vue Setup dan Resource

#### Vue
Merupakan sebuah framework dari javascript yang digunakan dalam pengembangan tampilan
website yang interaktif serta dinamis

Alasan penting menggunakan vue :
- Memudahkan pembuatan frontend untuk website
- Mudah dipelajari dan menyenangkan
- Dokumentasi dan rapi
- Ramping dan cepat

Penggunaan Vue :

a. Vue CDN 
Vue dapat digunakan secara langsung pada file html dengan menambahkan kode berikut
"<script src="https://unpkg.com.vue">"
b. Vue CLI
Memanfaatkan perkakas standar dalam memudahkan pembuatan aplikasi vue

#### Vue Setup dan Resource

1. Hal - hal penting yang dibutuhkan :
- Text editor
- Browser
- File HTML(membuat dependesi dan inisiasi aplikasi Vue)

2. Dasar - dasar Vue
- Vue Instance : membuat fungsi vue
- Vue Data Binding : secara deklaratif dapat mengikat DOM yang dirender ke data instance Vue
  
Jenis data binding pada vue :
  
a. Di dalam konten : menambahkan text dengan kurung kurawal
  
b. Di atribut elemen : menambah variabel dengan v-bind
  
c. Di elemen HTML : menambah HTML elemen ke DOM menggunanan v-html
  
- Vue Reactivity : Vue instance ber- property data, saat value data berubah maka, value pada interface berubah otomatis

3. Vue Directive
Dircetive merupakan atribut khusus yang diawali dengan v- yang berfungsi menjalankan perintah javascript dalam atribut
Jenis Vue Directive :
  
a. V-bind : Untuk melakukan one way data binding, shorthand(:href)
  
b. V-model : Untuk melakukan two way data binding
  
c. V-if, v-else dan v-else-if : Direktif Conditional Rendering, untuk melakukan rendering secara kondisional
  
d. V-on : Direktif Event, untuk memanggil fungsi, shorthand(@click)
  
e. V-for : Untuk memberitahu Vue dalam melakukan pengulangan

4. Events dan Method
  
a. Memantau Event : menggunakan direktif v-on 
  
b. Menggunakan methods : fungsi yang dapat diakses pada instance VM  atau dalam ekspresidirektif. Semua metode berkonteks "this" otomatis terikat ke instance Vue

5. Computed Properties dan Watchers
  
a. Computed Properties : memberikan logika yang terlalu banyak pada template sehingga sulit dipelihara. Template menjadi tak sederhana serta deklaratif. Computed properties dibutuhkan untuk logika yang kompleks
  
b. Watchers : fitur khusus untuk memantu variabel dan bertindak saat nilainya berubah

6. Component
Merupakan Vue instance yang dapat di re-use dengan nama yang didefenisikan. Komponen
dapat digunakan sebagai elemen custom pada instance root vue dengan new vue

## TASK

1. Membuat suatu input dengan sebuah button
  
![img1](https://github.com/MustikaSiahaan/vue_Mustika-Marito-Siahaan/blob/master/11_Vue%20Fundamental/screenshots/satu.JPG)

2. Menampailkan list yang ditambahkan, serta me-reset input saat button ditekan
  
![img1](https://github.com/MustikaSiahaan/vue_Mustika-Marito-Siahaan/blob/master/11_Vue%20Fundamental/screenshots/dua.JPG)
  
3. Menampilkan kata "Hebat!" saat list yang dimasukkan sudah sama dengan 4 ataupun lebih besar dari 4
  
![img1](https://github.com/MustikaSiahaan/vue_Mustika-Marito-Siahaan/blob/master/11_Vue%20Fundamental/screenshots/tiga.JPG)













