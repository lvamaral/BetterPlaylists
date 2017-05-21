class Adduploader < ActiveRecord::Migration[5.0]
  def change
    remove_column(:playlist_songs, :user_id)
  
  end
end
