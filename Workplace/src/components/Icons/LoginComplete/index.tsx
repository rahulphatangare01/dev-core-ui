
import * as compicon from "../../assests/compicon.png";

interface PropsType
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {}

const ZLoginFinishIcon: React.FC<PropsType> = ({ ...props }) => {
    const { alt = '', ...restProps } = props;
  return (
    <div>
        <img {...restProps} src={compicon as unknown as string } alt="" />

    </div>
  )
};

export default ZLoginFinishIcon
