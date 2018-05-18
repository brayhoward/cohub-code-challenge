Types::Answer = GraphQL::ObjectType.define do
  name 'Answer'

  field :question_id, types.ID
  field :text, types.String
  field :bool, types.Boolean
  field :selections, types[types.String]
end