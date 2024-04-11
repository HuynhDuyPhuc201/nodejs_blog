const multipleMongooseToObject = (mongooses) => {
  return mongooses.map((mongoose) => mongoose.toObject());
};

const MongooseToObject = (mongooses) => {
  return mongooses ? mongooses.toObject() : mongooses;
};

export { multipleMongooseToObject, MongooseToObject };
