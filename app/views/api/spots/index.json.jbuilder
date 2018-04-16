@spots.each do |spot|
  json.set! spot.id do
    json.extract! spot, :id, :title, :location, :price, :lat, :lng
    json.image_url asset_path(spot.image.url)
    json.average_rating spot.average_rating
    json.average_accuracy spot.average_accuracy
    json.average_communication spot.average_communication
    json.average_cleanliness spot.average_cleanliness
    json.average_location spot.average_location
    json.average_checkin spot.average_checkin
    json.average_value spot.average_value
  end
end
