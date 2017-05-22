class ChangeLengthTypeAgain < ActiveRecord::Migration[5.0]
  def change
    remove_column :songs, :length
    add_column :songs, :length, :integer

  end
end
