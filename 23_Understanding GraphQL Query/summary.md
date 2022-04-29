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

### Query with Apollo Client
Komponen Apollo query dapat digunakan dengan melihat langsung di template. Di dalam slot default ApolloQuery, Anda dapat mengakses berbagai data slot tentang kueri yang ditonton
Fungsi diteruskan ke prop, kueri yang mendapatkan tag gql sebagai argumen, sehingga dapat menulis dokumen GraphQL secara langsung

