const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
//==========================================
userSchema.pre("save", function (next) {
  // salt, hashing round
  const hash = bcrypt.hashSync(this.password, 8);
  this.password = hash;
  return next();
});

userSchema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
  // T OR F
};
//==============================================================

const User = mongoose.model("user", userSchema);
module.exports = User;
