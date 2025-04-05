import * as yup from 'yup';

export const addTaskSchema = yup.object().shape({
  title: yup.string().required("Task title is required"),
  date: yup
    .string()
    .matches(
      /^(0[1-9]|1[0-9]|2[0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/,
      "Invalid date format. Use dd.mm.yyyy"
    )
    .required("Date is required"),
  time: yup
    .string()
    .matches(/^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])$/, "Invalid time format. Use hh:mm")
    .required("Time is required"),
});
