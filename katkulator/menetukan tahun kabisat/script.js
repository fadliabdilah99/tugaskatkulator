const menentukanKabisat = tahun => {
    if (tahun % 4 === 0 && tahun % 100 !== 0) {
        return 'merupakan tahun kabisat';
    } else if (tahun % 400 === 0) {
        return 'merupakan tahun kabisat';
    } else {
        return 'bukan tahun kabisat';
    }
};

const displayResult = () => {
    const inputTahun = parseInt(document.getElementById('tahunInput').value);
    const result = menentukanKabisat(inputTahun);
    document.getElementById('output').textContent = result;
};