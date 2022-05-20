import { useMutation } from "@apollo/client";
import {
  getUserCard,
  listMyStagedUserCards,
} from "components/UserCard/queries";
import {
  createUserCardImage,
  deleteUserCardImage,
} from "components/UserCardImage/mutations";
import { useCallback } from "react";

const useUserCardImageUpdater = ({ userCardImageId, userCardId, view }) => {
  const [destroy] = useMutation(deleteUserCardImage, {
    variables: {
      input: {
        id: userCardImageId ?? "",
      },
    },
  });

  const [create] = useMutation(createUserCardImage, {
    refetchQueries: [
      {
        query: listMyStagedUserCards,
        variables: {
          offsetAttributes: {
            limit: 100,
          },
        },
      },
      {
        query: getUserCard,
        variables: {
          id: userCardId,
        },
      },
    ],
    variables: {
      input: {
        userCardId,
        view,
      },
    },
  });

  const createUserImagesFromFiles = useCallback(
    files =>
      Promise.all(
        Array.from(files).map(file =>
          create({
            context: { hasUpload: true },
            variables: {
              input: {
                image: file,
                userCardId,
                view,
              },
            },
          }).catch(console.error)
        )
      ),
    [userCardId, create, view]
  );

  const update = useCallback(
    files =>
      !!Array.from(files).length &&
      (!!userCardImageId
        ? destroy({ variables: { input: { id: userCardImageId } } }).then(
            () => files
          )
        : Promise.resolve(files)
      ).then(createUserImagesFromFiles),
    [userCardImageId, createUserImagesFromFiles, destroy]
  );

  return update;
};

export default useUserCardImageUpdater;
