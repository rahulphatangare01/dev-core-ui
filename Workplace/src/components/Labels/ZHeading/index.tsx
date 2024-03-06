import "./ZHeading.css"

interface LabelPropsType extends React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {}

const ZHeading: React.FC<LabelPropsType> = ({ ...props }) => {
  return (
    <label className="heading" {...props} ></label>
  );
};

export default ZHeading;