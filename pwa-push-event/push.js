var webPush = require('web-push');

const vapidKeys = {
    "publicKey": "BJA0e92zF8MWdZgJvPtFLqVQT-00Jc1fhGPjRRI72-RupcdAPaHSSISFEmJaEJ3nw_vhmcb_csSzTqytkYKn_Sw",
    "privateKey": "v6wHfhxPL3v_aQgTTp-cmveeDlEghkt9H9vjJnEsVUY"
};


webPush.setVapidDetails(
    'mailto:example@yourdomain.org',
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
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';

var options = {
    gcmAPIKey: '733217470388',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);