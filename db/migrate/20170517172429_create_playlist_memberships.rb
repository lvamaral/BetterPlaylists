class CreatePlaylistMemberships < ActiveRecord::Migration[5.0]
  def change
    create_table :playlist_memberships do |t|
      t.integer :user_id, foreign_key: true
      t.integer :playlist_id, foreign_key: true
      t.index :user_id
      t.index :playlist_id
      t.timestamps
    end
    add_index :playlist_memberships, [:user_id, :playlist_id], unique: true
  end
end
