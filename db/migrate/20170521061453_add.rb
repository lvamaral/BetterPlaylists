class Add < ActiveRecord::Migration[5.0]
  def change
    add_column(:songs, :length, :integer, null: false)
    add_index :songs, :length
  end
end
