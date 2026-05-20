const { required } = require("joi")
const mongoose = require("mongoose")

const adminSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "User Name is Required"],
    },
    email: {
      type: String,
      required: [true, "Email is Required"],
    },
    password: {
      type: String,
      required: [true, "password is Required"],
      minlength: [6, "password must be 6 char"],
    },
  },
  { timestamps: true },
);
//hooks
adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
});

adminSchema.methods.comparePassword = async function (matched) {
  return await bcrypt.compare(matched, this.password);
};

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
