class Adduploader3 < ActiveRecord::Migration[5.0]
  def change
    add_index :playlist_songs, [:song_id, :user_id], unique: true
  end
end
