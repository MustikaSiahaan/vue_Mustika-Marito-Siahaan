class Kendaraan{
    var totalroda = 0;
    var kecepatanperjam = 0;
}

class Mobil extends Kendaraan{
    void berjalan(){
        tambahKecepatan(10);
    }

    tambahKecepatan(var kecepatanbaru){
        kecepatanperjam = kecepatanperjam + kecepatanbaru;
    }
}

void main(){
    mobilcepat = new mobil();
    mobilcepat.berjalan();
    mobilcepat.berjalan();
    mobilcepat.berjalan();

    mobillamban = new mobil();
    mobillamban.berjalan();

}


//Code modifikasi yang bisa di run
/*class kendaraan {
    totalroda = 0;
    kecepatanperjam = 0;
}

class mobil extends kendaraan {
    berjalan() {
        tambahkecepatan(10,10);
    }

    tambahkecepatan(kecepatanbaru,kecepatanperjam) {
        console.log(kecepatanperjam + kecepatanbaru);
    }
}

const spot  = new mobil();
spot.tambahkecepatan(10,10);*/
