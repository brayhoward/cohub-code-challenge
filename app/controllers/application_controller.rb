class ApplicationController < ActionController::Base
  before_action :set_auth_key

  def set_auth_key
    @auth_key = "3BMYWLoj2psjcezUeOct"
  end
end
