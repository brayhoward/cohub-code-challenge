Types::MutationType = GraphQL::ObjectType.define do
  name "Mutation"

  field :createResponse, Types::Response do
    description "Create a response"

    argument :responder, !types.String

    resolve ->(_obj, args, _ctx) {
      Response.create(responder: args.responder)
    }
  end
end
