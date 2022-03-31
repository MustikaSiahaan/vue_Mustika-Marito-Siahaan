import { penjumlahan } from '@/utils';


describe("Melakukan penjumlahan", () => {
  test('Penjumlahan dua bilangan positif', () => {
    expect(penjumlahan(2, 4)).toBe(6);
  })
})
