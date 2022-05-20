import { useMutation, useQuery } from "@apollo/client";
import { listInterests } from "components/Interests/queries";
import { useMemo, useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OnboardingInterestsView from "./OnboardingInterestsView";
import { OnboardingContext } from "contexts/Onboarding";
import { CurrentUserContext } from "contexts/CurrentUser";
import { searchPlayers } from "components/Player/queries";
import debounce from "lodash.debounce";
import { createUserInterests } from "components/UserInterest/mutations";
import { createUserPlayerInterests } from "components/UserPlayerInterest/mutations";
import { updateUser } from "components/User/mutations";
import { updateUserProfile } from "components/UserProfile/mutations";
import { getUser } from "components/User/queries";

const OnboardingInterestsContainer = () => {
  const navigate = useNavigate();
  const {
    addInterest,
    removeInterest,
    selectedInterests,
    selectedExperienceLevel,
  } = useContext(OnboardingContext);

  const { currentUser, setIsOnboarded } = useContext(CurrentUserContext);

  const { data: listInterestData } = useQuery(listInterests);
  const [createInterests] = useMutation(createUserInterests);
  const [createPlayerInterests] = useMutation(createUserPlayerInterests);
  const [updateProfile] = useMutation(updateUserProfile);
  const [_updateUser] = useMutation(updateUser);

  const [playersValue, setPlayersValue] = useState([]);
  const [playerOptions, setPlayerOptions] = useState([]);
  const [playersInputValue, setPlayersInputValue] = useState("");

  const { data: playersData } = useQuery(searchPlayers, {
    skip: playersInputValue.length < 2,
    variables: {
      term: playersInputValue,
      offsetAttributes: {
        limit: 10,
      },
    },
  });

  const { data: getUserData } = useQuery(getUser, {
    variables: {
      id: currentUser?.authenticatable?.id,
    },
  });

  useEffect(() => {
    if (playersData?.searchPlayers?.results?.[0]?.count > 0) {
      const items = playersData.searchPlayers.results[0].items;

      setPlayerOptions(
        items.map(item => ({
          id: item.id,
          label: item.player.fullName,
        }))
      );
    } else if (playersData?.searchPlayers?.results?.[0]?.count === 0) {
      setPlayerOptions([]);
    }
  }, [playersData?.searchPlayers?.results]);

  const handleClickNext = () => {
    Promise.all([
      createInterests({
        variables: {
          input: {
            interestIds: selectedInterests.map(i => i.id),
          },
        },
      }),
      createPlayerInterests({
        variables: {
          input: {
            playerIds: playersValue.map(p => p.id),
          },
        },
      }),
      updateProfile({
        variables: {
          input: {
            id: getUserData?.getUser?.profile?.id,
            experienceLevel: selectedExperienceLevel,
          },
        },
      }),
      _updateUser({
        variables: {
          input: {
            id: getUserData?.getUser?.id,
            isOnboarded: true,
          },
        },
      }),
    ])
      .then(() => {
        setIsOnboarded(true);
        navigate("/onboarding/confirmation");
      })
      .catch(err => {
        alert("We're sorry! Something went wrong.");
      });
  };

  let interestGroups = [];

  if (listInterestData?.listInterests) {
    interestGroups.push({
      category: "Sports",
      label: "What sports do you collect?",
      interests: listInterestData?.listInterests.filter(
        i => i.category.name === "Sports"
      ),
    });

    interestGroups.push({
      category: "Players",
      label: "Who do you collect?",
      interests: [],
    });

    interestGroups.push({
      category: "Card Details",
      label: "What types of cards do you collect?",
      interests: listInterestData?.listInterests.filter(
        i => i.category.name === "Card Details"
      ),
    });

    interestGroups.push({
      category: "Misc",
      label: "What else are you interested in?",
      interests: listInterestData?.listInterests.filter(
        i => i.category.name === "Misc"
      ),
    });
  }

  const handleInterestSelected = useCallback(
    interest => {
      const interestObj = listInterestData?.listInterests.find(
        i => i.name === interest
      );

      if (!!selectedInterests.find(i => interestObj.id === i.id)) {
        removeInterest(interestObj);
      } else {
        addInterest(interestObj);
      }
    },
    [addInterest, removeInterest, listInterestData, selectedInterests]
  );

  const handlePlayersChanged = (e, val) => {
    setPlayerOptions(val ? [...val, ...playerOptions] : playerOptions);
    setPlayersValue(val);
  };

  const handlePlayersInputChanged = (e, val) => {
    setPlayersInputValue(val);
  };

  const handlePlayersInputChangedDebounced = useMemo(
    () => debounce(handlePlayersInputChanged, 300),
    []
  );

  const showNext = selectedInterests.length > 0 || playersValue.length > 0;

  useEffect(() => {
    if (!selectedExperienceLevel) {
      return navigate("/onboarding/experience");
    }
  }, [navigate, selectedExperienceLevel]);

  return (
    <OnboardingInterestsView
      interestGroups={interestGroups}
      onClickNext={handleClickNext}
      onInterestSelected={handleInterestSelected}
      onPlayersChanged={handlePlayersChanged}
      playersValue={playersValue}
      playerOptions={playerOptions}
      showNext={showNext}
      onPlayersInputChanged={handlePlayersInputChangedDebounced}
      selectedInterests={selectedInterests}
    />
  );
};

export default OnboardingInterestsContainer;
