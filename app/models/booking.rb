class Booking < ApplicationRecord
  validates :spot_id, :user_id, :check_in, :check_out, presence:true
  validates_date :check_in, :check_out
  validates :check_in, :check_out, :timeliness => {:on_or_before => lambda {Date.current + 1095}}
  validates :check_in, :timeliness => {:on_or_after => lambda {Date.current}, :type => :date}
  validate :valid_num_guests

  belongs_to :user
  belongs_to :spot

  def valid_num_guests
    if num_guests > self.spot.num_guests
      errors.add(:booking, " cannot be made for more guests than the home allows.")
    end
  end

end
