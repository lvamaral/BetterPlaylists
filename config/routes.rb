Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :show, :update]
    resource :session, only: [:create, :destroy, :show]
    resources :playlists, only: [:create, :destroy, :show, :update, :index]
    resources :songs, only: [:index]
    resources :playlist_songs, only: [:create, :update]
    resources :playlist_memberships, only: [:create, :delete, :destroy]
    resources :song_votes, only: [:create, :update, :index]
  end

  root "static_pages#root"
end
