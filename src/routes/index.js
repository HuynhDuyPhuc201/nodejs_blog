import { router as newsRouter } from "./news.js";
import { router as siteRouter } from "./site.js";
import { router as coursesRouter } from "./courses.js";

const route = (app) => {
  app.use("/news", newsRouter);
  app.use("/courses", coursesRouter);
  app.use("/", siteRouter);

  // method POST -> req.body => chưa tích hợp sẵn việc middleware xử lí từ Form data lên
  // app.post("/search", (req, res) => {
  //   console.log(req.body);
  //   res.send("");
  // });
};

export default route;
