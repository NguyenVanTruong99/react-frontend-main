import CardAddBlankFormView from "./CardAddBlankFormView";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useCallback, useState } from "react";
import { useQuery } from "@apollo/client";
import { listCardsForFreeFormEntry } from "components/Card/queries";

const schema = yup
  .object({
    year: yup.string().required("required"),
    manufacturer: yup.string().required("required"),
    cardSet: yup.string().required("required"),
    cardNum: yup.string().optional(),
    parallel: yup.string().optional(),
  })
  .required();

const CardAddBlankFormContainer = () => {
  const [playerIds, setPlayerIds] = useState([]);
  const handleTags = useCallback(
    tags => setPlayerIds(tags.map(tag => tag.id)),
    []
  );

  const {
    control,
    handleSubmit,
    getValues,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const selectedManufacturerId = watch("manufacturer");
  const selectedYear = watch("year");
  const selectedCardSetId = watch("cardSet");
  const selectedCardNum = watch("cardNum");

  const onSubmit = useCallback(
    ({ year, manufacturer, cardSet, cardNum }) => console.log("do stuff"),
    []
  );

  const doSubmit = handleSubmit(onSubmit);

  const { data: { listCardsForFreeFormEntry: potentialCards = [] } = {} } =
    useQuery(listCardsForFreeFormEntry, {
      skip: !playerIds.length || !selectedYear,
      variables: {
        playerIds,
        year: selectedYear,
        offsetAttributes: {
          limit: 500,
        },
      },
    });

  return (
    <CardAddBlankFormView
      doSubmit={doSubmit}
      onPlayerTagChange={handleTags}
      getFormValue={getValues}
      control={control}
      errors={errors}
      isValid={isValid}
      potentialCards={potentialCards}
      selectedManufacturerId={selectedManufacturerId}
      selectedYear={selectedYear}
      selectedCardSetId={selectedCardSetId}
      selectedCardNum={selectedCardNum}
    />
  );
};

export default CardAddBlankFormContainer;
