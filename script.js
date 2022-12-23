function kalkulator(bil_1, bil_2, operator) {
  let hasil;
  switch (operator) {
    case "+":
      hasil = Number(bil_1) + Number(bil_2);
      break;
    case "-":
      hasil = Number(bil_1) - Number(bil_2);
      break;
    case "*":
      hasil = Number(bil_1) * Number(bil_2);
      break;
    case "/":
      hasil = Number(bil_1) / Number(bil_2);
      break;
  }

  document.getElementById("hasil").innerHTML = hasil;
}
