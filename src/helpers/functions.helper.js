const dateTime = require("node-datetime");

function dataHora(type) {
  let dt = dateTime.create();
  switch (type) {
    case "data":
      try {
        let dataFormatada = dt.format("d/m/Y");
        return dataFormatada;
      } catch (error) {
        console.info("Falha ao capturar a data/hora atual");
        return false;
      }
    case "hora":
      try {
        let dataFormatada = dt.format("H:M:S");
        return dataFormatada;
      } catch (error) {
        console.info("Falha ao capturar a data/hora atual");
        return false;
      }
    case "dataHoraUSA":
      try {
        let dataFormatada = dt.format("y-m-d H:M:S");
        return dataFormatada;
      } catch (error) {
        console.info("Falha ao capturar a data/hora atual");
        return false;
      }
    default:
      try {
        let dataFormatada = dt.format("d/m/y H:M:S");
        return dataFormatada;
      } catch (error) {
        console.info("Falha ao capturar a data/hora atual");
        return false;
      }
  }
}

function log(item, msg, tipo, ...extras) {
  let app_name = process.env.APPNAME;
  if (!tipo) {
    tipo = "ERRO";
  }
  const dataMsg = `[${dataHora()}] | [${app_name}] [${item}] [${tipo}]: ${msg}`;
  if (extras.length > 0) {
    console.info(dataMsg, extras);
  } else {
    console.info(dataMsg);
  }
}

module.exports = {
  dataHora,
  log
};