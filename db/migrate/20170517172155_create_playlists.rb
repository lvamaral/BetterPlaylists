class CreatePlaylists < ActiveRecord::Migration[5.0]
  def change
    create_table :playlists do |t|
      t.string :title, null: false
      t.timestamps
    end
      add_index :playlists, :title
  end

end
