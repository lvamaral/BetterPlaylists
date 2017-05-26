
require "csv"

CSV.foreach("public/songlist.csv") do |row|
  title = row[0]
  length = row[1].to_s
  artist = row[2]
  album = row[3]
  art_url = row[4]
  Song.create(title: title, artist: artist, album: album, song_url: "songs/#{title}.mp3", length: length, art_url: "album_art/#{art_url}")
end


# //People
User.create(username: "guest", password: "password", email: "hot@hotmail.com", image_url: "user_pic/86.jpg")
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

User.create(username: "lindsay", password: "password", email: "hot9994s@hotmail.com", image_url: "user_pic/27.jpg")
User.create(username: "johnatan", password: "password", email: "ho4s@hotmail.com", image_url: "user_pic/100.jpg")
User.create(username: "monica", password: "password", email: "h994s@hoail.com", image_url: "user_pic/128.jpg")
User.create(username: "mike", password: "password", email: "t9994ss@hotmil.com", image_url: "user_pic/129.jpg")
User.create(username: "big joe", password: "password", email: "hot994s@htmail.com", image_url: "user_pic/130.jpg")
User.create(username: "zanika", password: "password", email: "hot994s@hotail.com", image_url: "user_pic/girl.jpg")



# Playlists
Playlist.create(title: "Party123", creator_id: 1, art_url: "album_art/Skin.jpg", public: false)

PlaylistSong.create(song_id: 1, playlist_id: 1, user_id: 1)
PlaylistSong.create(song_id: 2, playlist_id: 1, user_id: 2)


Playlist.create(title: "Chill", creator_id: 1, art_url: "album_art/Graduation.jpg", public: false)

PlaylistMembership.create(user_id: 10, playlist_id: 2)
PlaylistMembership.create(user_id: 6, playlist_id: 2)
PlaylistMembership.create(user_id: 7, playlist_id: 2)
PlaylistMembership.create(user_id: 9, playlist_id: 2)
PlaylistMembership.create(user_id: 11, playlist_id: 2)
PlaylistMembership.create(user_id: 12, playlist_id: 2)
PlaylistMembership.create(user_id: 13, playlist_id: 2)
PlaylistMembership.create(user_id: 14, playlist_id: 2)

PlaylistSong.create(song_id: 20, playlist_id: 2, user_id: 10)
PlaylistSong.create(song_id: 30, playlist_id: 2, user_id: 6)
PlaylistSong.create(song_id: 25, playlist_id: 2, user_id: 7)
PlaylistSong.create(song_id: 15, playlist_id: 2, user_id: 9)
PlaylistSong.create(song_id: 10, playlist_id: 2, user_id: 12)

Playlist.create(title: "You&I", creator_id: 1, art_url: "album_art/youandi.jpg", public: false)
PlaylistMembership.create(user_id: 8, playlist_id: 3)
ppl = [1,8]
array = (1..35).to_a
array.each do |n|
  PlaylistSong.create(song_id: n, playlist_id: 3, user_id: ppl.shuffle[0])
end


Playlist.create(title: "Hiking Trip", creator_id: 1, art_url: "album_art/hike.jpg", public: false)
array = (3..5).to_a
array.each do |n|
  user = array.shuffle.pop
  PlaylistMembership.create(user_id: user , playlist_id: 4)
  PlaylistSong.create(song_id: n+5, playlist_id: 4, user_id: user)
end


Playlist.create(title: "Boat Tunes", creator_id: 1, art_url: "album_art/boating.jpg", public: false)
array = (6..9).to_a
array.each do |n|
  user = array.shuffle.pop
  PlaylistMembership.create(user_id: user , playlist_id: 5)
  PlaylistSong.create(song_id: n+15, playlist_id: 5, user_id: user)
end


Playlist.create(title: "Zen", creator_id: 1, art_url: "album_art/garden.jpg", public: false)

array = (10..14).to_a
array.each do |n|
  user = array.shuffle.pop
  PlaylistMembership.create(user_id: user , playlist_id: 6)
  PlaylistSong.create(song_id: n+16, playlist_id: 6, user_id: user)
end

PlaylistMembership.create(user_id: 1, playlist_id: 1)
PlaylistMembership.create(user_id: 1, playlist_id: 2)
PlaylistMembership.create(user_id: 1, playlist_id: 3)
PlaylistMembership.create(user_id: 1, playlist_id: 4)
PlaylistMembership.create(user_id: 1, playlist_id: 5)
PlaylistMembership.create(user_id: 1, playlist_id: 6)

Playlist.create(title: "TogaFriday", creator_id: 2, art_url: "album_art/DAMN..jpg", public: false)
Playlist.create(title: "No Break", creator_id: 2, art_url: "album_art/skin.jpg", public: false)
Playlist.create(title: "Country", creator_id: 7, art_url: "album_art/country.png", public: true)
Playlist.create(title: "EDM", creator_id: 4, art_url: "album_art/edm.png", public: true)
Playlist.create(title: "Pop", creator_id: 3, art_url: "album_art/pop.png", public: true)
Playlist.create(title: "RnB", creator_id: 4, art_url: "album_art/rnb.png", public: true)
Playlist.create(title: "Rock", creator_id: 4, art_url: "album_art/rock.png", public: true)
Playlist.create(title: "Study", creator_id: 5, art_url: "album_art/study.png", public: true)
Playlist.create(title: "Hip Hop", creator_id: 2, art_url: "album_art/hip hop.png", public: true)
Playlist.create(title: "Latino", creator_id: 2, art_url: "album_art/latino.png", public: true)
Playlist.create(title: "Summer", creator_id: 5, art_url: "album_art/summer.png", public: true)
Playlist.create(title: "Lounge", creator_id: 3, art_url: "album_art/lounge.png", public: true)

# playlist_memberships

PlaylistMembership.create(user_id: 2, playlist_id: 1)
PlaylistMembership.create(user_id: 3, playlist_id: 1)
PlaylistMembership.create(user_id: 4, playlist_id: 1)
# PlaylistMembership.create(user_id: 4, playlist_id: 2)
# PlaylistMembership.create(user_id: 5, playlist_id: 2)
# PlaylistMembership.create(user_id: 5, playlist_id: 4)
# PlaylistMembership.create(user_id: 2, playlist_id: 4)

playlist_a = (7..18).to_a
song_a = (1..35).to_a
member_a = (2..17).to_a

playlist_a.each do |n|
  song_a = (1..35).to_a
  member_a.each do |m|
    PlaylistSong.create(song_id: song_a[m], playlist_id: n, user_id: m)
    PlaylistMembership.create(user_id: m, playlist_id: n)
  end
end
