class Change < ActiveRecord::Migration[5.0]
  def change
    rename_column :song_votes, :type, :vote_type
  end
end
