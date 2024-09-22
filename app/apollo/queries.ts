import { gql } from "@apollo/client";

export const restaurantList = gql`
  query Restaurants($latitude: Float, $longitude: Float) {
    nearByRestaurants(latitude: $latitude, longitude: $longitude) {
      offers {
        _id
        name
        tag
        restaurants
      }
      sections {
        _id
        name
        restaurants
      }
      restaurants {
        _id
        name
        image
        slug
        address
        location {
          coordinates
        }
        deliveryTime
        minimumOrder
        tax
        reviewData {
          total
          ratings
          reviews {
            _id
          }
        }
        categories {
          _id
          title
          foods {
            _id
            title
          }
        }
        rating
        isAvailable
        openingTimes {
          day
          times {
            startTime
            endTime
          }
        }
      }
    }
  }
`;

export const restaurant = gql`
  query Restaurant($id: String, $slug: String) {
    restaurant(id: $id, slug: $slug) {
      _id
      orderId
      orderPrefix
      name
      image
      slug
      address
      location {
        coordinates
      }
      deliveryTime
      minimumOrder
      tax
      reviewData {
        total
        ratings
        reviews {
          _id
          order {
            user {
              _id
              name
              email
            }
          }
          rating
          description
          createdAt
        }
      }
      categories {
        _id
        title
        foods {
          _id
          title
          image
          description
          variations {
            _id
            title
            price
            discounted
            addons
          }
        }
      }
      options {
        _id
        title
        description
        price
      }
      addons {
        _id
        options
        title
        description
        quantityMinimum
        quantityMaximum
      }
      zone {
        _id
        title
        tax
      }
      rating
      isAvailable
      openingTimes {
        day
        times {
          startTime
          endTime
        }
      }
    }
  }
`;
