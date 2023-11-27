import { useFormik } from "formik";
import { generalFormSchema } from "../schemas";
import { Link } from "react-router-dom";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

function GeneralForm() {
  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        age: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: generalFormSchema,
      onSubmit,
    });

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputDiv">
        <label>E-mail</label>
        <input
          type="email"
          id="email"
          placeholder="Mail adresinizi giriniz"
          value={values.email}
          onChange={handleChange}
          className={errors.email ? "inputError" : ""}
        />
        {errors.email && <p className="error">{errors.email} </p>}
      </div>
      <div className="inputDiv">
        <label>Yaş</label>
        <input
          type="number"
          id="age"
          placeholder="Yaşınızı giriniz"
          value={values.age}
          onChange={handleChange}
          className={errors.age ? "inputError" : ""}
        />
        {errors.age && <p className="error">{errors.age}</p>}
      </div>
      <div className="inputDiv">
        <label>Şifre</label>
        <input
          type="password"
          id="password"
          placeholder="Şifrenizi giriniz"
          value={values.password}
          onChange={handleChange}
          className={errors.password ? "inputError" : ""}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
      <div className="inputDiv">
        <label>Şifre Tekrarı</label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Şifrenizi tekrar giriniz"
          value={values.confirmPassword}
          onChange={handleChange}
          className={errors.confirmPassword ? "inputError" : ""}
        />
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}
      </div>

      <button disabled={isSubmitting} type="submit">
        Kaydet
      </button>
      <Link to="/portal" className="formLink">
        Portala Git
      </Link>
    </form>
  );
}

export default GeneralForm;
