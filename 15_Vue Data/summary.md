# Vue Data

## Resume
1. Data Fetching
2. Penanganan Data Error
3. Validasi Data

### Data Fetching
Merupakan pemanggilan data dengan program dimana data dipindahkan pada lokasi alternatif/ditampilkan
a. API merupakan protokol yang menyediakan bahasa agar dua sitem bisa berintraksi
b. API Endpoint merupakan titik kontak komunikasi dari interaksi antar sistem berbentuk link
c. Axios merupakan library frontend untuk request HTTP dengan link API Endpoint
Fetch Data dengan Axios :
- Membuat modul store dengan nama pokemon
- Memanggil actions dan state pokemon pada komponen page
d. Request merupakan permintaan pengambilan data, sedangkan request queries merupakan syarat dalam pengambilan data
https://pokeapi.co/api/v2/pokemon?limit=20&offset=0
e. Penggunaan string query pada endpoint untuk pengaturan halaman
- Limit : batasan maks dari banyak data yang diambil
- Offset : index untuk memulai pengambilan data

## Penanganan Data Error
Merupakan konsep dalam mencegah runtime-error terjadi
- Javascript bertipe data dinamis sehingga saat kompilasi ditemukan runtime-error dalam mengakses variabel atau fungsi yang undefined
- Try Catch Finally merupakan metode penanganan error javascript
- Cara kerja promise
Objek promise mewakili penyelesaian error dari operasi asinkron serta value yang tercipta
Kegiatan komunikasi dengan API berbentuk promise dengn penggunaan syntax sebagai berikut :
fungsiPromise().then(res=>{}).catch(err=> {});

### Validasi Data
Validasi data bekerja dengan menerima nilai yang ingin dicek lalu me-return value validty berupa boolean(true/false)
- Validasi manual dengan Javascript
Menggunakan fungsi dengan if atau switch
- Validasi pada Form
Menggunakan fungsi bawaan HTML5
- Validasi dengan Regex
Regex(regilar expression) berupa teks untuk mendefenisiklan suatu pola pencarian untuk matching dan locate

a. Autentikasi
Merupakan suatu proses untuk memvalidasi indentitas pengguna saat mengakses suatu sistem
Cara kerja :
User A menginput username dan password, dimana bila inputan cocok, server mengirim kode untuk memastikan keaslian dari user A

b. Otorisasi
Cara kerja :
User A menginput username dan password, dimana bila inputan cocok, server mengirim kode untuk memastikan keaslian dari user A

c. Menerapkan Autentikasi
1.Menggunakan API Endpoint
2. Dengan listpath :
- Regitrasi: /api/authaccount/registration [post]
- Login: /api/authaccount/login [post]
3. Untuk otorisasi dibatasi akses pada pengguna yang telah login
- Detail pengguna: /api/users/:id [get]




