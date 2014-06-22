class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :correct, :letter, :wordquiz_id
end
