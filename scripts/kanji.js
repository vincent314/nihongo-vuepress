const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars')

const kanjis = JSON.parse(fs.readFileSync(path.join("scripts","kanjis.json")));

const template = handlebars.compile(fs.readFileSync(path.join('scripts','kanji.hbs')).toString());

const content = template(kanjis);

fs.writeFileSync(path.join("docs/kanji","README.md"), content);