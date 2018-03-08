class CreateSpots < ActiveRecord::Migration[5.1]
  def change
    create_table :spots do |t|
      t.string :title, null:false
      t.string :location, null:false
      t.float :price, null:false
      t.integer :host_id, null:false
      t.integer :num_guests, null:false
      t.integer :num_beds, null:false
      t.integer :num_baths, null:false
      t.integer :num_bedrooms, null:false
      t.string :description, null:false
      t.string :rules
      t.string :image_url

      t.timestamps
    end
  end
end
