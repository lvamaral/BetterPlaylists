class PlaylistMembership < ApplicationRecord
  validates :user, uniqueness: {scope: :playlist}

  has_many :users
  has_many :playlists

end
