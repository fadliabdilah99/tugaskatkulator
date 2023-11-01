const lembur = 3000;

      function calculateSalary() {
        const golongan = document.getElementById('golongan').value;
        const totalJamKerja = parseInt(document.getElementById('totalJamKerja').value);
        const lemburValidation = document.querySelector('input[name="lemburValidation"]:checked').value;

        let totalGaji = 0;
        let gaji = 0;

        if (golongan === 'a') {
          gaji = 4000;
        } else if (golongan === 'b') {
          gaji = 5000;
        } else if (golongan === 'c') {
          gaji = 6000;
        } else if (golongan === 'd') {
          gaji = 7000;
        }

        totalGaji = gaji * totalJamKerja;

        if (lemburValidation === 'ya') {
          const jamLembur = parseInt(document.getElementById('jamLembur').value);
          totalGaji += jamLembur * lembur;
        }

        document.getElementById('result').innerHTML = 'Total Gaji: ' + totalGaji;
      }


      function showHideLemburInput(show) {
        var jamLemburContainer = document.getElementById("jamLemburContainer");
        jamLemburContainer.style.display = show ? "block" : "none";
      }