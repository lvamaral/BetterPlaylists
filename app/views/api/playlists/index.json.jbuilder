# json.array! @playlists, :id, :title

json.array! @playlists do |playlist|
  json.id playlist.id
  json.title playlist.title
  json.member_count playlist.users.length
  json.art_url playlist.art_url
  json.creator playlist.creator.username
end
