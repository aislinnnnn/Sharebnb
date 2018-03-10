class Spot < ApplicationRecord

  has_attached_file :image, default_url: 'home-default.jpg'
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  def self.in_bounds(bounds)
    
  end

end
