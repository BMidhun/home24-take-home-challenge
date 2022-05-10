import "./index.css";

export type ReactInputEvent = React.ChangeEvent<HTMLInputElement>;

type InputTypes = "email" | "text" | "search" | "password";

type InputProps = {
  placeholder: string;
  name: string;
  value: string;
  type?: InputTypes;
  onChange: (e: ReactInputEvent) => void;
};

function Input(props: InputProps) {
  return (
    <input
      className="text-input"
      placeholder={props.placeholder}
      type={props.type}
      value={props.value}
      name={props.name}
      onChange={props.onChange}
    ></input>
  );
}

export default Input;
