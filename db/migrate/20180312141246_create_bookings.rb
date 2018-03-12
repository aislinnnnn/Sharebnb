class CreateBookings < ActiveRecord::Migration[5.1]
  def change
    create_table :bookings do |t|
      t.integer :spot_id, null:false
      t.integer :user_id, null:false
      t.date :check_in, null:false
      t.date :check_out, null:false
      t.integer :num_guests
    end
  end
end
