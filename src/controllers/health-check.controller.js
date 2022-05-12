const { dataHora, log } = require("../helpers/functions.helper");
const appName = process.env.APPNAME;

exports.healthCheck = function(req, res){
    log("CHAMADA-ENDPOINT", "/api/health-check", "HEALTH-CHECK");

        res.send({ 
            status: true, 
            nome_servico: appName,
            dataHora : dataHora("datahora"),
            message: 'Servico rodando normalmente'});
}