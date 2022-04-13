import { penjumlahan } from '@/utils/index.js';
import { pengurangan } from '@/utils/index.js';
import { luasKubus, luasLingkaran, luasPersegi, pembagian, sisaBagi } from '../../src/utils';
import { perkalian } from '../../src/utils';
import { rataRata } from '../../src/utils';

describe("Melakukan operasi penjumlahan", () => {
  it("Lakukan penjumlahan bilangan positif", () => {
    expect(penjumlahan(1, 7)).toBe(8);
  });
  it("Penjumlahan bilangan positif dan negatif", () => {
    expect(penjumlahan(1, -7)).toBe(-6);
  });
  it("Penjumlahan bilangan non numerik", () => {
    expect(penjumlahan("1", "8")).toBe("18");
  });
});

describe("Melakukan operasi pengurangan", () => {
  it("Lakukan pengurangan bilangan positif", () => {
    expect(pengurangan(3, 2)).toBe(1);
  });
  it("Pengurangan bilangan negatif", () => {
    expect(penjumlahan(-1, -7)).toBe(-8);
  });
  it("Pengurangan bilangan positif dan negatif", () => {
    expect(pengurangan(1, -7)).toBe(8);
  });
});

describe("Melakukan operasi pembagian", () => {
  it("Lakukan pembagian bilangan positif", () => {
    expect(pembagian(6, 2)).toBe(3);
  });
  it("Pembagian bilangan negatif", () => {
    expect(pembagian(-4, -2)).toBe(2);
  });
  it("Pembagian bilangan positif dan negatif", () => {
    expect(pembagian(-49, 7)).toBe(-7);
  });
});

describe("Melakukan operasi perkalian", () => {
  it("Lakukan perkalian bilangan positif", () => {
    expect(perkalian(4, 3)).toBe(12);
  });
  it("Perkalian bilangan negatif", () => {
    expect(perkalian(-4, -2)).toBe(8);
  });
  it("Perkalian bilangan positif dan negatif", () => {
    expect(perkalian(8, -7)).toBe(-56);
  });
});

describe("Melakukan operasi menghitung rata - rata", () => {
  it("Lakukan penghitungan rata - rata bilangan positif", () => {
    expect(rataRata(1, 2, 3, 4, 5)).toBe(3);
  });
  it("Penghitungan rata - rata bilangan negatif", () => {
    expect(rataRata(-1, -2, -3, -4, -5)).toBe(-3);
  });
  it("Penghitungan rata - rata bilangan positif dan negatif", () => {
    expect(rataRata(40, 5, -5, 10, -15)).toBe(7);
  });
});

describe("Melakukan operasi menghitung sisa bagi", () => {
  it("Lakukan penghitungan sisa bagi bilangan positif", () => {
    expect(sisaBagi(8, 3)).toBe(2);
  });
  it("Penghitungan sisa bagi bilangan negatif", () => {
    expect(sisaBagi(-8, -3)).toBe(-2);
  });
  it("Penghitungan sisa bagi bilangan positif dan negatif", () => {
    expect(sisaBagi(-8, 3)).toBe(-2);
  });
});

describe("Melakukan operasi menghitung luas persegi", () => {
  it("Lakukan penghitungan sisa bagi bilangan positif", () => {
    expect(luasPersegi(5, 5)).toBe(25);
  });
  it("Penghitungan luas persegi bilangan negatif", () => {
    expect(luasPersegi(-7, -7)).toBe(49);
  });
  it("Penghitungan luas persegi bilangan positif dan negatif", () => {
    expect(luasPersegi(-8, 8)).toBe(-64);
  });
});

describe("Melakukan operasi menghitung luas lingkaran", () => {
  it("Lakukan penghitungan luas lingkaran bilangan positif", () => {
    expect(luasLingkaran(5, 5)).toBe(78.5);
  });
  it("Penghitungan luas lingkaran bilangan negatif", () => {
    expect(luasLingkaran(-7, -7)).toBe(153.86);
  });
  it("Penghitungan luas lingkaran bilangan positif dan negatif", () => {
    expect(luasLingkaran(-9, 9)).toBe(-254.34);
  });
});

describe("Melakukan operasi menghitung luas kubus", () => {
  it("Lakukan penghitungan luas kubus bilangan positif", () => {
    expect(luasKubus(2, 2)).toBe(24);
  });
  it("Penghitungan luas kubus bilangan negatif", () => {
    expect(luasKubus(-3, -3)).toBe(54);
  });
  it("Penghitungan luas kubus bilangan positif dan negatif", () => {
    expect(luasKubus(4, -4)).toBe(-96);
  });
});

describe("Melakukan operasi menghitung volume kubus", () => {
  it("Lakukan penghitungan volume kubus bilangan positif", () => {
    expect(luasKubus(2, 2, 2)).toBe(8);
  });
  it("Penghitungan volume kubus bilangan negatif", () => {
    expect(luasKubus(-3, -3, -3)).toBe(-27);
  });
  it("Penghitungan volume kubus bilangan positif dan negatif", () => {
    expect(luasKubus(4, -4, 4)).toBe(-64);
  });
});

