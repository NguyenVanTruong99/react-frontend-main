import Box from "@mui/material/Box";
import style from "./ProfileBannerStyle";
import CreateIcon from '@mui/icons-material/Create';

const ProfileBannerView = ({ editView, imageSrc }) =>
	<Box sx={ style.profileBannerContentBox }>
		<img src={imageSrc} style={ editView ? style.profileBannerImageEditing : style.profileBannerImage } alt=""/>
		{
			editView &&
			<Box sx={ style.editIconBox }>
				<CreateIcon color="white" sx={ style.editIcon }/>
			</Box>
		}
	</Box>
  
export default ProfileBannerView;
  