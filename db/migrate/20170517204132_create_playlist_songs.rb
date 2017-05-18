class CreatePlaylistSongs < ActiveRecord::Migration[5.0]
  def change
    create_table :playlist_songs do |t|
      t.integer :song_id, null: false, foreign_key: true
      t.integer :playlist_id, null: false, foreign_key: true
      t.integer :up_votes, null: false, default: 0
      t.integer :down_votes, null: false, default: 0
      t.timestamps
    end
    add_index :playlist_songs, [:song_id, :playlist_id], unique: true
  end
end
