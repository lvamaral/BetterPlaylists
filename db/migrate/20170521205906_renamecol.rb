class Renamecol < ActiveRecord::Migration[5.0]
  def change
    rename_column :playlists, :creator, :creator_id
  end
end
