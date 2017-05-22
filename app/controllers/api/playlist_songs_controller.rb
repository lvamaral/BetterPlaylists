class Api::PlaylistSongsController < ApplicationController
  def create
    @playlist_song = PlaylistSong.new(playlist_song_params)
    if @playlist_song.save
      @playlist = Playlist.find(params[:playlist_song][:playlist_id])
      render 'api/playlists/show'
    end

  end

  def update

  end


	private

	def playlist_song_params
		params.require(:playlist_song).permit(:song_id, :playlist_id, :user_id)
	end
end
