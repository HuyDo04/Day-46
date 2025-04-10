import PropsTypes from "prop-types";

const InputText = ({ type = "text", name, register, message, ...other }) => {
  return (
    <div>
      <label>
        <input type={type} {...register(name)} {...other} />
        {message && <span>{message}</span>}
      </label>
    </div>
  );
};

InputText.propTypes = {
  type: PropsTypes.string,
  name: PropsTypes.string,
  message: PropsTypes.string,
  register: PropsTypes.object,
};

export default InputText;
