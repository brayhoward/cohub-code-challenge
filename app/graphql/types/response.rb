Types::Response = GraphQL::ObjectType.define do
  name 'Response'

  field :id, types.ID
  field :responder, types.String
end
