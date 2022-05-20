/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ListUserdsWithSimilarInterest
// ====================================================

export interface ListUserdsWithSimilarInterest_listUsersWithSimilarInterest_approvedProfileImages {
  __typename: "UserProfileImage";
  imageUrl: string | null;
}

export interface ListUserdsWithSimilarInterest_listUsersWithSimilarInterest {
  __typename: "User";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  username: string | null;
  followerCount: number;
  createdAt: any | null;
  approvedProfileImages: ListUserdsWithSimilarInterest_listUsersWithSimilarInterest_approvedProfileImages[] | null;
}

export interface ListUserdsWithSimilarInterest {
  /**
   * List users with similar interest
   */
  listUsersWithSimilarInterest: ListUserdsWithSimilarInterest_listUsersWithSimilarInterest[];
}

export interface ListUserdsWithSimilarInterestVariables {
  interestType: string;
  interestId: string;
}
