@spots.each do |spot|
  json.set! spot.id do
    json.extract! spot, :id, :title, :location, :price, :image_url
  end
end
