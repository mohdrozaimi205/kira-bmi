// Trigger kiraBMI bila tekan Enter
document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    kiraBMI();
  }
});

function kiraBMI() {
  const tinggi = parseFloat(document.getElementById("tinggi").value);
  const berat = parseFloat(document.getElementById("berat").value);
  const output = document.getElementById("output");
  const cadangan = document.getElementById("cadangan");

  if (!tinggi || !berat) {
    output.innerHTML = "⚠️ Sila isi tinggi dan berat dengan betul.";
    cadangan.innerHTML = "";
    return;
  }

  const bmi = berat / ((tinggi / 100) ** 2);
  let status = "";
  let saranan = "";

  if (bmi < 18.5) {
    status = "Kurus";
    saranan = `💪 Fokus bina otot:<br>- Squat 15x<br>- Push-up lutut 10x<br>- Plank 30s<br>- 2–3 pusingan`;
  } else if (bmi < 25) {
    status = "Normal";
    saranan = `🏃 Maintain aktif:<br>- Jumping Jack 30x<br>- Push-up 15x<br>- High Knees 30s<br>- 2–4 pusingan`;
  } else if (bmi < 30) {
    status = "Berlebihan";
    saranan = `🔥 Bakar lemak:<br>- March in Place 30s<br>- Wall Sit 30s<br>- Step-up 15x<br>- 2–3 pusingan`;
  } else {
    status = "Obes";
    saranan = `🧘 Impak rendah:<br>- Duduk & Bangun 10x<br>- Wall Push-up 10x<br>- Tap March 30s<br>- 1–2 pusingan`;
  }

  const minIdeal = (18.5 * ((tinggi / 100) ** 2)).toFixed(1);
  const maxIdeal = (24.9 * ((tinggi / 100) ** 2)).toFixed(1);

  output.innerHTML = `BMI anda: <strong>${bmi.toFixed(1)}</strong><br>Status: <strong>${status}</strong><br>Berat ideal: ${minIdeal}–${maxIdeal} kg`;
  cadangan.innerHTML = `<strong>Cadangan Senaman:</strong><br>${saranan}`;
}

function resetForm() {
  document.getElementById("tinggi").value = "";
  document.getElementById("berat").value = "";
  document.getElementById("output").innerHTML = "";
  document.getElementById("cadangan").innerHTML = "";
}
