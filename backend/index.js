const express = require("express");
const dbconnect = require("./database");
const app = express();

app.get("/api/configurations/:id", async (req, res) => {
  const para = req.params.id;
  let abc = await dbconnect();
  let result = await abc.find({ id: para }).toArray();
  res.send(result);
});
app.put("/api/configurations/:id", async (req, res) => {
  const para = req.params.id; //!this
  const data = req.params.remark; //!this
  console.dir(para);
  console.dir(data);
  let abc = await dbconnect();

  let updatedResult = abc.updateOne(
    { id: para },
    { $set: { remark: "i am done with task" } } //!this
  );

  res.send(updatedResult);
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`server running on port,${port}`));
