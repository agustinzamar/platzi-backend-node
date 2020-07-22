const fs = require("fs");
const file = fs.createWriteStream("./big.txt");

for (let i = 0; i <= 1e6; i++) {
  file.write(
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, ut est eveniet ducimus officia aliquid nemo eius non fuga fugit?"
  );
}

file.end();
