class Api::PlaylistMembershipsController < ApplicationController
  def create
    PlaylistMembership.create(user_id: params[:user_id], playlist_id: params[:playlist_id])
  end

  def delete

  end
end
