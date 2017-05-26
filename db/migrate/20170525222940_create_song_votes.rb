class CreateSongVotes < ActiveRecord::Migration[5.0]
  def change
    create_table :song_votes do |t|
      t.integer :type, null: false
      t.integer :user_id, null: false, foreign_key: true
      t.integer :song_id, null: false, foreign_key: true
      t.integer :playlist_id, null: false, foreign_key: true
      t.timestamps
    end
    add_index :song_votes, [:song_id, :user_id, :playlist_id], unique: true
  end
end
