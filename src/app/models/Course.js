import mongoose from "mongoose";
import slug from "mongoose-slug-updater";

const Schema = mongoose.Schema;
mongoose.plugin(slug);

// dùng mongoose kiểm soát chặt chẽ hơn về dữ liệu
// muốn lưu được dữ liệu vào trong database
// đảm bảo model trong mongoose, phải được định nghĩa tất cả các filed này thì mới insert được
// thiếu filed nào thì sẽ kh được insert filed đó

const Course = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    videoId: { type: String },
    level: { type: String },
    slug: { type: String, slug: "name", unique: true },
  },
  {
    timestamps: true,
  }
);

export const MyCourse = mongoose.model("Course", Course);
