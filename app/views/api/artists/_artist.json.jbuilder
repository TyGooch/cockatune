json.extract! artist, :id, :name, :genre, :artist_picture_url, :header_image_url
json.albums artist.albums
json.songs artist.songs
