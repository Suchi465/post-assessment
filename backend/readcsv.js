const fs = require("fs");
const csv = require("csv-parser");
var results = [];
function readCSV(req, res) {
  fs.createReadStream("./data/data.csv")
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", () => {});

  results.sort(function (a, b) {
    return a.age - b.age;
  });
  console.log("sorted array of students", results);
  const average = results.reduce(
    (total, item) => parseInt(item.grade) + total,
    0
  );
  console.log("average grade", average / results.length);
  res.send(results);
}
exports.readCSV = readCSV;
