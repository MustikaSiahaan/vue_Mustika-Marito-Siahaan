# Relational Database

## Resume

### Database
Merupakan sekumpulan data yang terorganisir.
Terdapat beberapa realtionship dalam database :
- One to one
Contoh : user dapat memiliki 1 profil
- One to many
Contoh : user bisa memiliki banyak tweets
- Many to many
Contoh : user memiliki banyak follower user, 1 user bisa di follow banyak user
Contoh lain : 1 mahasiswa bisa punya banyak mata kuliah, 1 mata kuliah dapat diambil banyak mahasiswa

Cara mengimplementasikan :
RDBMS(Relational Database Management Systems), software yang menggunakan RDBMS adalah MySQL

### Jenis Perintah SQL 
- DDL(Data defenition language)
- DML(Data Manipulation Language)
- DCL (Data Control Language)

#### DDL Statement
- CREATE databse
- USE database
- CREATE table , jika dengan skema : CREATE TABLE table_name(column1 data_type PRIMARY KEY, column2 data_type PRIMARY KEY) 
- DROP Table
- RENAME table
- Modify table : ALTER TABLE, ADD COLUMN

Tipe data MySQL : Num, Huruf, Date

#### DML
Perintah untuk memanipulasikan data dalam tabel dari suatu database
Statement Operation : INSERT, SELECT, UPDATE, DELETE
1. DML Statement :
- LIKE/BETWEEN : mengambil data spesifik
- AND/OR
- ORDER BY
- LIMIT

a. JOIN : mengkombinasikan record
- INNER JOIN : mengembalikan baris dari dau tabe atau lebih yang memenuhui syarat
- LEFT JOIN : mengembalikan seluruh baris dari tabel sebelah kiri jika dikenai kondisi ON dan hanya baris dari tabel di sebelah kanan yang memenuhi kondisi join
- RIGHT JOIN : kebalikan dari left join

b. UNION
Pemanggilan harus memerhatikan jumlah field yang dikeluarkan

c. Aggregate
Fungsi dimana nilai beberapa baris dikelompokkan untuk membuat nilai ringkasan tunggal
- MIN
- MAX
- SUM
- AVG
- COUNT
- HAVING : menyeleksi data berdasarkan kriteria tertentu

d. Subquery
Query di dalam query SQL lain, digunakan untuk mengembalikan data yang akan digunakan dalam query utama sebagai syarat membatasi data yang akan diambil
Subquery yang dapat digunakan dengan SELECT, INSERT, UPDATE, DELET bersama operator =, <,>,>=, <=

e. Function
Sebuah kumpulan statement yang akan mengembalikan nilai balik pada pemanggilnya









