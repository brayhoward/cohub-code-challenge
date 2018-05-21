class QuestionnaireController < ApplicationController
  def index; end

  def authenticate
    if params[:password] === "veryhardpassword"
      cookies[:auth_key] = @auth_key
      head :ok
    else
      head :forbidden
    end
  end
end
