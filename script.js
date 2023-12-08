function detectChar() {
  const input = document.getElementById("inputType").value;

  if (input) {
    const unicodeValue = input.charCodeAt(0);
    const result = `O unicode de "${input}" é: ${unicodeValue}`;
    document.getElementById("result").textContent = result;
  } else {
    document.getElementById("result").textContent =
      "Por favor, digite um caractere";
  }
}
