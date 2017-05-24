class PlaylistSong < ApplicationRecord
  validates :song, :playlist, :user, presence: true;

  belongs_to :song
  belongs_to :playlist
  belongs_to :user
end
