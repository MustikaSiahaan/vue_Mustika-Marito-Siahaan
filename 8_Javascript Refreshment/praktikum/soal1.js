var a = 5;
let b = "kampus merdeka";
const nama = "Budi";
let terdaftar = false;
let lengkap_arr = [a, b, nama, terdaftar];

function perkenalan() {
    let asal = "indonesia";
    return console.log(
        "perkenalkan nama saya " +
        nama +
        " nomor urut " +
        a +
        " sekarang sedang mengikuti " +
        b + 
        " berasal dari " +
        asal
    );      
}

if (terdaftar === false){//b.
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}
 console.log("array = " + lengkap_arr[2]);//a. 

 a = b;
 
 console.log("a adalah = " + b);
 console.log("b adalah = " + b);
 perkenalan(); //c.