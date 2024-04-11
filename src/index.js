import express from "express";
import morgan from "morgan";
// hỗ trợ render ra tất cả các souce code html (hiểu đơn giản là v)
import { engine } from "express-handlebars";
import path from "path";
import { fileURLToPath } from "url";
import route from "./routes/index.js";
import { connectToDB } from "./config/db/index.js";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// connect to DB
connectToDB();

const app = express();

// nó sẽ kiểm tra thư mục mà mình đã cung cấp cho nó
// http://localhost:3000/public/
app.use(express.static(path.join(__dirname, "public/")));

// apply middleware xử lý
// dạng form
app.use(
  express.urlencoded({
    extended: true,
  })
);
// dạng gửi từ code js lên
app.use(express.json());

// logger HTTP request (giúp logger đc những request mà server gửi lên)
app.use(morgan("combined"));

// Template engine
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// Route init
route(app);

app.listen(3000, () => {
  console.log(`App listening on port: 3000`);
});
