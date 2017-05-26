<h1>BetterPlaylists</h1>


BetterPlaylists live

BetterPlaylists is a full-stack web application inspired by Spotify. The idea behind the website is to provide a better interface to manage collaborative playlists, making song sharing more social. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.  

[Front page pic]


Features & Implementation

As the name suggests, the website revolves around creating playlists. To that end, the main features revolve around:

Playlist creation, editing, and sharing with users
Ability to follow/unfollow playlists
Ability to search and add songs
Ability to play songs continuously from a playlist
User pages


Playlist Creation
![]

Playlists can be public (they show on Explore for all users) or private. Users are added through a search input that fires an index query on the backend given typed parameters, and once a playlist is created, relevant playlist_user associations are automatically made.

[code?]

Ability to follow/unfollow playlists

[ScreenCast Showing follow/unfollow plus song being able to be added]

If a user accesses a private playlist, the user is automatically redirected to the home page. Public playlists, however, can be seen and followed. When a user follows a playlists, a playlist_membership association is made on the backend, and when unfollowing, the association is destroyed. The app’s state is updated with each playlist’s membership, and the components are re-rendered appropriately.





III. Ability to search and add songs
[Screen cast following plus adding songs]

Songs can only be added to owned or followed playlists. Song search updates to show if a song is already on a playlist (and cannot be added again) or if available to add.

[Song icon code]


Ability to play songs continuously from a playlist
[Screen cast playing a song from the playlist and skipping/going back, navigating away]

Songs are played in a custom playbar component. Users can browse to any part of the website without interrupting a song. Playlists hold songs in an array to handle logic of skipping and going back to a previous song.

User pages
[Screen shot]

User Pages show user statistics like playlists and number of songs added. It aims to emphasize the social aspect of the website. There are no artists or album pages as is typical of Spotify-like apps - this is about the users.

Project Design
BetterPlaylists was designed and built in two weeks. View the original proposal.


Additional Features

The next phase in this application is to implement the ability to vote on songs and connect to song browsing APIs such as Spotify.
