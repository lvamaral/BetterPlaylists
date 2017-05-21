class PlaylistSong < ApplicationRecord
  belongs_to :song
  belongs_to :playlist
  belongs_to :user
end
