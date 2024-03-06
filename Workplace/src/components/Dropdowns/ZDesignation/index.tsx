import React from "react";
import "./ZDesignation.css"

interface DesignationPropsType extends React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {}

const ZDesignation: React.FC<DesignationPropsType> = ({ ...props }) => {
  return (
    <div className="custom-dropdown">
        <label>Designation</label>
        <select>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
        </select>
    </div>
  );
};

export default ZDesignation;