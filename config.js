const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: 'DARK-SHUTER-MD=LaJm1JSa#_fML4td-L2N4ZdiWeGB91QN-6h-Tv-wUXoN7wnNIamE',
GITHUB_AUTH_TOKEN: 'r7W3umeDm5RyH4GJsk1cUwVErEcwMw2P9mrt', //"ghp_ " මෙම කොටස ඉවත් කර token එක දාන්න.
GITHUB_USER_NAME: 'shenmx77',

};
