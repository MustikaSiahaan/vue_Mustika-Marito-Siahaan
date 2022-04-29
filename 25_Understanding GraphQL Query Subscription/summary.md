# Understanding GraphQL Query

## Resume

### Hasura dan Heroku
Hasura merupakan service yang menyediakan graphql dan rest api. Hasura dikelola pada cloud atau hosting pribadi
Heroku adalah platform cloud sebagai layanan yang mendukung beberapa bahasa pemrograman. Heroku juga menyediakan database postgres gratis

#### Setting Hasura dan Heroku
- Membuat projek baru, menjalankan console dan menyetting database server
- Membuat heroku database dan mengkonfigurasinya
- Membuka tab API, menggunakan endpoint and header x-hasura-admin-secret as header
- Membuat hasura public API dengan membuka Env vars, click HASURA_GRAPHQL_ADMIN_SECRET lalu click delete icon
- Query and mutation, membuka tab API tulislah query atau klik pada explorer kemudian execute. Buatlah mutation query untuk menambahkan data baru atau update data

### Apollo
Apollo Client adalah library manajemen status komprehensif untuk JavaScript yang memungkinkan kami mengelola data lokal dan jarak jauh dengan GraphQL. Apollo dibutuhkan untuk mengambil, menyimpan, dan memodifikasi data aplikasi, sambil memperbarui UI secara otomatis.

#### Apollo Client Vue Setup - Installation
- Membuat projek vue dengna npm install --sabe vue-apollo graphql apollo-boost
- Set up pada main.js file
- Buatlah apollo client
- Settin apollo provider pada main.js import ApolloProvider

#### Query with Apollo Client
Komponen Apollo query dapat digunakan dengan melihat langsung di template. Di dalam slot default ApolloQuery, Anda dapat mengakses berbagai data slot tentang kueri yang ditonton
Fungsi diteruskan ke prop, kueri yang mendapatkan tag gql sebagai argumen, sehingga dapat menulis dokumen GraphQL secara langsung

### Mutation
- Komponen ApolloMutation (atau apollo-mutation) dapat digunakan untuk memanggil mutasi Apollo langsung di template 
- Apollo Client harus diinstruksikan untuk cara memperbarui cache dengan hasil mutasi. Misalnya, jika mutasi menambahkan item baru, Anda harus memperbarui hasil kueri yang relevan untuk secara efektif mendorong item baru ini ke kueri.

### Subscription
- Untuk mengaktifkan subscription berbasis websocket, diperlukan tambahan:
npm install --save apollo-link-ws apollo-utilities
- Impor semua modul yang diperlukan dan pisahkan antara http dan tautan websocket
- Dengan komponen ApolloSubscribeToMore (atau apollo-subscribe-to-more) untuk subscribe lebih banyak data. Data dapat dimasukkan sebanyak mungkin ke dalam komponen <ApolloQuery>.
