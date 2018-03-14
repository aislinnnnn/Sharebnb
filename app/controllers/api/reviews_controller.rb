class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.where(spot_id: params[:spotId] )

    if @reviews
      render :index
    else
      render json: ["no reviews for this spot"], status:404
    end
  end

  def create
    @review = Review.new(review_params)

    if @review.save
      render "api/reviews/show"
    else
      render json: @review.errors.full_messages, status:422
    end
  end

  def detroy
    @review = Review.find(params[:id])

    if @review.destroy
      render :index
    else
      render json: @review.errors.full_messages, status:422
    end
  end

  def review_params
    params.require(:review).permit(:id, :spot_id, :author_id, :body, :accuracy, :communication, :cleanliness, :location, :checkin, :value)
  end
end
