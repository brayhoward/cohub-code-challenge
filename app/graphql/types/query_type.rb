Types::QueryType = GraphQL::ObjectType.define do
  name 'Query'
  # Add root-level fields here.
  # They will be entry points for queries on your schema.

  field :ListQuestions, types[Types::Question] do
    description 'Returns a list of questions'
    resolve ->(_, _, _) { Question.order(position: :asc) }
  end
end
