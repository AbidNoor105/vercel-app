const express = require("express")
const app = express();

app.use("/", (req, res) => {
	res.send("Server is runningGGGG")
})

app.listen(3001, console.log("Server is running on 3001 i think"))