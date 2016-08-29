## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Explore
 - Sidebar

**SideBarContainer**
 - Song
 - Search
 - AddToPlaylistButton

**UserContainer**
 - UserHeader
 - PlaylistIndex

**ArtistContainer**
 - ArtistHeader
  + AlbumIndex

**AlbumContainer**
 - AlbumHeader
  + SongIndex

**PlaylistContainer**
 - PlaylistHeader
  + PlaylistIndex

**SearchResultsContainer**
 - Search
 - SongIndex
 - ArtistIndex
 - AlbumIndex
 - PlaylistIndex

**PlaylistIndex**
 - AlbumIndexItem
  + AlbumDetail
   * AlbumTools
    - SelectAlbumButton
    * Album

**AlbumIndex**
 - AlbumIndexItem
  + AlbumDetail
   * AlbumTools
    - SelectAlbumButton
    * Album

**SongIndex**
 - SongIndexItem
  + SongDetail
   * SongTools
    - PlayButton
    - AddToPlaylistButton
    * Song

**NewPlaylistContainer**
 - NewPlaylist
  - NewPlaylistButton

**Search**

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/user/:userId" | "UserContainer" |
| "/home/artist/:artistId" | "ArtistContainer" |
| "/home/artist/:artistId/album/:albumId" | "AlbumContainer" |
| "/home/playlist/:playlistId" | "PlaylistContainer" |
| "/home/search-results" | "SearchResultsContainer"
| "/new-playlist" | "NewPlaylistContainer" |
