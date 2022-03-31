# 16 Vue Quality Control

## Resume
1. Debugging
2. Unit Testing
3. Matriks Ukur Kinerja dan Mengoptimalkan Kinerja

### Debugging
Merupakan proses dalam pengidentifikasian dan penghilangan error dari software computer
a. Cara kerja debugging :
- Mengidentifikasi kesalahan
- Mengidentifikasi solusi
b. Tools Untuk Indentifkasi Error
- Devtools
- Consoles
- Logs
c. Tips identifikasi error
- Tenang dan fokus
- Rasional dan konstektual
- Fokus detail pada pentujuk sekecil apapun
- Tak tergesa-gesa untuk bertanya
d. Sumber Identifikasi Solusi
- Pengetahuan dan pengalaman diri sendiri
- Rekan kerja(leader/senior)
- Google(dokumentasi, stackoverflow, dll)
- Komunitas(forum,media sosial,dll)

### Unit Testing
Merupakan proses verifkasi terthadap tujuan dari pembuatan kode kita, dimana kode ini akan terus berfungsi sepanjang masa aplikasi
a. Cara kerja Unit Testing
- Meguji potongan kode secara individual dan terpencil dalam bentuk test insertion
- Test insertion ialah ekspreksi boolean yang return true value, kecuali terjai error pada kode
b. Tools Unit Testing
- Jest
Merupakan framework untuk unit testing pada aplikasi berbasis javascript
- Mocha

### Matriks Ukur Kinerja
Merupakan tolak ukur untuk menampilkan informasi kualitas kinerja aplikasi
a. Cara Kerja Matriks Ukur Kinerja
Memanfaatkan bantuan alat untuk melakukan serangkaian pengujian sebelum memberikan laporan detail serta skor terkait kualitas kinerja halaman
b. Lighthouse
Merupakan alat yang dapat membantu memberikan skor terkait matriks ukur kinerja aplikasi web
Bekerja pada browser, kemudian buka devtools pda tab lighthouse lalu generate report

### Mengoptimalkan Kinerja
Merupakan suatu proses dalam peningkatan kinerja aplikasi web sesuai informasi skor matriks ukur
a. Core Web Vitals
Merupakan kumpulan metrik web yang dibuat oleh Google yang ditetapkan sebagai indikator rangking pencarian terhadap page experience
Berikut ini tiga indikatornya :
- LCP(Largest Contentful Paint) terkait dengan kecepatan web
- FID(First Input Delay) terkait dengan kualitas respons elemen halaman web
- CLS(Cumulative Layout Shift) terkait stahbilitas layout halaman web
 


