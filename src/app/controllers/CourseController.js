import { MongooseToObject } from "../../util/mongoose.js";
import { MyCourse } from "../models/Course.js";

const CourseController = {
  // [GET] /courses/:slug
  show(req, res, next) {
    MyCourse.findOne({ slug: req.params.slug })
      .then((course) =>
        res.render("courses/show", { course: MongooseToObject(course) })
      )
      .catch(next);
    // res.send("Course detail " + req.params.slug);
  },

  // [GET] /courses/create
  create(req, res) {
    res.render("courses/create");
  },

  // [POST] /courses/store
  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg`;
    const course = new MyCourse(formData);
    course
      .save()
      .then(() => {
        // res.json(course);
        res.redirect("/");
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

export default CourseController;
