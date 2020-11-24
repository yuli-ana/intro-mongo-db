const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/whatever");
};

const student = new mongoose.Schema(
  {
    firstName: { type: String },
    faveFoods: [{ type: String }],
    info: {
      school: { type: String },
      shoeSize: { type: Number },
    },
  },
  { timestamps: true }
);

const Student = mongoose.model("student", student);

connect()
  .then(async (connections) => {
    const student = await Student.create({ firstName: "Tim" });
    const found = await Student.find({ firstName: "Tim" });
    const foundById = await Student.findById("757585ujjjj4h4h4j3");
    const update = await Student.findByIdAndUpdate("hshjdkjd99", {});
    // Returns just 1 student with that id if it exists, if it's not in DB returns null
    console.log(student);
    console.log(found);
  })
  .catch((err) => console.log(err));
