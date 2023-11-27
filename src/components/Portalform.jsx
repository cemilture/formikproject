import { Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import { portalFormSchema } from "../schemas";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";
import { Link } from "react-router-dom";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    console.log(values);
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

function Portalform() {
  return (
    <>
      <Formik
        initialValues={{ username: "", university: "", isAccepted: false }}
        onSubmit={onSubmit}
        validationSchema={portalFormSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <CustomInput
              label="Kullanıcı Adı"
              name="username"
              type="text"
              placeholder="Kullanıcı adınızı giriniz"
            />
            <CustomSelect
              label="Okulunuz"
              name="university"
              placeholder="Lütfen üniversitenizi seçiniz"
            >
              <option value="">Lütfen üniversitenizi seçiniz</option>
              <option value="boun">Boğaziçi Üniversitesi</option>
              <option value="gsu">Galatasaray Üniversitesi</option>
              <option value="itu">İTÜ</option>
              <option value="odtu">ODTÜ</option>
            </CustomSelect>
            <CustomCheckbox type="checkbox" name="isAccepted"></CustomCheckbox>
            <button type="submit" disabled={isSubmitting}>
              Kaydet
            </button>
            <Link to={"/"} className="formLink">
              Ana Forma Git
            </Link>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Portalform;
