class AddCreator < ActiveRecord::Migration[5.0]
  def change
    add_column(:playlists, :creator, :integer, null: false)
    add_index :playlists, :creator
  end
end
