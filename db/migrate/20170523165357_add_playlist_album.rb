class AddPlaylistAlbum < ActiveRecord::Migration[5.0]
  def change
    add_column :playlists, :art_url, :string
    change_column(:playist, :art_url, default: "album_art/default_playlist.jpg")
  end
end
