# Understanding GraphQL Basic

## Resume

### Pengertian GraphQL
Bahasa kueri untuk API serta runtime sisi server untuk mengeksekusi kueri 
dengan menggunakan sistem tipe pada data, graphql meminimalisir jumlah data yang akan
ditransfer dengan jaringan. Dengan graphQL, satu endpoitnt (graphQL) dapat digunakan
untuk setiap request yang dibutuhkan

Fitur GraphQL
- Query : get databased dengan query yang spesifik yang didefine
- Mutation : insert, update dan delete data
- Subscription : get updated data secara real time

a. Query Basic
Dengan mendefenisikan field yang ingin diambil maka graphQl akan mengambil data sesuai kebutuhan
b. Query - multiple related data sources / collections
Mengambil data dari beberapa field terkait, contoh untuk mendapatkan data direktur dari endpoint yang lain kita memakai direktur.id
Dengan graphQL dapat mendefine filed yang dibutuhkan secara langsung
c. Query - multiple unrelated data sources / collections
Mengambil data dari beberapa field tidak terkait untuk meminimalisir nwtwirk request, contoh untuk mengambil data film dan data buku, dengan REST kita membutuhkan 2 request dan endpoint yang berbeda.
Dengan graphQL kita hanya membutuhkan satu request untuk data tsb
d. Query - fragments
Merupakan potonga logic yang dibagi menjadi beberapa kueri dan mutasi. Fragment menyederhanakan penggunaan kueri/mutasi
e. Mutation
Fungsi untuk memperbarui, menyisipkan dan menghapus data. 
f. Subscription
fitur GraphQL yang memungkinkan server mengirim data ke kliennya pada kondisi tertentu terjadi yang biasanya diimplementasikan dengan WebSockets. 

### Hasura dan Heroku
Hasura merupakan service yang menyediakan graphql dan rest api. Hasura dikelola pada cloud atau hosting pribadi
Heroku adalah platform cloud sebagai layanan yang mendukung beberapa bahasa pemrograman. Heroku juga menyediakan database postgres gratis

### Apollo
Apollo Client adalah library manajemen status komprehensif untuk JavaScript yang memungkinkan kami mengelola data lokal dan jarak jauh dengan GraphQL. Apollo dibutuhkan untuk mengambil, menyimpan, dan memodifikasi data aplikasi, sambil memperbarui UI secara otomatis.