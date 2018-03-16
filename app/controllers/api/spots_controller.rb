class Api::SpotsController < ApplicationController
  def index

    @spots = Spot.in_bounds(params[:bounds]) || Spot.all

    if params[:maxGuests]
      max_num = params[:maxGuests]
      @spots = @spots.where('num_guests >= ?', max_num)
    end
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
    @spot = Spot.new(spot_params)
  end

  def spot_params
    params.require(:spot).permit(:id, :title, :location, :price, :host_id, :num_guests, :num_beds, :num_baths, :num_bedrooms, :description, :rules, :image_url, :bounds, :maxGuests, :image)
  end

end
