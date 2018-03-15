json.extract! @review, :id, :spot_id, :author_id, :body, :accuracy, :communication, :cleanliness, :location, :checkin, :value, :created_at
json.author @review.author
