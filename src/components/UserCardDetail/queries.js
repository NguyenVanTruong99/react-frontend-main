import gql from "graphql-tag";
import { baseFragment } from "./fragments";

const listUserCardDetails = gql`
  query ListUserCardDetails($offsetAttributes: OffsetAttributes) {
    listUserCardDetails(offsetAttributes: $offsetAttributes) {
      ...UserCardDetailBase
    }
  }
  ${baseFragment}
`;

export { listUserCardDetails };
