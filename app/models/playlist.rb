class Playlist < ApplicationRecord
  validates :title, presence: true, length: {maximum: 30}

  has_many :playlist_memberships, dependent: :destroy, inverse_of: :playlist

  has_many :users,
  through: :playlist_memberships


end
