class Api::SpotsController < ApplicationController
  def index
    @spots = Spot.all
  end

  def show
    @spot = Spot.find(params[:id])

    if @spot
      render "api/spots/show"
    else
      render json: ["spot not found"], status:404
    end
  end

  def create
  end

  def spot_params
    params.require(:spot).permit(:id, :title, :location, :price, :host_id, :num_guests, :num_beds, :num_baths, :num_bedrooms, :description, :rules, :image_url)
  end

end
