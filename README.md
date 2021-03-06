# BetterPlaylists

[BetterPlaylists Live]: http://www.betterplaylists.com/#/login

BetterPlaylists is a full-stack web application inspired by Spotify. The idea behind the website is to provide a better interface to manage collaborative playlists, making song sharing more social. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.  

![homepage](docs/screencasts/home.png)


## Features & Implementation

As the name suggests, the website revolves around creating playlists. To that end, the main features consist of:

<ol>
  <li>Playlist creation, editing, and sharing with users</li>
  <li>Ability to follow/unfollow playlists</li>
  <li>Ability to search and add songs</li>
  <li>Ability to play songs continuously from a playlist</li>
  <li>User pages</li>
</ol>


### Playlist Creation

![demo](docs/screencasts/make_playlist.gif)

Playlists can be public (they show on Explore for all users) or private. Users are added through a search input that fires an index query on the backend given typed parameters, and once a playlist is created, relevant playlist_user associations are automatically made.

### Ability to follow/unfollow playlists

![demo](docs/screencasts/follow.gif)

If a user accesses a private playlist, the user is automatically redirected to the home page. Public playlists, however, can be seen and followed. When a user follows a playlists, a playlist_membership association is made on the backend, and when unfollowing, the association is destroyed. The app’s state is updated with each playlist’s membership, and the components are re-rendered appropriately.


### Ability to search and add songs

![demo](docs/screencasts/addsong.gif)

Songs can only be added to owned or followed playlists. The Song Search component updates to show if a song is already on a playlist (and cannot be added again) or if available to add.

![song_icon_code](docs/screencasts/addicon.png)
Code snippet showing how the add icon conditionally re-renders.


### Ability to play songs continuously from a playlist

![demo](docs/screencasts/playsong.gif)

Songs are played in a custom playbar component. Users can browse to any part of the website without interrupting a song. Playlists hold songs in an array to handle logic of skipping and going back to a previous song.

### User pages

![homepage](docs/screencasts/userpage.png)

User Pages show user statistics like playlists and number of songs added. It aims to emphasize the social aspect of the website. There are no artists or album pages as is typical of Spotify-like apps - this is about the users.

## Project Design

BetterPlaylists was designed and built in two weeks.

[Original Proposal](./docs/README.md)


## Additional Features

The next phase in this application is to implement the ability to vote on songs and connect to song browsing APIs such as Spotify.
