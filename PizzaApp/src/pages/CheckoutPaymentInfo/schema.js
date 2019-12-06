import * as Yup from "yup";

const PaymentSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  addressLine: Yup.string().required("Address line is required"),
  suite: Yup.string().required("Suite is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required")
});

export default PaymentSchema