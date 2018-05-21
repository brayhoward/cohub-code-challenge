class QuestionnaireController < ApplicationController
  def index; end

  def authenticate
    if params[:password] === "veryhardpassword"
      cookies[:auth_key] = "LZxKXtOz9tVffA"
      head :ok

    else
      render status: :forbidden
    end
  end
end
