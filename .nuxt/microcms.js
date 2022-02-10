"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const microcms_js_sdk_1 = require("microcms-js-sdk");
const plugin = function (_, inject) {
    const _options = JSON.parse('{"serviceDomain":"smashbrosinfo","apiKey":"aae5a77d-d4c1-475d-9662-a4bef05133d8"}');
    const client = microcms_js_sdk_1.createClient(_options);
    inject('microcms', client);
};
exports.default = plugin;
