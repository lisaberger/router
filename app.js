
const express = require('express')
const app = express()
const port = 3000

app.use("/", express.static("public/FirstTry/dist"));
app.use("/detail", express.static("public/Detailview/Splitscreen_test"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})