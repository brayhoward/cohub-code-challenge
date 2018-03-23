Types::Question = GraphQL::ObjectType.define do
  name 'Question'

  field :id, types.ID
  field :position, types.Int
  field :label, types.String
  field :field_type, types.String
  field :options, types[types.String]
  field :multiselect, types.Boolean
end
