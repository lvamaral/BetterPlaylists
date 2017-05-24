class Playlist < ApplicationRecord
  validates :title, presence: true, length: {maximum: 30}
  validates :creator_id, :art_url, presence: true;

  has_many :playlist_memberships, dependent: :destroy, inverse_of: :playlist
  has_many :users, through: :playlist_memberships

  has_many :playlist_songs, dependent: :destroy, inverse_of: :playlist
  has_many :songs, through: :playlist_songs

  belongs_to :creator,
  primary_key: :id,
  foreign_key: :creator_id,
  class_name: "User"

end
