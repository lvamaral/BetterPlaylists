class AddDefaultPicUser < ActiveRecord::Migration[5.0]
  def change
    change_column_default(:users, :image_url, "user_pic/sample.png")
  end
end
