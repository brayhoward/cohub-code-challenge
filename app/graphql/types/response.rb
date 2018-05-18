Types::Response = GraphQL::ObjectType.define do
  name 'Response'

  field :responder, types.String
  field :answers, types[Types::Answer]
end
