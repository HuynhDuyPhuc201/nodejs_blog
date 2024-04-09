// file site dùng để lưu những trang không nằm trong

import { MyModel } from "../models/Course.js";

// một danh mục cụ thể nào (Home, Contact,...)
const SiteController = {
  // [GET] /
  async index(req, res) {
    // const info = await MyModel.find({});
    // info.forEach(function (item) {
    //   res.json(item);
    // });
    res.render("home");
  },

  // [GET] /search
  // luồng chạy của nó sẽ đi từ browser -> server -> controller (trong quá trình browser -> controller)
  // ở giữa đó là middleware -> nó đã xử lí việc lưu vào query
  // method GET -> req.query
  search(req, res) {
    console.log(req.query);
    res.render("search");
  },
};

export default SiteController;
