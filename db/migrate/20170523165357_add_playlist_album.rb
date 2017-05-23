class AddPlaylistAlbum < ActiveRecord::Migration[5.0]
  def change
    add_column :playlists, :art_url, :string
    
  end
end
