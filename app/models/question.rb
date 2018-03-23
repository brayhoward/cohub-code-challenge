class Question < ApplicationRecord
  serialize :options, Array

  validates :position,
            presence: true,
            numericality: { greater_than_or_equal_to: 0 }
  validates :label, presence: true
  validates :field_type, presence: true
end
