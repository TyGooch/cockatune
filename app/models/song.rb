class Song < ActiveRecord::Base
  validates: :title, presence: true
  validates :length, presence: true
  validates :artist_id, presence: true
  validates :album_id, presence: true
end
