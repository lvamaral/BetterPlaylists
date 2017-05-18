class Playlist < ApplicationRecord
  validates :title, presence: true

  has_many :users,
  through: :playlist_memberships


end
