class Api::BookingsController < ApplicationController
  def index
    if current_user
      @bookings = Booking.where(user_id: current_user.id)
    end

    if @bookings
      render :index
    else
      render json: ["no bookings for this user"], status:404
    end
  end

  def show
    @booking = Booking.find(params[:id])

    if @booking
      render "api/bookings/show"
    else
      render json: ["booking not found"], status: 404
    end
  end

  def create
    @booking = Booking.new(booking_params)

    if @booking.save
      render "api/bookings/show"
    else
      render json: @booking.errors.full_messages, status:422
    end
  end

  def destroy
    @booking = Booking.find(params[:id])

    if @booking.destroy
      render :show
    else
      render json: @booking.errors.full_messages, status:422
    end
  end

  def booking_params
    params.require(:booking).permit(:id, :spot_id, :user_id, :check_in, :check_out, :num_guests)
  end

end
