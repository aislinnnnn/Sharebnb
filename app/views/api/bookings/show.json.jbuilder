json.extract! @booking, :id, :spot_id, :user_id, :check_in, :check_out
json.spot @booking.spot
json.user @booking.user
