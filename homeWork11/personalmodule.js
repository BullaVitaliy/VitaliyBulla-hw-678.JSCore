const os = require("os");
const username = os.userInfo().username;


const date_ob = new Date();// test time December 17, 1995 19:24:00

const date = ("0" + date_ob.getDate()).slice(-2);

const month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
const year = date_ob.getFullYear();
const hours = date_ob.getHours();
const minutes = date_ob.getMinutes();
const seconds = date_ob.getSeconds();

const time = `${year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds}`

function user_data(user) {
    let hi_user;

    if(hours <= 11){
        hi_user = `Good morning, ${user}`
        return hi_user;
    } else if(hours <= 18) {
        hi_user = `Good evening, ${user}`
        return hi_user;
    } else if(hours <=23) {
        hi_user = `Good night, ${user}`
        return hi_user;
    }
};


module.exports = {
    user_data,
    username,
    time,
};