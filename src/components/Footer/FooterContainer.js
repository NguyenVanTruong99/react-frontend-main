// import { useMediaQuery } from '@mui/material'
import { gql, useQuery } from "@apollo/client";
import FooterView from "./FooterView";
import data from "../../../package.json"

const appVersionQuery = gql`
  query GetAppVersion {
    getAppVersion
  }
`;

const FooterContainer = () => {
  const {error, data: { getAppVersion: appVersion} = {}} = useQuery(appVersionQuery);

  !!error && console.error(error)

  return <FooterView backendVersion={appVersion}  frontendVersion={data.version} />;
};

export default FooterContainer;
