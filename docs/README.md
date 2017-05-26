# BetterPlaylists
BetterPlaylists is a fullstack project inspired by Spotify that aims to provide better playlist collaboration between friends.

<a href="https://betterplaylists.herokuapp.com/#/">Live Website</a>

<h2>Minimum Viable Product</h2>
<p>BetterPlaylists is a web application that extends the basic functionality of Spotify by providing a better system to create collaborative playlists. It is built using Ruby on Rails, PostgreSQL, and React/Redux. By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:</p>
<ul>
<li>New account creation, login, and guest/demo login</li>
<li>A production README</li>
<li>Hosting on Heroku</li>
<li>Playlist CRUD</li>
<li>Following playlists/Friending users</li>
<li>Music search</li>
<li>Continuous play while navigating site</li>
<li>(Bonus) Connect Spotify API</li>
<li>(Bonus) Playlist collaboration with up/down voting feature on individual songs</li>
</ul>

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md




<h2>Implementation Timeline</h2>

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Playlist Model, API, and components (4 days)
**Objective:** Playlists can be created, viewed, edited and destroyed through the API.

**Sub-Objective:** User base can be searched to add users to playlists.

**Sub-Objective:** Playlists display more info on sidebar.

### Phase 3: Song Search and Adding (2 days)
**Objective:** Songs can be searched and added to playlists.

### Phase 4: Voting System (1 day)
**Objective:** Songs can be up or down voted. Songs with enough negative votes get removed from playlist

### Phase 5: Play Bar (1 day)
**Objective:** Songs can be listened to from any point in the app

### Phase 6 (BONUS): Connect with Spotify API
**Objective:** Use Spotify API for logging in, song searching, and playlist importing/exporting
