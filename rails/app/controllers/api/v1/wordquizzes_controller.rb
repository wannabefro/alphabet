class Api::V1::WordquizzesController < ApplicationController
  def create
    @wordquiz = Wordquiz.new
    if @wordquiz.save
      render json: @wordquiz, status: :created
    else
      render json: @wordquiz.errors, status: :unprocessable_entity
    end
  end
end
