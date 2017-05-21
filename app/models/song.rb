class Song < ApplicationRecord
  has_many :playlist_songs

  has_many :uploaders,
  through: :playlist_songs,
  source: :user

end
