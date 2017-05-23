class AddPublicToplaylists < ActiveRecord::Migration[5.0]
  def change
    add_column :playlists, :public, :boolean, null: false
  
  end
end
