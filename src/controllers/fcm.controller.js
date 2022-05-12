const axios = require('axios');
const authKeyFCM = process.env.SERVEY_KEY;

exports.sendNotification = async function(req, res){
    try {

        let params = req.body; 

        const url = 'https://fcm.googleapis.com/fcm/send'

        const data = JSON.stringify({
            priority: 'HIGH',
            notification: {
                title: params.title,
                body: params.message
            },
            condition: "'all' in topics || 'android' in topics || 'ios' in topics"
          });

        let result = await axios.post(url, data, {
            headers: {
                'Authorization': `key=${authKeyFCM}`,
                'Content-Type': 'application/json'
            }
        });

        return res.status(200).send({
            success: true,
            result: result.data
        });

    } catch (error) {
        return res.status(400).send({
            success: false,
            result: error
        })
    }
}