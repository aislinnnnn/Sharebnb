class Spot < ApplicationRecord

  has_attached_file :image, default_url: 'home-default.jpg'
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :user,
    primary_key: :id,
    class_name: :User,
    foreign_key: :host_id
    
  has_many :bookings
  has_many :reviews


  def self.in_bounds(bounds)

    max_lat = bounds[:northEast][:lat]
    max_lng = bounds[:northEast][:lng]
    min_lat = bounds[:southWest][:lat]
    min_lng = bounds[:southWest][:lng]

    Spot.where('lat < ?', max_lat)
         .where('lat > ?', min_lat)
         .where('lng < ?', max_lng)
         .where('lng > ?', min_lng)
  end

  def average_rating
    if self.reviews.length == 0
      return 0
    end
    sum = 0
    self.reviews.each do |review|
      sum += review.average_rating
    end
    sum/ (self.reviews.length)

  end


end
