json.extract! artist, :id, :name, :genre, :artist_picture_url
json.albums artist.albums
json.songs artist.songs
