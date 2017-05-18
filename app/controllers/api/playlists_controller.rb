class Api::PlaylistsController < ApplicationController
  def index
    @playlists = Playlist.all
  end

  def show
    @playlist = Playlist.find(params[:id])
  end

  def create
    
  end

  def edit

  end

  def delete

  end

  private

  def playlist_params
    params.require(:playlist).permit(:title)
  end



end
