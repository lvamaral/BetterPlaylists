class Api::PlaylistsController < ApplicationController
  def index
    current_user_id = params[:currentUser_id]
    if params[:currentUser_id] == nil
      @playlists = Playlist.all.where("public = true")
    else
      @playlists = Playlist.joins(:users).where("users.id = ?", current_user_id)
    end
    render :index
  end

  def show
    @playlist = Playlist.find(params[:id])
  end

  def create
    @playlist = Playlist.new(playlist_params)
    if @playlist.save
      render :show
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def destroy
    @playlist = Playlist.find(params[:id])
    @playlist.destroy
    render :show
  end

  private

  def playlist_params
    params.require(:playlist).permit(:title, :creator_id, :public, user_ids: [])
  end
end
