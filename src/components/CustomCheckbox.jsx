import { useField } from "formik";

// eslint-disable-next-line react/prop-types
function CustomCheckbox({ ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <div className="checkbox">
        <input
          type="text"
          {...field}
          {...props}
          className={meta.error ? "inputError" : ""}
        />
        <span>Kullanım koşullarını kabul ediyorum.</span>
      </div>
      {meta.error && <p className="error">{meta.error}</p>}
    </>
  );
}

export default CustomCheckbox;
