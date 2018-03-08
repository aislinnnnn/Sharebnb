@spots.each do |spot|
  json.set! spot.id do
    json.extract! spot, :title, :location, :price
  end
end
