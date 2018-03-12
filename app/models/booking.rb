class Booking < ApplicationRecord
  validates :spot_id, :user_id, :check_in, :check_out, presence:true

  belongs_to :user
  belongs_to :spot 

end
