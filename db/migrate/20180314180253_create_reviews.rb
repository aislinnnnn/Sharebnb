class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.integer :spot_id, null:false
      t.integer :author_id, null:false
      t.string :body, null:false
      t.integer :accuracy, null:false
      t.integer :communication, null:false
      t.integer :cleanliness, null:false
      t.integer :location, null:false
      t.integer :checkin, null:false
      t.integer :value, null:false

      t.timestamps
    end
  end
end
