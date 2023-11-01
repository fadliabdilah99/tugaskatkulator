const calculateAge = () => {
  const day = document.getElementById("day").value;
  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value;

  const birthDate = new Date(year, month - 1, day);
  const today = new Date();

  if (birthDate > today) {
      document.getElementById("result").innerHTML = "Tanggal lahir tidak valid!";
      return;
  }

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }

  document.getElementById("result").innerHTML = `Umur Anda adalah: ${age} tahun.`;
}