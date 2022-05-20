import CardsToConsider from "components/CardsToConsider";
import CollectorsToConnectWith from "components/CollectorsToConnectWith";
import DailyPerformers from "components/DailyPerformers";
import NewToNoxx from "components/NewToNoxx";
import OnboardingBar from "components/OnboardingBar";
import Welcome from "components/Welcome";
import { getContentModules } from "components/User/queries";
import { useQuery } from "@apollo/client";

const modules = {
  NewToNoxx,
  CollectorsToConnectWith,
  CardsToConsider,
  DailyPerformers,
};

const EntryPageContainer = ({ currentUser, user }) => {
  const { error, data } = useQuery(getContentModules);

  !!error && console.error(error);

  return (
    <>
      <Welcome user={user} />
      {!!currentUser && <OnboardingBar user={user} />}
      {(data?.listMyContentModules ?? []).map(module => {
        const Module = modules[module.module.name];
        return (
          <Module
            user={user}
            userCardIds={module.data.ids}
            collectorIds={module.data.ids}
            cardIds={module.data.ids}
            displayName={module.module.displayName}
            key={module.module.name}
            playerIds={module.data.ids}
            metadata={module.data.metadata}
          />
        );
      })
      }
    </>
  );
};
export default EntryPageContainer;
