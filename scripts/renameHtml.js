const { readdirSync, renameSync } = require("fs");
const path = require("path");

const dirs = ["docs/Cours_1annee", "docs/Cours_2annee", "docs/Calligraphie"];

dirs.forEach(dir => readdirSync(dir)
    .filter(file => /.+\.html$/.test(file))
    .forEach(file => renameSync(path.join(dir, file), path.join(dir, file.replace(/\.html$/, ".md"))))
);

