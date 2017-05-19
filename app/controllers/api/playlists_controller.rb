class Api::PlaylistsController < ApplicationController
  def index
    # if params[:query]
    #   @playlists = Playlist.all
    # else
    #   @playlists = Playlist.all
    # end
    @playlists = Playlist.all
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
    params.require(:playlist).permit(:title, user_ids: [])
  end
end
