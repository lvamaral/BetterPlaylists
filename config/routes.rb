Rails.application.routes.draw do
  get 'playlists/new'

  get 'playlists/create'

  get 'playlists/delete'

  get 'playlists/edit'

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
  end

  root "static_pages#root"
end
