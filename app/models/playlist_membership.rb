class PlaylistMembership < ApplicationRecord
  validates :user, :playlist, presence: true
  validates :user_id, uniqueness: {scope: :playlist_id}

  belongs_to :user
  belongs_to :playlist

end
