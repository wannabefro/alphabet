class Api::V1::QuestionsController < ApplicationController
  def create
    @question = Question.new(question_params)
    if @question.save
      render json: @question, status: :created
    else
      render json: @question.errors, status: :unprocessable_entity
    end
  end

  def update
    @question = Question.find(params[:id]);
    if @question.update(question_params)
      render json: @question, status: 200
    else
      render json: @question.errors, status: :unprocessable_entity
    end
  end

  private
  def question_params
    params.require(:question).permit(:wordquiz_id, :letter, :correct)
  end
end
