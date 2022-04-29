<template>
  <div class="section2">
    <h1>Version Control and Branch Management (Git)</h1>
    <p>
      <router-link>//github.com/MustikaSiahaan/vue_Mustika-Marito-Siahaan/blob/master/2_Version%20Control%20and%20Branch%20Management%20(Git)/summary.md
      </router-link>
      Dalam materi ini, mempelajari:

      Pengertian Git dan Versioning
      Tools
      Install dan Set Up Git
      Pengertian Git dan Versioning
      Git adalah suatu control system yang dibuat agar pengembangan software secara bersama sama. Versioning adalah pengaturan versi dari source code program

      Tools
      Tools terdiri dari tiga bagian antara lain :

      Version Control System (VCS)
      Source Code Manager (SCM)
      Revision Control System (RCS)
      Install dan Set Up Git
      Langkah - langkah install git

      Mendownload git versi terbaru
      Melakukan penginstalan sesuai instruksi
      Menjalankan kode "git --version" pada command prompt bash untuk memastikan apakah git telah berhasil terinstall
      Langkah - langkah set up git

      Melakukan registrasi akun lalu login pada github
      Lalu,jalankan kode git config --global user.name "Mustika Marito Siahaan"
      Kemudian jalankan kode git config --global user.email"mustikasiahaan4@gmail.com"
      Membuat repository pada github
      Jalankan kode git init untuk mengiinialisasi file yang akan dipush
      Jalankan git remote add origin (link repositroy) untuk mengkloning data storage
      Jalankan kode git commit -m (pesan) untuk menyimpan perubahan namun tak mengubah pada remote repository
      Jalankan kode git push -u origin (nama branch) untuk mengirim perubahan file ke repository
      Kode untuk branch :

      Jalankan kode git branch (nama branch yang akan dibuat) untuk membuat branch baru
      Jalankan kode git branch -a untuk menapilkan lokasi branch
      Jalankan kode git branch --list untuk menampilkan seluruh list branch
      Jalnakan kode *git branch -D * untuk menghapus brach
    </p>
    <img src="@/assets/images/section2.png" width="50%" alt="">
  </div>
</template>

<script>

export default {
  
  }

</script>
