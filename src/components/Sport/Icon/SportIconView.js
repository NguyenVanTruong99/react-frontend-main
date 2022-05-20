// import { ReactComponent as Baseball } from 'assets/svg/sports/Baseball.svg';
// import { ReactComponent as Basketball } from 'assets/svg/sports/Basketball.svg';
// import { ReactComponent as Football } from 'assets/svg/sports/Football.svg';
// import { ReactComponent as Hockey } from 'assets/svg/sports/Hockey.svg';
// import { ReactComponent as Soccer } from 'assets/svg/sports/Soccer.svg';
// import { ReactComponent as All } from 'assets/svg/sports/all.svg';
// import { SvgIcon } from '@mui/material';
import All from "components/Icons/Sports/All";
import Baseball from "components/Icons/Sports/Baseball";
import Basketball from "components/Icons/Sports/Basketball";
import Football from "components/Icons/Sports/Football";
import Hockey from "components/Icons/Sports/Hockey";
import Soccer from "components/Icons/Sports/Soccer";

const SportIconView = ({ sportName, ...props }) => {
  switch (sportName?.toLowerCase()) {
    case "my collection":
      return <All {...props} inheritViewBox />;
    case "basketball":
      return <Basketball {...props} inheritViewBox />;
    case "football":
      return <Football {...props} inheritViewBox />;
    case "soccer":
      return <Soccer {...props} inheritViewBox />;
    case "baseball":
      return <Baseball {...props} inheritViewBox />;
    case "hockey":
      return <Hockey {...props} inheritViewBox />;
    default:
      return <Icon sportName={sportName} {...props} />;
  }
};

// <SvgIcon component={Icon} {...props} />

const Icon = ({ sportName, ...rest }) => {
  switch (sportName?.toLowerCase()) {
    case "baseball":
      return <Baseball />;
    case "basketball":
      return <Basketball />;
    case "football":
      return <Football />;
    case "hockey":
      return <Hockey />;
    case "soccer":
      return <Soccer />;
    default:
      return <All />;
  }
};

export default SportIconView;
