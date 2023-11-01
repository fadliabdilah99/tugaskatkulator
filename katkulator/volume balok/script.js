const menghitung = (event) => {
    event.preventDefault(); // Mencegah refresh halaman saat submit form
  
    const panjang = Number(document.getElementById("panjang").value);
    const lebar = Number(document.getElementById("lebar").value);
    const tinggi = Number(document.getElementById("tinggi").value);
  
    const hasil = panjang * lebar * tinggi;
    document.getElementById("output").innerText = `Hasil perhitungan: ${hasil}`;
  
    document.getElementById("inputForm").reset(); // Mengosongkan input setelah perhitungan
  };
  
  document.getElementById("inputForm").addEventListener("submit", menghitung);  