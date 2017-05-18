Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :playlist, only: [:new,:create,:destroy,:edit,:show,:index]
    resources :songs, only: [:index]
  end

  root "static_pages#root"
end
