class Answer < ApplicationRecord
  serialize :selections, Array

  validates :question_id, presence: true
  validates :response_id, presence: true

  has_one :question
end
