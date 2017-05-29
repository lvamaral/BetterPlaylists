class Song < ApplicationRecord
  validates :title, presence: true;

  has_many :playlist_songs
  has_many :song_votes

  has_many :uploaders,
  through: :playlist_songs,
  source: :user

  #  has_attached_file :song, default_url: "3.mp3"
  #   validates_attachment_content_type :song, content_type: /\Asong\/.*\Z/
end
