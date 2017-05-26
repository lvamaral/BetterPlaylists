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
art_url     | string    | default: sample.png


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
album       | string    |
length      | string    | 
song_url    | integer   | indexed


## PlaylistSongs:
column name | data type | details
------------|-----------|-----------------------
song_id     | integer   | not null, foreign key, indexed
playlist_id | integer   | not null, foreign key, indexed
user_id     | integer   | not null, foreign key, indexed
