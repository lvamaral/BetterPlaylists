class Api::PlaylistSongsController < ApplicationController
  def create
    @playlist_song = PlaylistSong.new(playlist_song_params)
    @playlist_song.save

  end

  def update

  end


	private

	def playlist_song_params
		params.require(:playlist_song).permit(:song_id, :user_id, :playlist_id)
	end
end
