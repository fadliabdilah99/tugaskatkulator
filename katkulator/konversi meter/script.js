
// konversi meter
const form = document.getElementById('konversiForm');
const hasilKonversi = document.getElementById('hasilKonversi');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah halaman refresh saat submit

    const panjangM = parseFloat(document.getElementById('panjangM').value);

    const inci = panjangM * 39.370;
    const kaki = panjangM * 3.28;
    const yard = panjangM * 1.091;

    hasilKonversi.innerHTML = `Inci: ${inci.toFixed(2)}<br>
        Kaki: ${kaki.toFixed(2)}<br>
        Yard: ${yard.toFixed(2)}`;
});
// konversi meter end