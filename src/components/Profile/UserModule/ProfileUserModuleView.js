import List from '@mui/material/List';
import { ListSubheader } from '@mui/material';
import ProfileUserModuleItem from './Item';
import style from "./ProfileUserModuleStyle";


const ProfileUserModuleView = ({users, title, refetchQueries}) => 
  <List
    subheader={<ListSubheader variant="profile">{title}</ListSubheader>}
    variant="profile"
    sx={style.list}
  >
    {
      users.map(user => 
        <ProfileUserModuleItem key={user.id} user={user} refetchQueries={refetchQueries} />
      )
    }
    
  </List>

export default ProfileUserModuleView