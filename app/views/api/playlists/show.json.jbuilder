json.extract! @playlist, :id, :title

json.creator do
  json.username @playlist.creator.username
  json.image_url @playlist.creator.image_url
end

json.members do
  @playlist.users.each do |user|
    json.set! user.id do
      json.id user.id
      json.username user.username
      json.image_url user.image_url
    end
  end
end

json.songs do
  json.array! @playlist.playlist_songs.each do |playlist_song|
    json.id playlist_song.song.id
    json.title playlist_song.song.title
    json.artist playlist_song.song.artist
    json.length playlist_song.song.length
    json.upvotes playlist_song.up_votes
    json.downvotes playlist_song.down_votes
    json.uploader playlist_song.user
    json.url playlist_song.song.song_url
    json.art_url playlist_song.song.art_url
  end
end


Playlist.first.playlist_songs.first.song
