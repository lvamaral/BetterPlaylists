# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## Playlists:
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null



## PlaylistMembers:
column name | data type | details
------------|-----------|-----------------------
user_id     | integer   | not null, foreign key, indexed
playlist_id | integer   | not null, foeign key, indexed


## Songs:
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
artist      | string    | not null
spotify_id  | integer   | indexed
up_votes    | integer   | not null, default: 0
down_votes  | integer   | not null, default: 0



## PlaylistSongs:
column name | data type | details
------------|-----------|-----------------------
songr_id    | integer   | not null, foreign key, indexed
playlist_id | integer   | not null, foeign key, indexed


