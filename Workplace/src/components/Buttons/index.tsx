interface PropsType
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}
import "./ZButton.css";

const ZButton: React.FC<PropsType> = ({ ...props }) => {
  return (
    <button {...props} className="defaultBtn">
      {props.children}
    </button>
  );
};

export default ZButton;
