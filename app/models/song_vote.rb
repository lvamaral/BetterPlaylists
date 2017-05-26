class SongVote < ApplicationRecord
  validates :user, :playlist, :song, presence: true
  validates :user_id, uniqueness: {scope: [:playlist_id, :song_id]}

  belongs_to :user
  belongs_to :playlist
  belongs_to :song

end
