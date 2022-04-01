import { penjumlahan } from '@/utils/index.js';
import { pengurangan } from '@/utils/index.js';
import { pembagian } from '../../src/utils';
import { perkalian} from '../../src/utils';

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

