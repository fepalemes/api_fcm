const express = require("express");
const app = express.Router();
const { healthCheck } = require("../controllers/health-check.controller");
const FCM = require("./fcm.routes");

// Init routes
new FCM(app).init();

app.route("/api/health-check").get(healthCheck);
//* Swagger da rota /health-check
/**
 * @swagger
 * /health-check:
 *  get:
 *      summary: Saúde da API
 *      description: Rota responsável para verificar se a API está se comportando corretamente
 *      tags: [Health-check]
 *      responses:
 *          200:
 *              description: Sucesso
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/health-check'
 */

//* Schemas Swagger
/**
 * @swagger
 * components:
 *  schemas:
 *      health-check:
 *          type: object
 *          properties:
 *              status:
 *                  type: boolean
 *                  example: true
 *              dataHora:
 *                  type: string
 *                  example: "01/01/22 00:00:00"
 *              message:
 *                  type: string
 *                  example: "Servico rodando normalmente"
 */

 module.exports = app;

