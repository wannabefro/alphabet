class WordquizSerializer < ActiveModel::Serializer
  attributes :id, :created_at, :finished_at
end
