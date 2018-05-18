Types::MutationType = GraphQL::ObjectType.define do
  name "Mutation"

  field :createResponse, Types::Response do
    description "Create a response"

    argument :response, ResponseInput

    resolve ->(_obj, args, _ctx) {
      resp = args.response
      savedResponse = Response.create(responder: resp.responder)

      answers = resp.answers.each do |answer|
        answer = Answer.create(
          response_id: savedResponse.id,
          question_id: answer.question_id,
          text: answer[:text],
          bool: answer[:bool],
          selections: answer[:selections]
        )
      end

      savedResponse
    }
  end
end

ResponseInput = GraphQL::InputObjectType.define do
  name "ResponseInput"
  description "Properties for creating a Response with related Answers"

  argument :responder, !types.String do
    description "Name of person responding"
  end

  argument :answers, types[AnswerInputObject] do
    description "List of answer objects"
  end
end

AnswerInputObject = GraphQL::InputObjectType.define do
  name "AnswerInput"

  input_field :question_id, !types.ID
  input_field :text, types.String
  input_field :bool, types.Boolean
  input_field :selections, types[types.String]
end
