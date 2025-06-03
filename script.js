// Data soal kuis
const quizData = [
    { question: "Apa ibu kota Indonesia?", options: ["Bandung", "Jakarta", "Surabaya", "Medan"], answer: "Jakarta" },
  { question: "Gunung tertinggi di Indonesia adalah...", options: ["Gunung Merapi", "Gunung semeru", "Gunung Rinjani", "Puncak Jaya"], answer: "Puncak Jaya" },
  { question: "Siapa presiden pertama Indonesia?", options: ["Soekarno", "Soeharto", "Habibie", "Jokowi"], answer: "Soekarno" },
  { question: "Apa lambang negara Indonesia?", options: ["Garuda", "Harimau", "Elang", "Rajawali"], answer: "Garuda" },
  { question: "Bahasa resmi Indonesia adalah?", options: ["Sunda", "Jawa", "Indonesia", "Minang"], answer: "Indonesia" },
  { question: "Apa warna bendera Indonesia?", options: ["Merah Putih", "Merah Kuning", "Putih Hijau", "Merah Hijau"], answer: "Merah Putih" },
  { question: "Pulau terbesar di Indonesia adalah?", options: ["Bali", "Sumatera", "Kalimantan", "Sulawesi"], answer: "Kalimantan" },
  { question: "Planet terbesar di tata surya?", options: ["Bumi", "Jupiter", "Mars", "Venus"], answer: "Jupiter" },
  { question: "Siapa penemu lampu pijar?", options: ["Newton", "Einstein", "Edison", "Tesla"], answer: "Edison" },
  { question: "Apa simbol kimia dari air?", options: ["O2", "CO2", "H2O", "HO2"], answer: "H2O" }
  ];
  
  // Ambil elemen dari HTML
  const quizContainer = document.getElementById("quiz");
  const resultContainer = document.getElementById("result");
  const submitButton = document.getElementById("submit");
  
  // Fungsi untuk menampilkan soal ke halaman
  function loadQuiz() {
    quizContainer.innerHTML = "";
    quizData.forEach((item, index) => {
      const questionEl = document.createElement("div");
      questionEl.classList.add("question"); // <-- Styling penting ditambahkan di sini
      questionEl.innerHTML = `<p><strong>${index + 1}. ${item.question}</strong></p>`;
  
      item.options.forEach(option => {
        const optionId = `q${index}-${option}`;
        questionEl.innerHTML += `
          <label>
            <input type="radio" name="q${index}" value="${option}" id="${optionId}"> ${option}
          </label><br/>
        `;
      });
  
      quizContainer.appendChild(questionEl);
    });
  }
  
  // Fungsi untuk menghitung skor dan menampilkan hasil
  function getResults() {
    let score = 0;
    quizData.forEach((item, index) => {
      const selected = document.querySelector(`input[name="q${index}"]:checked`);
      if (selected && selected.value === item.answer) {
        score++;
      }
    });
  
    const nilai = (score / quizData.length) * 100;
    resultContainer.innerHTML = `
      <p>Kamu menjawab benar ${score} dari ${quizData.length} soal.</p>
      <p>Skor kamu: <strong>${nilai}</strong></p>
    `;
  }
  
  // Event saat tombol submit diklik
  submitButton.addEventListener("click", getResults);
  
  // Tampilkan kuis saat halaman dimuat
  loadQuiz();

  // Ambil elemen modal dan tombol terkait
const resultModal = document.getElementById("resultModal");
const modalScore = document.getElementById("modalScore");
const closeModal = document.getElementById("closeModal");
const backButton = document.getElementById("backButton");

// Fungsi untuk tampilkan hasil di modal
function showModal(scoreText) {
  modalScore.innerHTML = scoreText;
  resultModal.style.display = "block";
}

// Fungsi untuk sembunyikan modal
function hideModal() {
  resultModal.style.display = "none";
}

// Modifikasi fungsi getResults untuk memunculkan modal
function getResults() {
  let score = 0;
  quizData.forEach((item, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && selected.value === item.answer) {
      score++;
    }
  });

  const nilai = (score / quizData.length) * 100;
  const resultText = `Kamu menjawab benar ${score} dari ${quizData.length} soal.<br>Skor kamu: <strong>${nilai}</strong>`;

  // Tampilkan modal dengan hasil
  showModal(resultText);
}

// Event listener tombol "Kirim Jawaban"
submitButton.addEventListener("click", getResults);

// Event tombol close modal (X)
closeModal.addEventListener("click", hideModal);

// Event tombol "Kembali" di modal
backButton.addEventListener("click", hideModal);

// Klik di luar modal konten juga akan tutup modal
window.addEventListener("click", function(event) {
  if (event.target === resultModal) {
    hideModal();
  }
});

  
