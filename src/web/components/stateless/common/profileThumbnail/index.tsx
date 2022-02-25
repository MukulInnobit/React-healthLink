import Avatar from "react-avatar";
import { avatarColors } from "../../../../constants/constants";
import "./profileThumb.less"
    
const ProfileIcon = (props: any ) => {
    const {src, name, size} = props;
  const color = avatarColors[Math.floor(Math.random() * avatarColors.length)]
    return(
        src?
        <Avatar
        className="profileThumb"
        src={src}
        size={size=="large"? "100": "48"}
        round={true}
        />
    : 
    <Avatar
      className="profileThumb"
      name={name}
      size={size=="large"? "100": "48"}
      round={true}
      color={color}
    />
    )
}
export default ProfileIcon