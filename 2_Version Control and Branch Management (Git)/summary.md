# Version Control and Branch Management (Git)

## Resume
Dalam materi ini, mempelajari:
1. Pengertian Git dan Versioning
2. Tools
3. Install dan Set Up Git
 


### Pengertian Git dan Versioning
Git adalah suatu control system yang dibuat agar pengembangan software secara bersama sama.
Versioning adalah pengaturan versi dari source code program 

### Tools
Tools terdiri dari tiga bagian antara lain :
1. Version Control System (VCS)
2. Source Code Manager (SCM)
3. Revision Control System (RCS)

### Install dan Set Up Git

Langkah - langkah install git
- Mendownload git versi terbaru
- Melakukan penginstalan sesuai instruksi
- Menjalankan kode "git --version" pada command prompt bash untuk memastikan apakah git telah berhasil terinstall

Langkah - langkah set up git
- Melakukan registrasi akun lalu login pada github
- Lalu,jalankan kode *git config --global user.name "Mustika Marito Siahaan"*
- Kemudian jalankan kode *git config --global user.email"mustikasiahaan4@gmail.com"*
- Membuat repository pada github
- Jalankan kode *git init* untuk mengiinialisasi file yang akan dipush
- Jalankan *git remote add origin (link repositroy)* untuk mengkloning data storage
- Jalankan kode *git commit -m (pesan)* untuk menyimpan perubahan namun tak mengubah pada remote repository
- Jalankan kode *git push -u origin (nama branch)* untuk mengirim perubahan file ke repository

Kode untuk branch :
- Jalankan kode *git branch (nama branch yang akan dibuat)* untuk membuat branch baru
- Jalankan kode *git branch -a* untuk menapilkan lokasi branch
- Jalankan kode *git branch --list* untuk menampilkan seluruh list branch
- Jalnakan kode *git branch -D * untuk menghapus brach 

## Task
### 1. Membuat Repositori Baru dan memasukkan project  
Membuat repository baru pada github dan juga membuat repository lokal dab menyediakan proyek yang akan di push 
Setelah itu, menjalankan beberapa kode seperti :
- Jalankan kode *git init* untuk mengiinialisasi file yang akan dipush
- Jalankan *git remote add origin (link repositroy)* untuk mengkloning data storage
- Jalankan kode *git commit -m (pesan)* untuk menyimpan perubahan namun tak mengubah pada remote repository
- Jalankan kode *git push -u origin (nama branch)* untuk mengirim perubahan file ke repository

Berikut ini merupakan hasil screenshoot dari beberapa kode yang saya jalankan untuk membuat respository baru

![Gambar pertama](https://github.com/MustikaSiahaan/vue_Mustika-Marito-Siahaan/blob/master/2_Version%20Control%20and%20Branch%20Management%20(Git)/screenshots/screenshoot_satu.png)

### 2. Membuat branch baru yang berfungsi sebagai develop
Untuk membuat branch baru dibutuhkkan kode program tambahan selain kode program pada langkah 1 sebelumnya seperti berikut :
*git branch (nama branch yang akan dibuat)*
Pada branch ini saya memberikan nama branch nya develop

Berikut ini merupakan kode yang saya jalankan untuk membuat branch develop

![Gambar kedua](https://github.com/MustikaSiahaan/vue_Mustika-Marito-Siahaan/blob/master/2_Version%20Control%20and%20Branch%20Management%20(Git)/screenshots/screenshoot_develop.png)

### 3. Membuat branch ketiga
Untuk membuat branch baru dibutuhkkan kode program tambahan selain kode program pada langkah 1 sebelumnya seperti berikut :
*git branch (nama branch yang akan dibuat)*
Pada branch ini saya memberikan nama branch nya ketiga

Berikut ini merupakan kode yang saya jalankan untuk membuat branch ketiga

![Gambar kedua](https://github.com/MustikaSiahaan/vue_Mustika-Marito-Siahaan/blob/master/2_Version%20Control%20and%20Branch%20Management%20(Git)/screenshots/screenshoots_ketigaa.jpg)

### 4. Membuat branch ketiga
Untuk membuat branch baru dibutuhkkan kode program tambahan selain kode program pada langkah 1 sebelumnya seperti berikut :
*git branch (nama branch yang akan dibuat)*
Pada branch ini saya memberikan nama branch nya keempat

Berikut ini merupakan kode yang saya jalankan untuk membuat branch keempat

![Gambar ketiga](https://github.com/MustikaSiahaan/vue_Mustika-Marito-Siahaan/blob/master/2_Version%20Control%20and%20Branch%20Management%20(Git)/screenshots/screenshoots_keempat.jpg)

#### Berikut ini merupakan gambaran dari insight network

![Gambar screen](https://github.com/MustikaSiahaan/vue_Mustika-Marito-Siahaan/blob/master/2_Version%20Control%20and%20Branch%20Management%20(Git)/screenshots/screenshoot_hasil.png)

#### Berikut ini merupakan link repositori dari tugas praktikum :
https://github.com/MustikaSiahaan/TugasSection02.git














