// Data soal kuis
const quizData = [
    {
      question: "Apa ibu kota Indonesia?",
      options: ["Jakarta", "Bandung", "Surabaya", "Medan"],
      answer: "Jakarta"
    },
    {
      question: "Siapa presiden pertama Indonesia?",
      options: ["Soekarno", "Soeharto", "BJ Habibie", "Megawati"],
      answer: "Soekarno"
    },
    {
      question: "Apa hasil dari 5 + 7?",
      options: ["10", "11", "12", "13"],
      answer: "12"
    },
    {
      question: "Benua terbesar di dunia adalah?",
      options: ["Asia", "Afrika", "Amerika", "Eropa"],
      answer: "Asia"
    },
    {
      question: "Apa simbol kimia dari air?",
      options: ["O2", "H2", "H2O", "CO2"],
      answer: "H2O"
    },
    {
      question: "Siapa penemu bola lampu?",
      options: ["Albert Einstein", "Isaac Newton", "Thomas Edison", "Nikola Tesla"],
      answer: "Thomas Edison"
    },
    {
      question: "Negara dengan populasi terbanyak adalah?",
      options: ["India", "Cina", "AS", "Indonesia"],
      answer: "Cina"
    },
    {
      question: "Apa nama planet ketiga dari Matahari?",
      options: ["Mars", "Venus", "Bumi", "Merkurius"],
      answer: "Bumi"
    },
    {
      question: "Berapa sisi yang dimiliki segi lima?",
      options: ["3", "4", "5", "6"],
      answer: "5"
    },
    {
      question: "Apa warna bendera Jepang?",
      options: ["Merah-Putih", "Merah-Kuning", "Putih-Merah", "Putih dengan lingkaran merah"],
      answer: "Putih dengan lingkaran merah"
    }
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

  