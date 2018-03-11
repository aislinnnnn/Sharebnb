export const fetchSpots = filters => {
   
  return $.ajax({
    method: "GET",
    url: "/api/spots",
    data: filters
  });
};

export const fetchSpot = id => {
  return $.ajax({
    method: "GET",
    url: `/api/spots/${id}`,
  });
};
