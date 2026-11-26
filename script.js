const practicals = [
  { title: "Practical 1: Study of JFLAP Tool", file: "pdfs/practical-1.pdf" },
  { title: "Practical 2: Study of Other FLAT Tools", file: "pdfs/practical-2.pdf" },
  { title: "Practical 3: NFA Starting with 0", file: "pdfs/practical-3.pdf" },
  { title: "Practical 4: NFA Ending with b", file: "pdfs/practical-4.pdf" },
  { title: "Practical 5: DFA Containing 00", file: "pdfs/practical-5.pdf" },
  { title: "Practical 6: DFA Second Last Symbol a", file: "pdfs/practical-6.pdf" },
  { title: "Practical 7: PDA Even-Length Palindrome", file: "pdfs/practical-7.pdf" },
  { title: "Practical 8: PDA Odd-Length Palindrome", file: "pdfs/practical-8.pdf" },
  { title: "Practical 9: CFG in JFLAP", file: "pdfs/practical-9.pdf" },
  { title: "Practical 10: Turing Machine Concatenation", file: "pdfs/practical-10.pdf" }
];

const pdfList = document.getElementById("pdf-list");
const currentTitle = document.getElementById("current-title");
const pdfFrame = document.getElementById("pdf-frame");
const openBtn = document.getElementById("open-btn");
const downloadBtn = document.getElementById("download-btn");

function loadPractical(item, activeButton) {
  currentTitle.textContent = item.title;
  pdfFrame.src = item.file;
  openBtn.href = item.file;
  downloadBtn.href = item.file;

  document.querySelectorAll(".pdf-item-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  if (activeButton) {
    activeButton.classList.add("active");
  }
}

practicals.forEach((item, index) => {
  const li = document.createElement("li");
  const button = document.createElement("button");
  button.type = "button";
  button.className = "pdf-item-btn";
  button.textContent = item.title;

  button.addEventListener("click", () => loadPractical(item, button));
  li.appendChild(button);
  pdfList.appendChild(li);

  if (index === 0) {
    loadPractical(item, button);
  }
});
