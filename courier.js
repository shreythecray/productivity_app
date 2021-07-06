const { CourierClient } = require("@trycourier/courier");
require('dotenv').config();

async function send_notif() {
    const courier = CourierClient({ authorizationToken: process.env.COURIER_AUTH_TOKEN });

    // Example: send a message supporting email & SMS
    const { messageId } = await courier.send({
    eventId: "6TPWT1WYZQ4NV1GN0HSBH2GP375X",
    recipientId: "842fc735-458f-4f70-9e68-29e86ac05c87",
    profile: {
    },
    data: {
        body: "hello",
    },
    override: {
    },
    });
}

let response = send_notif()

console.log(response)