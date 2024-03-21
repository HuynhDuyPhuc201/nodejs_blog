import express from "express";
import morgan from "morgan";
// hỗ trợ render ra tất cả các souce code html (hiểu đơn giản là v)
import { engine } from "express-handlebars";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

// nó sẽ kiểm tra thư mục mà mình đã cung cấp cho nó
// http://localhost:3000/public/
app.use(express.static(path.join(__dirname, "public/")));

// logger HTTP request (giúp logger đc những request mà server gửi lên)
app.use(morgan("combined"));

// Template engine
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources/views"));

console.log("Path:", __dirname);

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/views", (req, res) => {
  res.render("views");
});

app.listen(3000, () => {
  console.log(`Example app listening on port: 3000`);
});
