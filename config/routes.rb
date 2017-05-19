Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :playlists, only: [:create,:destroy,:show,:index]
    resources :songs, only: [:index]
  end

  root "static_pages#root"
end
