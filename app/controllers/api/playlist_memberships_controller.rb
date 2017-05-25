class Api::PlaylistMembershipsController < ApplicationController
  def create
    @pm = PlaylistMembership.create(user_id: params[:user_id], playlist_id: params[:playlist_id])
    render 'api/users/member'
  end

  def destroy
    @pm = PlaylistMembership.find_by_user_id_and_playlist_id(params[:user_id],params[:playlist_id])
    @pm.destroy
    render 'api/users/member'
  end
end
