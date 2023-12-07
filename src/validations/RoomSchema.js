import * as Yup from "yup";

export const reportSchema = Yup.object({
  room: Yup.string().required("Please enter report name"),
  building: Yup.string().required("Please enter building name"),
  floor: Yup.string().required("Please enter floor number"),
  seating: Yup.string().required("Please enter seating capacity"),
  date: Yup.date()
    .max(new Date(), "Create date cannot be in the past")
    .required("Please enter create date"),
});
