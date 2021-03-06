class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  include ActionController::Caching::Pages
  protect_from_forgery with: :exception

  cache_sweeper :welcome_sweeper
end
