class Album < ActiveRecord::Base
  validates :title, presence: true
  validates :artist_id, presence: true

  belongs_to :artist
  has_many :songs
end
