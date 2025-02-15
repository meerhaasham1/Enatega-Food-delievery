// app/apollo/queries.ts or queries.js
import { gql } from "@apollo/client";

export const restaurantList = gql`
  query GetNearbyRestaurants($latitude: Float!, $longitude: Float!) {
    nearByRestaurants(latitude: $latitude, longitude: $longitude) {
      restaurants {
        _id
        name
        image
        reviewData {
          ratings
          total
        }
        deliveryTime
      }
    }
  }
`;
