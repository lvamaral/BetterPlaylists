class AddPublicToplaylists < ActiveRecord::Migration[5.0]
  def change
    add_column :playlists, :public, :boolean, null: false
    change_column_default(:playlists, :art_url, 'album_art/sample.jpg')
  end
end
