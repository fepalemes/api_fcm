const { sendNotification } = require("../controllers/fcm.controller");

class FCM {
    constructor(app){
        this.app = app;
    }

    init(){
        this.app.route("/api/sendNotification").post(sendNotification);
    }
}

module.exports = FCM;