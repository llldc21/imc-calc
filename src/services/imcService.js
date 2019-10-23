class ImcService {
  constructor() {}

  async run(altura, peso) {
    const imc = await this.calcImc(altura, peso);
    const stage = await this.calcStage(imc);
    const calc = {
      imc: imc,
      stage: stage
    };
    const response = {
        data: calc
      } 
    return response;
  }

  async calcImc(altura, peso) {
    altura = altura / 100;
    const res = peso / (altura * altura);
    return parseFloat(res.toFixed(1));
  }

  async calcStage(imc) {
    if (imc < 18.5) {
      return `Magreza`;
    } else if ((imc >= 18.5) & (imc <= 24.9)) {
      return `Normal`;
    } else if ((imc >= 25.0) & (imc <= 29.9)) {
      return `Sobrepeso I`;
    } else if ((imc >= 30.0) & (imc <= 39.9)) {
      return `Obesidade II`;
    } else if (imc > 40.0) {
      return `Obesidade Grave III`;
    }
  }
}

module.exports = ImcService;
