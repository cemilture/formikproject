import { useField } from "formik";

// eslint-disable-next-line react/prop-types
function CustomSelect({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <label>{label}</label>
      <select
        type="text"
        {...field}
        {...props}
        className={meta.error ? "inputError" : ""}
      />
      {meta.error && <p className="error">{meta.error}</p>}
    </>
  );
}
export default CustomSelect;
