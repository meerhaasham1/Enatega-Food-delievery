// app/components/Restaurant.tsx
import { restaurantList } from "../apollo/queries"; // Import query
import { useLazyQuery } from "@apollo/client";
import { Card } from "primereact/card";
import { RestaurantInterface, Coordinates } from "../utils/interfaces"; // Import types
import { useEffect } from "react";
import Image from "next/image";

export const Restaurant = ({ coors }: { coors: Coordinates }) => {
  const [getRestaurants, { data, loading, error }] = useLazyQuery(restaurantList);

  useEffect(() => {
    if (coors.longitude && coors.latitude) {
      getRestaurants({
        variables: {
          longitude: coors.longitude,
          latitude: coors.latitude,
        },
      });
    }
  }, [coors, getRestaurants]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching restaurants: {error.message}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4 mb-8">
      {data?.nearByRestaurants?.restaurants.map(
        (restaurant: RestaurantInterface) => (
          <Card
            key={restaurant._id}
            title={restaurant.name}
            className="p-3 text-center rounded-3xl bg-green-300 hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src={restaurant.image}
              alt={restaurant.name}
              className="mx-auto mb-4 rounded-2xl"
              width={400}
              height={200}
              style={{ objectFit: "cover" }}
            />
            <div className="flex justify-center items-center">
              <i className="pi pi-star-fill mr-2 text-green-900 font-bold"></i>
              <span className="font-extrabold">
                {restaurant.reviewData?.ratings ?? 'N/A'}
              </span>{" "}
              /5 ({restaurant.reviewData?.total ?? 'N/A'})
            </div>
            <p className="font-bold mt-2">Delivery Time: {restaurant.deliveryTime} Minutes</p>
          </Card>
        )
      )}
    </div>
  );
};
