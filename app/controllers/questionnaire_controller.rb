class QuestionnaireController < ApplicationController
  def index; end

  def authenticate
    if params[:password] === "veryhardpassword"
      cookies[:auth_key] = "LZxKXtOz9tVffA===="
      head :ok

    else
      head :forbidden
    end
  end
end
