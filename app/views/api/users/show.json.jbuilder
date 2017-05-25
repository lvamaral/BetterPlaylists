json.extract! @user, :id, :username, :image_url

json.user_info do
  json.uploaded_songs @user.playlist_songs.count
  json.made_playlists @user.owned_playlists.count
  json.playlist_memberships @user.playlist_memberships
end

json.playlists do
  json.array! @user.playlists.each do |playlist|
      json.title playlist.title
      json.creator playlist.creator.username
      json.creator_id playlist.creator.id
      json.songs playlist.songs.length
      json.members playlist.users.length
      json.art_url playlist.art_url
  end
end
