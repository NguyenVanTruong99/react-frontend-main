import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import UserFollowerButton from 'components/UserFollower/Button';
import Avatar from 'components/ProfileV2/Avatar';


const ProfileUserModuleItemView = ({
  onMailClick, 
  userFollowerCount=300,
  userId,
  userDisplayName="FromDowntown",
  userJoinDate="Feb 2022",
  userProfileImg="https://d3k3fpfe9s0wgh.cloudfront.net/qh9s6xug1bvwaazf57jgr7voedf2",
  refetchQueries
}) => 
  <ListItem divider disableGutters alignItems="flex-start">
    <ListItemAvatar>
      <Avatar length={43} userImageUrl={userProfileImg} userId={userId} />
    </ListItemAvatar>
    <ListItemText disableTypography>
      <Typography variant="subtitle1" color="text.grey">{userDisplayName}</Typography>
      <Typography variant="caption" component="p" color="grey.700">Member Since {userJoinDate}</Typography>
      <Typography variant="caption" component="p" color="grey.500">{userFollowerCount} Followers</Typography>
      <Stack direction="row" spacing={1} alignItems="center">
        <Box>
          <UserFollowerButton userId={userId} size="small" refetchQueries={refetchQueries} />
        </Box>
        <IconButton onClick={onMailClick}>
          <MailOutlineIcon color="primary" />
        </IconButton>
      </Stack>
    </ListItemText>
  </ListItem>

export default ProfileUserModuleItemView