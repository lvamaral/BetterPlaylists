class Song < ApplicationRecord
  validates :title, presence: true;

  has_many :playlist_songs

  has_many :uploaders,
  through: :playlist_songs,
  source: :user

end
