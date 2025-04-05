import * as yup from 'yup';

export const addTaskSchema = yup.object().shape({
  title: yup.string().required("Task title is required"),
  date: yup
    .string()
    .matches(
      /^(0[1-9]|[12]\d|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/,
      "Invalid date format. Use dd.mm.yyyy"
    )
    .required("Date is required"),
  time: yup
    .string()
    .matches(
      /^(0\d|1\d|2[0-3]):([0-5]\d)$/,
      "Invalid time format. Use hh:mm"
    )
    .required("Time is required"),
  notes: yup.string().required("Notes are required"),
  category: yup.string().required("Category is required"),
});
