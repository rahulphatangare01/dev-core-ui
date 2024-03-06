interface PropsType
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}
import "./ZTransparentButton.css";

const ZTransparentButton: React.FC<PropsType> = ({ ...props }) => {
  return (
    <button {...props} className="transparentBtn">
      {props.children}
    </button>
  );
};

export default ZTransparentButton;
