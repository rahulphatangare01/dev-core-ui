import "./ZPara.css"
interface PropsType
  extends React.DetailedHTMLProps<
    React.HTMLProps<HTMLParagraphElement>,
    HTMLParagraphElement
  > {}

  const ZPara: React.FC<PropsType> = ({ ...props }) =>{
    return (
        <div>
            <p className="para-input">{props.children}</p>
        </div>
    )
  }

  export default ZPara