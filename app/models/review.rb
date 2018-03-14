class Review < ApplicationRecord
  validates :spot_id, :author_id, :body, :accuracy, :communication, :cleanliness, :location, :checkin, :value, presence: true

  belongs_to :spot,
    primary_key: :id,
    class_name: :Spot,
    foreign_key: :spot_id

  belongs_to :author,
    primary_key: :id,
    class_name: :User,
    foreign_key: :author_id

end
