// import { useRef } from 'react';
import "./ZBusinessClass.css";
interface PropsType
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const ZBusinessClass: React.FC<PropsType> = ({ ...props }) => {
    
  return (
    <div>
      <button {...props} className="defaultBtn">
        {props.children}
      </button>
    </div>
  );
};

export default ZBusinessClass;
