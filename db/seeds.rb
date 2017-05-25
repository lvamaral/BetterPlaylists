# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# //Songs
# Song.create(title: "BLOOD", artist: "Kendrick Lamar", album: "DAMN", song_url: "songs/BLOOD.mp3", length: 119, art_url: "album_art/damn.jpg")
# Song.create(title: "DNA", artist: "Kendrick Lamar", album: "DAMN", song_url: "songs/DNA.mp3", length: 186, art_url: "album_art/damn.jpg")
# Song.create(title: "YAH", artist: "Kendrick Lamar", album: "DAMN", song_url: "songs/YAH.mp3", length: 160, art_url: "album_art/damn.jpg")
# Song.create(title: "ELEMENT", artist: "Kendrick Lamar", album: "DAMN", song_url: "songs/ELEMENT.mp3", length: 209, art_url: "album_art/damn.jpg")
# Song.create(title: "FEEL", artist: "Kendrick Lamar", album: "DAMN", song_url: "songs/FEEL.mp3", length: 215, art_url: "album_art/damn.jpg")
#
# Song.create(title: "Helix", artist: "Flume", album: "Skin", song_url: "songs/Helix.mp3", length: 210, art_url: "album_art/skin.jpg")
# Song.create(title: "Never Be Like You", artist: "Flume", album: "Skin", song_url: "songs/Never Be Like You (feat. Kai).mp3", length: 233, art_url: "album_art/skin.jpg")
# Song.create(title: "Lose It", artist: "Flume", album: "Skin", song_url: "songs/Lose It (feat. Vic Mensa).mp3", length: 226, art_url: "album_art/skin.jpg")
# Song.create(title: "Pika", artist: "Flume", album: "Skin", song_url: "songs/Pika.mp3", length: 116, art_url: "album_art/skin.jpg")
# Song.create(title: "When Everything Was New", artist: "Flume", album: "Skin", song_url: "songs/When Everything Was New.mp3", length: 207, art_url: "album_art/skin.jpg")
# Song.create(title: "Free", artist: "Flume", album: "Skin", song_url: "songs/Free.mp3", length: 176, art_url: "album_art/skin.jpg")
#
# Song.create(title: "Good Morning", artist: "Kanye West", album: "Graduation", song_url: "songs/Good Morning.mp3", length: 195, art_url: "album_art/graduation.jpg")
# Song.create(title: "Champion", artist: "Kanye West", album: "Graduation", song_url: "songs/Champion.mp3", length: 168, art_url: "album_art/graduation.jpg")
# Song.create(title: "Stronger", artist: "Kanye West", album: "Graduation", song_url: "songs/Stronger.mp3", length: 312, art_url: "album_art/graduation.jpg")
# Song.create(title: "I Wonder", artist: "Kanye West", album: "Graduation", song_url: "songs/I Wonder.mp3", length: 243, art_url: "album_art/graduation.jpg")

require "CSV"

CSV.foreach("public/songlist.csv") do |row|
  title = row[0]
  length = row[1]
  artist = row[2]
  album = row[3]
  art_url = row[4]
  trackn = row[5]
  Song.create(title: title, artist: artist, album: album, song_url: "songs/#{title}.mp3", length: length, art_url: "album_art/#{art_url}")
end


# //People
User.create(username: "lucas", password: "password", email: "hot@hotmail.com", image_url: "user_pic/86.jpg")
User.create(username: "alex", password: "password", email: "hot2@hotmail.com", image_url: "user_pic/20.jpg")
User.create(username: "john", password: "password", email: "hot3@hotmail.com", image_url: "user_pic/33.jpg")
User.create(username: "michael", password: "password", email: "hot4@hotmail.com", image_url: "user_pic/34.jpg")
User.create(username: "rodrigo", password: "password", email: "hot5@hotmail.com", image_url: "user_pic/36.jpg")
User.create(username: "jean machine", password: "password", email: "hot6@hotmail.com", image_url: "user_pic/74.jpg")

User.create(username: "min", password: "password", email: "hot7@hotmail.com", image_url: "user_pic/48.jpg")
User.create(username: "anna", password: "password", email: "hot8@hotmail.com", image_url: "user_pic/62.jpg")
User.create(username: "gregoria", password: "password", email: "hot9@hotmail.com", image_url: "user_pic/68.jpg")
User.create(username: "michaela", password: "password", email: "hot99@hotmail.com", image_url: "user_pic/70.jpg")
User.create(username: "margot", password: "password", email: "hot999@hotmail.com", image_url: "user_pic/82.jpg")
User.create(username: "alexa", password: "password", email: "hot999s@hotmail.com", image_url: "user_pic/93.jpg")

# Playlists
Playlist.create(title: "Party123", creator_id: 1, art_url: "album_art/skin.jpg", public: false)
Playlist.create(title: "Chill", creator_id: 1, art_url: "album_art/graduation.jpg", public: false)
Playlist.create(title: "TogaFriday", creator_id: 2, art_url: "album_art/damn.jpg", public: false)
Playlist.create(title: "No Lucas Here", creator_id: 2, art_url: "album_art/skin.jpg", public: false)
Playlist.create(title: "Country", creator_id: 1, art_url: "album_art/country.png", public: true)
Playlist.create(title: "EDM", creator_id: 1, art_url: "album_art/edm.png", public: true)
Playlist.create(title: "Pop", creator_id: 3, art_url: "album_art/pop.png", public: true)
Playlist.create(title: "RnB", creator_id: 4, art_url: "album_art/rnb.png", public: true)
Playlist.create(title: "Rock", creator_id: 4, art_url: "album_art/rock.png", public: true)
Playlist.create(title: "Study", creator_id: 5, art_url: "album_art/study.png", public: true)
Playlist.create(title: "Hip Hop", creator_id: 2, art_url: "album_art/hip hop.png", public: true)
Playlist.create(title: "Latino", creator_id: 2, art_url: "album_art/latino.png", public: true)
Playlist.create(title: "Summer", creator_id: 5, art_url: "album_art/summer.png", public: true)
Playlist.create(title: "Lounge", creator_id: 3, art_url: "album_art/lounge.png", public: true)

# playlist(4-13)
# ppl(0-11)


# playlist_memberships
PlaylistMembership.create(user_id: 1, playlist_id: 1)
PlaylistMembership.create(user_id: 2, playlist_id: 1)
PlaylistMembership.create(user_id: 3, playlist_id: 1)
PlaylistMembership.create(user_id: 4, playlist_id: 1)

PlaylistMembership.create(user_id: 1, playlist_id: 2)
PlaylistMembership.create(user_id: 4, playlist_id: 2)
PlaylistMembership.create(user_id: 5, playlist_id: 2)

PlaylistMembership.create(user_id: 5, playlist_id: 3)
PlaylistMembership.create(user_id: 1, playlist_id: 3)
PlaylistMembership.create(user_id: 2, playlist_id: 3)

50.times do
  PlaylistMembership.create(user_id: rand(2..11), playlist_id: rand(4..13))
end


#playlist_songs
PlaylistSong.create(song_id: 1, playlist_id: 1, up_votes: 0, down_votes: 0, user_id: 1)
PlaylistSong.create(song_id: 2, playlist_id: 1, up_votes: 0, down_votes: 0, user_id: 2)
PlaylistSong.create(song_id: 3, playlist_id: 1, up_votes: 0, down_votes: 0, user_id: 1)
PlaylistSong.create(song_id: 4, playlist_id: 1, up_votes: 0, down_votes: 0, user_id: 3)
PlaylistSong.create(song_id: 5, playlist_id: 1, up_votes: 0, down_votes: 0, user_id: 4)
