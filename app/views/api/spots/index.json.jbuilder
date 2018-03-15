@spots.each do |spot|
  json.set! spot.id do
    json.extract! spot, :id, :title, :location, :price, :lat, :lng
    json.image_url asset_path(spot.image.url)
    json.average_rating spot.average_rating
  end
end
