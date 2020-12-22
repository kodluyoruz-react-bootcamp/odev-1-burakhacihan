"use strict";const x = require('./lib/service');

async function getData(id) {
    const get_user_data = await x.getData(id);
    console.log(get_user_data);
}

getData(1);