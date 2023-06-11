import express from "express";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const __dirname = path.resolve();

// production mode process
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../dist")));

  app.get("*", (req, res) =>
    res.sendFile(path.join(__dirname, "../dist/index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});
