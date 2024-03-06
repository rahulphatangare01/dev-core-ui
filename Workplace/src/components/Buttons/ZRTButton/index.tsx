import "./ZRTButton.css"
import { FaAngleRight } from "react-icons/fa";

interface BtnPropsType
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const ZRTButton: React.FC<BtnPropsType> = ({ ...props }) => {
  return (
    <button {...props} className="zrtBtn">
      {props.children}
      <FaAngleRight className="icon" />
    </button>
  );
};

export default ZRTButton;