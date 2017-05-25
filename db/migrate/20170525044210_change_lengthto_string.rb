class ChangeLengthtoString < ActiveRecord::Migration[5.0]
  def change
    change_column(:songs, :length, :string)
  end
end
