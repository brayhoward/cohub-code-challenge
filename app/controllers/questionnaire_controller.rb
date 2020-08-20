class QuestionnaireController < ApplicationController
  def index; end

  def authenticate
    if params[:password] === "veryhardpassword"
      cookies[:auth_key] = { value: @auth_key, expires: Time.zone.now + 1.week }
      head :ok
    else
      head :forbidden
    end
  end
end
