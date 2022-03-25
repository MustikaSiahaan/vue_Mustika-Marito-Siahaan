# Vue Helpers

## Resume
1. Naviagasi pada Vue
2. Layout Template Vue 
3. Penyimpanan Global dan Penyimpanan Global Permanen 


### Naviagasi pada Vue
Navigasi merupakan perpindahan halaman ke halaman lain. Pada vue, hanya terdapat satu halaman HTML 
sehingga konten dari halaman tersebut dirender ulnag dengan java script
a. Cara Melakukan Navigasi :
Semisal ingin berpindah dari halam home ke about, maka pada halaman about tambahkan /about pada address bar
atau dapat juga dengan menggunakan opsi kontroller dengan link /button
Jenis direksi :
this.$router.push('/user');
this.$router.replace('/user');
this.$router.go(-1) // back
this.$router.go(1) // forward

b. Navigasi Beranak
Merupakan sub-path dari path yang ada, misalnya : /setting/privacy

c. Navigasi Dinamis
Dinamis ialah ketika path meiliki random value tak perlu mendefenisikan valuenya satu per satu
Path didefenisikan sesuai key parameter misalnya(/user/:id
Sedangkan, statis ialah path didefine manual sebagai /user

### Layout Template Vue
Layout ialah susunan tata letak, layout template ialah komponen sebagau susunan tata letak untuk mebungkus tiap halaman
Layout dipakai untuk mengisolasi logika tampilan agar kode bersin dan efisien. Layout mampu meneruskan konten dari anak komponennya
Letak direktori layotu terpisah dan sejajar dengan router dan view
Layout digunakan dengan membuat komponen layout lalu membuat kontroller navigasinya dengan <router-view/>

### Penyimpaan Global
Merupakan metode untuk memudahkan penyimpanan variabel yand dapat diakses di seluruh aplikasi
- State komponen : tersimpan dan valid di satu komponen saja
- Props : tersimpan dan valid pada induk/anak komponen saja
- Store : tersimpan dan valid di seluruh bagian aplikasi

#### Vuex
a. Vuex merupakan library berupa pola untuk mengatur store pada Vue.js
b.Vuex memastikan variabel tersimpan serta dimutasi dengan cara terstruktur dan terprediksi
c. Dalam menggunakan store dengan vuex memakai sintaks yang disisipkan pada store ke dalaam inisiasi Vue
d. Vue meimiliki direktori bernama store sejajaran dengan main.js
e. Vuex mutations : memodifikasi nilai dari state yang tersimpan pada store dengan menggunakan sintaks : store.commit("setAngka, this.newInput);
Mutasi mengubah nilai variabel pada store tanpa logika pengolahan pada fungsi mutasi
Komponen Vue sebaiknya terhubung pada Action yang akan berhubungan langsung dengan Mutations
f. Vuex Actions : Pintu masuk pernta untuk menghubungkan komponen dengan store. Action memanggil fungsi pada mutasi untuk mengubah nilai state pada store
Action digunakan untuk berkomunikasi dengan API juga. Sintaks yang digunakan : store.dispatch("changeAngkaValue", this.newInput);
g. Memisahkan state, mutasi, dan action ke dalam modul terpisah. Namespaced berguna saat nilai true maka dibutuhkan  nama modul + slash sebelum nama action
Sedangkan, jika nilainya false, maka tak dibutuhkan nama modul sebelum action, tetapi nama action pada seluruh modul tidak boleh ada yang sama

### Penyimpanan Global Permanen
a. Nilai pada Vuex akan distel ulang sesuai nilai awal saat halaman direload karena nilai state pada store disimpan pada memory instance
b. Penyimpanan global permanen dibutuhkan saat ingin membuat state permanen pada store agak tak hilang saat halam di reload
c. Vuex-persistedstate mampu mempertahankan Vuex state saat halaman direload dengan menyimpan pada local/cookies

## Task
1. Membuat input todo disertai button edit dan delete
2. Saat halaman direload, list tidak boleh hilang dan ketika judul salah satu list ditekan maka, akan menampilkan halaman detail
3. Pada halaman detail, deskripsi dapat diubah dan tidak akan hilang saat di reload







