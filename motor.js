function calculoMotor(typePayroll, day, gender) {
  let tipoNomina = typePayroll;
  let fechaPrimerEmpleo = day;
  let genero = gender;
  let today = new Date();
  let diffmeses = calcularDiferenciaMeses(new Date(fechaPrimerEmpleo), today);
  console.log(tipoNomina, fechaPrimerEmpleo, genero, diffmeses);
  let montoMinimoCreditoMasculino = 0;
  let montoMaximoCreditoMasculino = 0;
  let montoMinimoCreditoFemenino = 0;
  let montoMaximoCreditoFemenino = 0;
  let optimalLineOfCredit = 0;

  if (gender == "M") {
    if (typePayroll === "A" && gender === "M") {
      diffmeses <= 26
        ? (this.montoMinimoCreditoMasculino = 100)
        : diffmeses == 27
        ? (this.montoMinimoCreditoMasculino = 400)
        : diffmeses == 28
        ? (this.montoMinimoCreditoMasculino = 900)
        : diffmeses == 29
        ? (this.montoMinimoCreditoMasculino = 100)
        : diffmeses >= 30
        ? (this.montoMinimoCreditoMasculino = 600)
        : console.error("Error");
    }
    if (typePayroll === "B" && gender === "M") {
      diffmeses <= 26
        ? (this.montoMinimoCreditoMasculino = 1000)
        : diffmeses == 27
        ? (this.montoMinimoCreditoMasculino = 600)
        : diffmeses == 28
        ? (this.montoMinimoCreditoMasculino = 1000)
        : diffmeses == 29
        ? (this.montoMinimoCreditoMasculino = 1000)
        : diffmeses >= 30
        ? (this.montoMinimoCreditoMasculino = 1000)
        : console.error("Error");
    }
    if (typePayroll === "C" && gender === "M") {
      diffmeses <= 26
        ? (this.montoMinimoCreditoMasculino = 400)
        : diffmeses == 27
        ? (this.montoMinimoCreditoMasculino = 200)
        : diffmeses == 28
        ? (this.montoMinimoCreditoMasculino = 200)
        : diffmeses == 29
        ? (this.montoMinimoCreditoMasculino = 1000)
        : diffmeses >= 30
        ? (this.montoMinimoCreditoMasculino = 600)
        : console.error("Error");
    }
    if (typePayroll === "D" && gender === "M") {
      diffmeses <= 26
        ? (this.montoMinimoCreditoMasculino = 400)
        : diffmeses == 27
        ? (this.montoMinimoCreditoMasculino = 300)
        : diffmeses == 28
        ? (this.montoMinimoCreditoMasculino = 500)
        : diffmeses == 29
        ? (this.montoMinimoCreditoMasculino = 900)
        : diffmeses >= 30
        ? (this.montoMinimoCreditoMasculino = 1000)
        : console.error("Error");
    }
    console.log(
      "montoMinimoCreditoMasculino: ",
      this.montoMinimoCreditoMasculino
    );

    if (typePayroll === "A" && gender === "M") {
      diffmeses <= 26
        ? (this.montoMaximoCreditoMasculino = 4900)
        : diffmeses == 27
        ? (this.montoMaximoCreditoMasculino = 4700)
        : diffmeses == 28
        ? (this.montoMaximoCreditoMasculino = 4600)
        : diffmeses == 29
        ? (this.montoMaximoCreditoMasculino = 4600)
        : diffmeses >= 30
        ? (this.montoMaximoCreditoMasculino = 4500)
        : console.error("Error");
    }
    if (typePayroll === "B" && gender === "M") {
      diffmeses <= 26
        ? (this.montoMaximoCreditoMasculino = 4700)
        : diffmeses == 27
        ? (this.montoMaximoCreditoMasculino = 4400)
        : diffmeses == 28
        ? (this.montoMaximoCreditoMasculino = 5000)
        : diffmeses == 29
        ? (this.montoMaximoCreditoMasculino = 4400)
        : diffmeses >= 30
        ? (this.montoMaximoCreditoMasculino = 4900)
        : console.error("Error");
    }
    if (typePayroll === "C" && gender === "M") {
      diffmeses <= 26
        ? (this.montoMaximoCreditoMasculino = 5000)
        : diffmeses == 27
        ? (this.montoMaximoCreditoMasculino = 4700)
        : diffmeses == 28
        ? (this.montoMaximoCreditoMasculino = 5000)
        : diffmeses == 29
        ? (this.montoMaximoCreditoMasculino = 4200)
        : diffmeses >= 30
        ? (this.montoMaximoCreditoMasculino = 4600)
        : console.error("Error");
    }
    if (typePayroll === "D" && gender === "M") {
      diffmeses <= 26
        ? (this.montoMaximoCreditoMasculino = 4400)
        : diffmeses == 27
        ? (this.montoMaximoCreditoMasculino = 4700)
        : diffmeses == 28
        ? (this.montoMaximoCreditoMasculino = 4300)
        : diffmeses == 29
        ? (this.montoMaximoCreditoMasculino = 4900)
        : diffmeses >= 30
        ? (this.montoMaximoCreditoMasculino = 4300)
        : console.error("Error");
    }
    console.log(
      "montoMaximoCreditoMasculino: ",
      this.montoMaximoCreditoMasculino
    );

    let p1Masculino =
      this.montoMinimoCreditoMasculino +
      Math.sqrt(
        this.montoMaximoCreditoMasculino - this.montoMinimoCreditoMasculino
      );
    let p2Masculino =
      this.montoMinimoCreditoMasculino +
      0.0175 * this.montoMaximoCreditoMasculino -
      this.montoMinimoCreditoMasculino;

    console.log("result", p1Masculino);
    console.log("result", p2Masculino);
    console.log(Math.max(p1Masculino, p2Masculino));
  } else {
    if (typePayroll === "A" && gender === "F") {
      diffmeses <= 24
        ? (this.montoMinimoCreditoFemenino = 800)
        : diffmeses == 25
        ? (this.montoMinimoCreditoFemenino = 800)
        : diffmeses == 26
        ? (this.montoMinimoCreditoFemenino = 800)
        : diffmeses == 27
        ? (this.montoMinimoCreditoFemenino = 600)
        : diffmeses >= 28
        ? (this.montoMinimoCreditoFemenino = 200)
        : console.error("Error");
    }
    if (typePayroll === "B" && gender === "F") {
      diffmeses <= 24
        ? (this.montoMinimoCreditoFemenino = 800)
        : diffmeses == 25
        ? (this.montoMinimoCreditoFemenino = 700)
        : diffmeses == 26
        ? (this.montoMinimoCreditoFemenino = 100)
        : diffmeses == 27
        ? (this.montoMinimoCreditoFemenino = 600)
        : diffmeses >= 28
        ? (this.montoMinimoCreditoFemenino = 700)
        : console.error("Error");
    }
    if (typePayroll === "C" && gender === "F") {
      diffmeses <= 24
        ? (this.montoMinimoCreditoFemenino = 200)
        : diffmeses == 25
        ? (this.montoMinimoCreditoFemenino = 900)
        : diffmeses == 26
        ? (this.montoMinimoCreditoFemenino = 700)
        : diffmeses == 27
        ? (this.montoMinimoCreditoFemenino = 800)
        : diffmeses >= 28
        ? (this.montoMinimoCreditoFemenino = 100)
        : console.error("Error");
    }
    if (typePayroll === "D" && gender === "F") {
      diffmeses <= 24
        ? (this.montoMinimoCreditoFemenino = 500)
        : diffmeses == 25
        ? (this.montoMinimoCreditoFemenino = 1000)
        : diffmeses == 26
        ? (this.montoMinimoCreditoFemenino = 600)
        : diffmeses == 27
        ? (this.montoMinimoCreditoFemenino = 400)
        : diffmeses >= 28
        ? (this.montoMinimoCreditoFemenino = 700)
        : console.error("Error");
    }
    console.log(
      "montoMinimoCreditoFemenino: ",
      this.montoMinimoCreditoFemenino
    );

    if (typePayroll === "A" && gender === "F") {
      diffmeses <= 24
        ? (this.montoMaximoCreditoFemenino = 4000)
        : diffmeses == 25
        ? (this.montoMaximoCreditoFemenino = 4200)
        : diffmeses == 26
        ? (this.montoMaximoCreditoFemenino = 4100)
        : diffmeses == 27
        ? (this.montoMaximoCreditoFemenino = 4200)
        : diffmeses >= 28
        ? (this.montoMaximoCreditoFemenino = 4500)
        : console.error("Error");
    }
    if (typePayroll === "B" && gender === "F") {
      diffmeses <= 24
        ? (this.montoMaximoCreditoFemenino = 4700)
        : diffmeses == 25
        ? (this.montoMaximoCreditoFemenino = 4200)
        : diffmeses == 26
        ? (this.montoMaximoCreditoFemenino = 4500)
        : diffmeses == 27
        ? (this.montoMaximoCreditoFemenino = 4300)
        : diffmeses >= 28
        ? (this.montoMaximoCreditoFemenino = 4400)
        : console.error("Error");
    }
    if (typePayroll === "C" && gender === "F") {
      diffmeses <= 24
        ? (this.montoMaximoCreditoFemenino = 4600)
        : diffmeses == 25
        ? (this.montoMaximoCreditoFemenino = 4900)
        : diffmeses == 26
        ? (this.montoMaximoCreditoFemenino = 4600)
        : diffmeses == 27
        ? (this.montoMaximoCreditoFemenino = 4700)
        : diffmeses >= 28
        ? (this.montoMaximoCreditoFemenino = 4000)
        : console.error("Error");
    }
    if (typePayroll === "D" && gender === "F") {
      diffmeses <= 24
        ? (this.montoMaximoCreditoFemenino = 5000)
        : diffmeses == 25
        ? (this.montoMaximoCreditoFemenino = 4900)
        : diffmeses == 26
        ? (this.montoMaximoCreditoFemenino = 4700)
        : diffmeses == 27
        ? (this.montoMaximoCreditoFemenino = 5000)
        : diffmeses >= 28
        ? (this.montoMaximoCreditoFemenino = 4300)
        : console.error("Error");
    }
    console.log(
      "montoMaximoCreditoFemenino: ",
      this.montoMaximoCreditoFemenino
    );
    let p1Femenino =
      this.montoMinimoCreditoFemenino +
      Math.sqrt(
        this.montoMaximoCreditoFemenino - this.montoMinimoCreditoFemenino
      );
    let p2Femenino =
      this.montoMinimoCreditoFemenino +
      0.0175 * this.montoMaximoCreditoFemenino -
      this.montoMinimoCreditoFemenino;

    console.log("result", p1Femenino);
    console.log("result", p2Femenino);
    console.log(Math.max(p1Femenino, p2Femenino));
  }
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
