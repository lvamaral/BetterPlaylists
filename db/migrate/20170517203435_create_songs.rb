class CreateSongs < ActiveRecord::Migration[5.0]
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.string :artist, null: false
      t.string :album, null: false
      t.string :song_url, null: false
      t.index :song_url
      t.timestamps
    end
  end
end
