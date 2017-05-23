class AddAlbumArt < ActiveRecord::Migration[5.0]
  def change
    add_column :songs, :art_url, :string
  end
end
