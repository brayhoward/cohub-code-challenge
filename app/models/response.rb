class Response < ApplicationRecord
  validates :responder, presence: true

  has_many :answers
end
