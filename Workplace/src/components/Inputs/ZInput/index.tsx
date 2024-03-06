interface PropsType
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}
import "./ZInput.css";

const ZInput: React.FC<PropsType> = ({ ...props }) => {
  return (
    <div>
      <p className="input-title">{props.children}</p>
      <input
        className="input-box"
        type={props.type}
        placeholder={props.placeholder}
        required
      ></input>
    </div>

  )}
export default ZInput;
