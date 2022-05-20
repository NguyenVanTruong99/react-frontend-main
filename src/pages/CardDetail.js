import { useParams } from "react-router";
import CardDetail from "components/Card/Detail";

const CardDetailPage = () => {
  const { id } = useParams();

  return <CardDetail cardId={id} />;
};

export default CardDetailPage;
