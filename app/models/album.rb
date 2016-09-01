class Album < ActiveRecord::Base
  validates: :title, presence: true
  validates :artist_id, presence: true
end
