class Review < ApplicationRecord
  validates :spot_id, :author_id, :body, :accuracy, :communication, :cleanliness, :location, :checkin, :value, presence: true
  validate :allow_review

  belongs_to :spot,
    primary_key: :id,
    class_name: :Spot,
    foreign_key: :spot_id

  belongs_to :author,
    primary_key: :id,
    class_name: :User,
    foreign_key: :author_id

  def allow_review
    if Spot.find(self.spot_id).user.id == self.author_id
      errors.add(:review, " can not be made for own home posting.")
    end
  end

  def average_rating
    (self.accuracy + self.communication + self.cleanliness + self.location + self.checkin + self.value)/6
  end

  def average_accuracy
    spot_id = self.spot_id
    Review.where("spot_id = ?", spot_id).average(:accuracy).to_f
  end


end
