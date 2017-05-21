class Adduploadercol < ActiveRecord::Migration[5.0]
  def change
    add_column(:playlist_songs, :user_id, :integer) 
  end
end
