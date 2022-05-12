const express = require("express");
const routes = require("./src/routes/index.routes");
const cors = require("cors");
const helmet = require("helmet");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const { dataHora } = require("./src/helpers/functions.helper");

const app = express();
const portaExec = process.env.PORT;
const appName = process.env.APPNAME;

// Swagger config
const swaggerConfig = {
  definition: {
      openapi: '3.0.0',
      info: {
          title:"api_fcm", 
          description:"API REST Firebase Cloud Messaging - Push notification",
          contact: {
              email:"fepalemes@gmail.com"
          },
          version:"1.0.0"
      },
      servers: [
              {
                  url:`http://localhost:${portaExec}/api`,
                  description:"API - Local"
              }
          ],
      externalDocs: {
          description: 'Read more at: ',
          url: 'https://github.com/fepalemes/api_fcm#readme'
      },
  },    
  apis: ['./src/routes/*.js']
}

const swaggerDocs = swaggerJsDoc(swaggerConfig)

app.use('/api-doc', swaggerUI.serve, swaggerUI.setup(swaggerDocs))
app.get('/api-doc-json', (req, res) => {
  res.json(swaggerDocs).status(200)
})

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Security
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        frameAncestors: ['app://*', 'http://localhost:*'],
      },
    },
    frameguard: false,
  }),
);

app.use(routes);

app.listen(portaExec, () =>
  console.log(`---==[${dataHora()}] [SERVICE RUNNING] [${appName}]==---`)
);