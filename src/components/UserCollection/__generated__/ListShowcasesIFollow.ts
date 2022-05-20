/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OffsetAttributes } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: ListShowcasesIFollow
// ====================================================

export interface ListShowcasesIFollow_listShowcasesIFollow_user_approvedProfileImages {
  __typename: "UserProfileImage";
  imageUrl: string | null;
}

export interface ListShowcasesIFollow_listShowcasesIFollow_user {
  __typename: "User";
  username: string | null;
  /**
   * The unique identifier of the resource.
   */
  id: string;
  createdAt: any | null;
  approvedProfileImages: ListShowcasesIFollow_listShowcasesIFollow_user_approvedProfileImages[] | null;
}

export interface ListShowcasesIFollow_listShowcasesIFollow_collectionType {
  __typename: "CollectionType";
  name: string;
}

export interface ListShowcasesIFollow_listShowcasesIFollow_userCollectionFollowers {
  __typename: "UserCollectionFollower";
  userId: string;
}

export interface ListShowcasesIFollow_listShowcasesIFollow {
  __typename: "UserCollection";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  name: string | null;
  /**
   * The date and time that the resource was last updated.
   */
  updatedAt: any;
  description: string | null;
  /**
   * The date and time that the resource was created.
   */
  createdAt: any;
  views: number;
  coverImageUrl: string | null;
  cardCount: number;
  isPublic: boolean | null;
  isFeatured: boolean | null;
  isVisible: boolean | null;
  user: ListShowcasesIFollow_listShowcasesIFollow_user;
  collectionType: ListShowcasesIFollow_listShowcasesIFollow_collectionType;
  userId: string;
  userCollectionFollowers: ListShowcasesIFollow_listShowcasesIFollow_userCollectionFollowers[];
  followingOwner: boolean;
}

export interface ListShowcasesIFollow {
  /**
   * List showcases for authed user
   */
  listShowcasesIFollow: ListShowcasesIFollow_listShowcasesIFollow[];
}

export interface ListShowcasesIFollowVariables {
  offsetAttributes?: OffsetAttributes | null;
  viewerUserId?: string | null;
}
