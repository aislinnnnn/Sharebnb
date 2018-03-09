class AddLatLngToSpots < ActiveRecord::Migration[5.1]
  def change
    add_column :spots, :lat, :float
    add_column :spots, :lng, :float
  end
end
