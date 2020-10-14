const functions = require('firebase-functions');
const express = require('express');
const avatarsMiddleware = require('adorable-avatars');

const app = express();
app.use('/', avatarsMiddleware);

exports.avatars = functions.https.onRequest(app);
