class RemoveIndex < ActiveRecord::Migration[5.0]
  def change
    remove_index :playlist_songs, ["song_id", "user_id"]
  end
end
