class AddNotNullToColm < ActiveRecord::Migration[5.0]
  def change
    change_column_null :playlist_memberships, :user_id, null: false
    change_column_null :playlist_memberships, :playlist_id, null: false
    change_column_null :playlists, :art_url, null: false
  end
end
