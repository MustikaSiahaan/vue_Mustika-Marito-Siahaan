# Vue With Nuxt
HTML merupaka framework yang dibangung dalam Vue sehingga pengembangan web menjadi sederhana dan efektif

1. Cara Kerja Nuxt :
- Menginisiasi aplikasi dengan menjalankan 
npx create-nuxt-app <nama-proyek> atau npx create-nuxt-app
- Menjalankan aplikasi dengan scrip pada package.json seperti npm run dev

2. Struktur Direktori Nuxt
Terdapat tambahan folder pages, static, dan layouts
Dan terdapat pengurangan folder seperti src, public, views,dan router
- Pages
router pada next otomatis membaca direktori pages sehingga file yang ada di direktori langsung terhubung menjadi path halaman
- Layouts : membuat tata letak khusus yang dapat diakses dengan propert layout di komponen halaman
- Static : semua file yang ada diexpose oleh Nuxt secara otomatis melalui URL root proyek

3. Nuxt SSG & SSR
a. SSG (static site generation) metode pengembangan lebih cocok untuk web dengan halaman dinamis
- Cara kerja SSG : saat proyek dibangun, file html siap pakai terbentuk di folder dist lalu dihubungkan dengan
server yang bisa diakses masing - masing per file HTML
- Impelementasi SSG : npm run generate yang menghasilkan direktori /dist lalu bisa di deploy ke static hosting
b. SSR (server side rendering) metode pengembangan ini cocok pada proyek dimana halaman dibuat secara real time seperti melalui panel admin, contohnya halaman blog dan e-commerce
- Implementasi SSR : npm run build yang menghasilkan direktori /.nuxt lalu bisa dideploy ke NodeJS server

4. SEO (Search Engine Optimization)
Merupakan proses peningkatan kualitas dan kuantitas jalur lintas antar situs web
SEO Meta ialah tag tak terlihat pada <head> yang menyediakan data tentang halaman ke mesin pencari dan pengungjung web
- Cara kerja SEO Meta : diterapka melalui nuxt config untuk pengaturan global, dimana
konten head akan sama di setiap halaman aplikasi
b. SEO Meta Tag Penting
- Informasi dasar : title dan description
- Identitas unuk dengan link canonical
- Informasi untuk media sosial, open graph:, og:title, og:description, og:image
b. SEO di dalam body
- Judul: h1
- Text alternatif untuk gambar: alt
c. SEO Lainnya
- Peta indexing ; sitemap
- Pengarah crawler; robots.txt

5. PWA(Progress Web Apps)
Dibentuk dan disempurnakan dengan API modern sehingga mengalami pengikatan kemampuan, keadaan serta kemudahan pemasangan seklaigus siapapun, dimanapun, pada perangkat apapun dengan basis kode tunggal
Cara kerja PWA :
- Web App Manifest
- Service workers
- Disajikan dengan protokol HTTPS
