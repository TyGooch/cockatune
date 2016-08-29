# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Users

- `GET /api/users`
  - User index/search
  - accepts `username` query param to list users by name
- `POST /api/users`
- `GET /api/users/:id`
- `PATCH /api/users/:id`
- `DELETE /api/users/:id`

### Artists

- `GET /api/artists`
  - Artists index/search
  - accepts `artist_name` query param to list artists by name
- `GET /api/artists/:id`

### Albums

- `GET /api/albums`
  - Albums index/search
  - accepts `album_name` query param to list albums by name
- `GET /api/albums/:id`

### Playlists

- `GET /api/playlists`
  - Playlist index/search
  - accepts `playlist_name` query param to list playlists by name
- `POST /api/playlists`
- `GET /api/playlists/:id`
- `PATCH /api/playlists/:id`
- `DELETE /api/playlists/:id`

### Songs

- `GET /api/songs`
  - Songs index/search
  - accepts `song_name` query param to list songs by name
- `GET /api/songs/:id`
