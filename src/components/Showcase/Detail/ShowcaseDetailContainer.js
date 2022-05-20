import { useCallback, useContext, useEffect, useState, useMemo } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import { CurrentUserContext } from "contexts/CurrentUser";
import PlayerImg from "assets/images/Player.png";
import ShowcaseDetailView from "./ShowcaseDetailView";
import {
  getUserCollection,
  listMyShowcases,
} from "components/UserCollection/queries";
import { gql, useMutation, useQuery } from "@apollo/client";
import useWindowDimensions from "hooks/useWindowDimensions";
import { useNavigate } from "react-router-dom";
import { createUserCollectionView } from "components/UserCollectionView/mutations";

const listUserCollectionCardsByUserCollectionIdQuery = gql`
  query ListUserCollectionCardsByUserCollectionId(
    $userCollectionId: ID!
    $after: String
  ) {
    listUserCollectionCardsByUserCollectionId(
      userCollectionId: $userCollectionId
      after: $after
      first: 12
    ) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          id
          createdAt
          userCardId
          userCollectionId
          userCard {
            user {
              id
              username
            }
            cardGrade {
              id
              gradePop
              currentValue
              grade {
                grade
                gradeLabel
                id
                gradeVendor {
                  id
                  name
                }
              }
              gradeVendorId
              gradeVendor {
                id
                name
              }
            }
            card {
              name
              cardNumber
              frontUrl
              cardSet {
                year
                name
              }
            }
            userCardImages {
              imageUrl
              id
              view
            }
          }
        }
      }
    }
  }
`;

const ShowcaseDetailContainer = ({ id }) => {
  const navigate = useNavigate();
  const { currentUser } = useContext(CurrentUserContext);
  const { width: windowWidth } = useWindowDimensions();
  const [copyOpen, setCopyOpen] = useState(false);
  const handleCopyOpen = useCallback(() => setCopyOpen(true), []);
  const handleCopyClose = useCallback(() => setCopyOpen(false), []);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const { error, data: { getUserCollection: showcase } = {} } = useQuery(
    getUserCollection,
    {
      variables: {
        id,
        viewerUserId: currentUser?.authenticatable.id,
      },
    }
  );

  const {
    loading: listLoading,
    fetchMore,
    error: listError,
    data: {
      listUserCollectionCardsByUserCollectionId: userCollectionCards,
    } = {},
  } = useQuery(listUserCollectionCardsByUserCollectionIdQuery, {
    variables: {
      userCollectionId: id,
    },
    notifyOnNetworkStatusChange: true,
  });

  const [createView] = useMutation(createUserCollectionView, {
    variables: {
      input: {
        userCollectionId: id,
      },
    },
    refetchQueries: [
      {
        query: listMyShowcases,
      },
    ],
  });

  const showcaseUser = showcase?.user;
  const endCursor = userCollectionCards?.pageInfo?.endCursor;
  const hasMoreItems = userCollectionCards?.pageInfo?.hasNextPage;

  const handleLoadMoreClick = useCallback(
    () =>
      fetchMore({
        variables: {
          after: endCursor,
        },
      }),
    [fetchMore, endCursor]
  );

  const handleShare = e => {
    e.stopPropagation();
    const url = `${window.location.protocol}//${window.location.host}/showcases/${id}`;
    if (navigator.share && isSmall) {
      navigator.share({
        title: "Share Card",
        url: url,
      });
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      handleCopyOpen();
    }
  };

  const profileImg =
    showcaseUser?.approvedProfileImages.length > 0
      ? showcaseUser?.approvedProfileImages[0]?.imageUrl
      : PlayerImg;
  const profileUrl = "/users/" + showcaseUser?.id;

  const handleViewProfile = () => navigate(profileUrl);

  const isOwner = currentUser?.authenticatable.id === showcase?.user.id;

  const screenSize = windowWidth < 600 ? "xs" : "md";
  const avatarImgSize = windowWidth < 600 ? "55px" : "145px";
  const avatarFrameSize = windowWidth < 600 ? "60px" : "150px";

  const loadedShowcase = !!showcase?.userId;
  const isLoggedIn = !!currentUser?.authenticatable?.id;
  const ownsShowcase =
    isLoggedIn && showcase?.userId === currentUser.authenticatable.id;

  const isFollowing = useMemo(
    () =>
      showcase?.userCollectionFollowers.some(
        userCollectionFollower =>
          userCollectionFollower.userId === currentUser?.authenticatable.id
      ),
    [showcase, currentUser]
  );

  useEffect(() => {
    const onScroll = () =>
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      fetchMore({
        variables: {
          after: endCursor,
        },
      });
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [fetchMore, hasMoreItems, endCursor]);

  useEffect(() => {
    !!loadedShowcase && !ownsShowcase && !!isLoggedIn && createView();
  }, [createView, loadedShowcase, ownsShowcase, isLoggedIn]);

  !!error && console.error(error);
  !!listError && console.error(listError);

  return !showcase ? null : (
    <ShowcaseDetailView
      listLoading={listLoading}
      screenSize={screenSize}
      avatarImgSize={avatarImgSize}
      avatarFrameSize={avatarFrameSize}
      showcase={showcase}
      isFollowing={isFollowing}
      user={showcase.user}
      currentUser={currentUser}
      profileImg={profileImg}
      profileUrl={profileUrl}
      onShare={handleShare}
      handleViewProfile={handleViewProfile}
      isOwner={isOwner}
      copyOpen={copyOpen}
      handleCopyClose={handleCopyClose}
      userCollectionCards={userCollectionCards}
      hasMoreItems={hasMoreItems}
      onLoadMoreClick={handleLoadMoreClick}
    />
  );
};

export default ShowcaseDetailContainer;
