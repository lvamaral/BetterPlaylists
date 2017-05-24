class Adddefaultpicalbum < ActiveRecord::Migration[5.0]
  def change
    change_column_default(:playlists, :art_url, "album_art/sample.jpg")
  end
end
