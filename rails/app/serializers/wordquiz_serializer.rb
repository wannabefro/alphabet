class WordquizSerializer < ActiveModel::Serializer
  attributes :id, :started_at, :finished_at
end
