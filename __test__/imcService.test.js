const imcService = require("../src/services/imcService");
const ImcService = new imcService();

describe("Testando serviço de IMC", () => {
  it("Calculo de IMC - Dado um valor, deve retornar o imc correto", async done => {
    const altura = 170;
    const peso = 90;
    const r = parseFloat(31.1);
    const res = await ImcService.calcImc(altura, peso);
    expect(res).toEqual(r);
    done();
  });

  it("Mecanismo de resultado - Dado um IMC, deve retornar o estágio", async done => {
    const IMC = 31;
    const stage = "Obesidade II";
    const res = await ImcService.calcStage(IMC);
    expect(res).toEqual(stage);
    done();
  });

  it("Metodo run - Deve retornar um objeto", async done => {
    const altura = 170;
    const peso = 90;
    const res = await ImcService.run(altura, peso);
    const obj = {};
    expect(typeof res).toEqual(typeof obj);
    done();
  });

  it("Metodo run - Objeto deve conter IMC e Resultado", async done => {
    const altura = 170;
    const peso = 90;
    const res = await ImcService.run(altura, peso);
    expect(res).toHaveProperty("imc");
    expect(res).toHaveProperty("stage");
    done();
  });
});
