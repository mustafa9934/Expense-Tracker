const express = require("express");
const app = express();
const appRoutes = require("./routers/index");
app.use("/api", appRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
