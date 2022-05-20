/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ListUsersWithSimilarInterest
// ====================================================

export interface ListUsersWithSimilarInterest_listUsersWithSimilarInterest_approvedProfileImages {
  __typename: "UserProfileImage";
  imageUrl: string | null;
}

export interface ListUsersWithSimilarInterest_listUsersWithSimilarInterest {
  __typename: "User";
  /**
   * The unique identifier of the resource.
   */
  id: string;
  username: string | null;
  followerCount: number;
  createdAt: any | null;
  approvedProfileImages: ListUsersWithSimilarInterest_listUsersWithSimilarInterest_approvedProfileImages[] | null;
}

export interface ListUsersWithSimilarInterest {
  /**
   * List users with similar interest
   */
  listUsersWithSimilarInterest: ListUsersWithSimilarInterest_listUsersWithSimilarInterest[];
}

export interface ListUsersWithSimilarInterestVariables {
  interestType: string;
  interestId: string;
}
