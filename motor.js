function calculoMotor(typePayroll, day, Gender) {
  let tipoNomina = typePayroll;
  let fechaPrimerEmpleo = day;
  let genero = Gender;
  let today = new Date();
  let meses = calcularDiferenciaMeses(new Date(fechaPrimerEmpleo), today);

  console.log(tipoNomina, fechaPrimerEmpleo, genero, meses);

  // optimalLineOfCredit = max(p1, p2)

  // p1 = montoMinimo + / montoMaximo - montoMinimo
  // p2 = montominimo + 0.0175 * (montoMaximo - montoMinimo)
}

function calcularDiferenciaMeses(fecha1, fecha2) {
  if (!(fecha1 instanceof Date) || !(fecha2 instanceof Date)) {
    throw TypeError("Ambos argumentos deben ser objetos de tipo fecha (Date).");
  }

  let meses = (fecha2.getFullYear() - fecha1.getFullYear()) * 12;
  meses -= fecha1.getMonth();
  meses += fecha2.getMonth();

  return meses - 1;
}
