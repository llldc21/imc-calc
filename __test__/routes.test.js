const request = require("supertest");
const imcCalcPath = "/api/imc-calc";
const app = require("../src/index");

describe(`Testando rota ${imcCalcPath}`, () => {
  it("Deve retornar statusCode = 200", async done => {
    const res = await request(app).post(imcCalcPath);
    expect(res.status).toEqual(200);
    done();
  });

  it("Deve retornar um objeto", async done => {
    const res = await request(app).post(imcCalcPath);
    const obj = {};
    expect(typeof res.body.data).toEqual(typeof obj);
    done();
  });
  it("Objeto deve conter IMC e Resultado", async done => {
    const res = await request(app).post(imcCalcPath);
    expect(res.body.data).toHaveProperty("imc");
    expect(res.body.data).toHaveProperty("stage");
    done();
  });
});
