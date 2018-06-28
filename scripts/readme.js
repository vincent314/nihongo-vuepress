const config = require("./config");
const path = require("path");
const fs = require("fs");
const handlebars = require("handlebars");


const template = handlebars.compile(fs.readFileSync(path.join('scripts','README.hbs')).toString())

config.categories
    .forEach(category => {
        fs.writeFile(path.join(category.dir,'README.md'), template(category), (err) =>{
            console.log(err)
        });
    });