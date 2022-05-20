import { createContext, useMemo, useCallback, useState } from "react";

const OnboardingContext = createContext();

const OnboardingProvider = ({ children }) => {
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [selectedExperienceLevel, setSelectedExperienceLevel] = useState(null);

  const addInterest = useCallback(
    interest => setSelectedInterests(interests => [interest, ...interests]),
    []
  );

  const removeInterest = useCallback(
    interest =>
      setSelectedInterests(interests =>
        interests.filter(i => i.id !== interest.id)
      ),
    []
  );

  const syncInterests = useCallback(
    interests => setSelectedInterests([...interests]),
    []
  );

  const onboardingData = useMemo(
    () => ({
      addInterest,
      removeInterest,
      syncInterests,
      setSelectedExperienceLevel,
      selectedExperienceLevel,
      selectedInterests,
    }),
    [
      addInterest,
      removeInterest,
      syncInterests,
      selectedInterests,
      selectedExperienceLevel,
    ]
  );

  return (
    <OnboardingContext.Provider value={onboardingData}>
      {children}
    </OnboardingContext.Provider>
  );
};

export { OnboardingContext, OnboardingProvider };
