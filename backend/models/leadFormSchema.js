import mongoose from "mongoose";

const leadFormSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Name field missing"],
    },
    email: {
      type: String,
      trim: true,
      required: [true, "Email field missing"],
    },
    phoneNumber: {
      type: String,
      trim: true,
      required: [true, "PhoneNumber field missing"],
    },
    service: {
      type: String,
      trim: true,
      required: [true, "Service field missing"],
    },
    capitalInvestment: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Lead = mongoose.model("Lead", leadFormSchema);

export default Lead;
