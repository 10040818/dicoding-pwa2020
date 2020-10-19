var webPush = require('web-push');

const vapidKeys = {
    "publicKey": "BMzLBN47faSoxI6wBTk78JXJTLZoe4Kd96oy8bK6qVOu32LXl8-e70YJmeA41ZXMZ3SjjP-fBOBdCByyemoDMAw",
    "privateKey": "kdO8sVHpghSbMjpZAoV2OMTjBwprtDyD3vzHfuOLzck"
};


webPush.setVapidDetails(
    'mailto:alvinindrap@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/c31UPoSJsqA:APA91bGnJ9jcXvckj5bZsKmCXUpc2tIPkZ5QWLfjScJCpGMdVo4Ehcx_heNa1l8NfAFlupQKbkjphwz_gT5CUHtus-IkPgj8nOcl5HZjEP80Cj6zfm17TaqzutxLSA-UBCelAHIgbwVd",
    "keys": {
        "p256dh": "BHDaUtIka+c65uSh6VMiSr3nC/7HIl+I2ucN9+eQaxYNJNfr+bqqT6dCjgOPWmHiWLFNnM67bIqH6LyLI97ES8Y=",
        "auth": "D4YhPCNZIqp1Rl6bGswwag=="
    }
};
var payload = 'Selamat Datang Di PWA Football';

var options = {
    gcmAPIKey: '733217470388',
    TTL: 60
};

webPush.sendNotification(
    pushSubscription,
    payload,
    options
);