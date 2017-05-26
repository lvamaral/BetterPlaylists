class RemoveSongCols < ActiveRecord::Migration[5.0]
  def change
    remove_column :playlist_songs, :up_votes
    remove_column :playlist_songs, :down_votes
  end
end
