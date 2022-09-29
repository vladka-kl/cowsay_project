const userInfo = require('./information')

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `go away ${userInfo.name} from ${userInfo.campus}`,
    e : "oO",
    T : "U "
}));
