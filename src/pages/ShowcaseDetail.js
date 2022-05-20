import { useParams } from "react-router";
import ShowcaseDetail from "components/Showcase/Detail";

const ShowcaseDetailPage = ({customShowcaseId}) => { 
  const params = useParams();
  const id = customShowcaseId ?? params.id;

  return <ShowcaseDetail id={id} />;
};

export default ShowcaseDetailPage;
