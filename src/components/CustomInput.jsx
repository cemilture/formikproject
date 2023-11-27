import { useField } from "formik";

// eslint-disable-next-line react/prop-types
function CustomInput({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <label>{label}</label>
      <input
        type="text"
        {...field}
        {...props}
        className={meta.error ? "inputError" : ""}
      />
      {meta.error && <p className="error">{meta.error}</p>}
    </>
  );
}

export default CustomInput;
