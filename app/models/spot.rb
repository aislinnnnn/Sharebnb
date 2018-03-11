class Spot < ApplicationRecord

  has_attached_file :image, default_url: 'home-default.jpg'
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  def self.in_bounds(bounds)

    max_lat = bounds[:northEast][:lat]
    max_lng = bounds[:northEast][:lng]
    min_lat = bounds[:southWest][:lat]
    min_lng = bounds[:southWest][:lng]
    debugger
    Spot.where('lat < ?', max_lat)
         .where('lat > ?', min_lat)
         .where('lng < ?', max_lng)
         .where('lng > ?', min_lng)
  end

end
