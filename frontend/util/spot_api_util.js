export const fetchSpots = () => {
  return $.ajax({
    method: "GET",
    url: "/api/spots",
    error: err => console.log(err)
  });
};

export const fetchSpot = id => {
  return $.ajax({
    method: "GET",
    url: `/api/spots/${id}`,
    error: err => console.log(err)
  });
};
