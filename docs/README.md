# Cockatune

[Heroku link][heroku] **Note:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Cockatune is a web application inspired by Spotify built using Ruby on Rails and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Song/Playlist CRUD
- [ ] Playlist sharing
- [ ] Continuous play while navigating site
- [ ] Following/Friending
- [ ] Explore page
- [ ] Infinite Scroll
- [ ] Production README [sample](docs/production_readme.md)

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Redux Structure][redux-structure]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-heirarchy.md
[redux-structure]: docs/redux-structure.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

- [ ] New Rails project
- [ ] `User` model/migration
- [ ] Back end authentication (session/password)
- [ ] `StaticPages` controller and root view
- [ ] Webpack & react/redux modules
- [ ] `APIUtil` to interact with the API
- [ ] Redux cycle for frontend authentication
- [ ] User signup/signin components
- [ ] Blank landing component (Explore page) after signup/signin
- [ ] Style signup/signin components
- [ ] Seed users
- [ ] Review phase 1

### Phase 2: Song Model, Album Model, Artist Model, API, and components (3 days)

**Objective:** Artists, Albums, and Songs can be viewed and clicked on. Songs will play continuously while navigating site.

- [ ] `Song` model
- [ ] `Album` model
- [ ] `Artist` model
- [ ] Seed database with test data
- Song components and respective Redux loops
  - [ ] `SongsIndex`
  - [ ] `SongIndexItem`
- [ ] Style respective components
- [ ] Seed songs

### Phase 3: User Profiles (2 day)

**Objective:** Users have profiles that can be created, read, edited and destroyed through the API.

- [ ] CRUD API for profiles (`ProfilesController`)
- [ ] JBuilder views for profiles
- [ ] Viewing profiles by user
- [ ] Seed profiles

### Phase 4: Playlists (1 day)

**Objective:** Songs belong to Playlists that can be created, read, edited and destroyed through the API.

- [ ] `Playlist` model
- [ ] User's have playlists that can be viewed on their profile
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for playlists (`PlaylistsController`)
- [ ] JBuilder views for playlists
- [ ] Adding songs to playlist requires a playlist
- [ ] Viewing songs by playlist
- [ ] Style playlist components
- [ ] Seed playlists

### Phase 5: Explore Feature (2 days)

**Objective:** Featured playlists listed on front page.

- [ ] Style views for exploring playlists
- [ ] Searching notes by tag
- [ ] Style search & tag components
- [ ] Seed tags with seed data
- [ ] Infinite scroll on explore page

### Bonus Features (TBD)
- [ ] Search songs by genre
