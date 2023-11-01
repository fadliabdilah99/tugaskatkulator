const konversi = () => {
    const c = Number(document.getElementById('input').value);
    const remur = c * 4 / 5;
    const kelvin = c + 273;
    const farenheit = (9 / 5) * c + 32;

    const result = `Remur: ${remur}<br>Kelvin: ${kelvin}<br>Farenheit: ${farenheit}`;

   document.getElementById('output').innerHTML = result;}