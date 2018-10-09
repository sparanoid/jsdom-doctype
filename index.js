const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const dom = new JSDOM(`<!doctype html><p>Hello world</p>`);
console.log(dom.serialize());
