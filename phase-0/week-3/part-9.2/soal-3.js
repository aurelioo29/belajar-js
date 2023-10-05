function cariMedian(arr) {
  arr.sort;

  const panjangArr = arr.length;

  // Periksa jika jumlah elemen dalam array adalah ganjil
  if (panjangArr % 2 === 1) {
    const medianIndex = Math.floor(panjangArr / 2);
    return arr[medianIndex];
  } else {
    // Jika jumlah elemen dalam array adalah genap, ambil rata-rata dari dua nilai tengah
    const middleIndex1 = panjangArr / 2 - 1;
    const middleIndex2 = panjangArr / 2;
    const median = (arr[middleIndex1] + arr[middleIndex2]) / 2;
    return median;
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
