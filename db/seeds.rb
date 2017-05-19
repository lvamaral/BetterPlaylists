# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# //Songs
Song.create(title: "Here I Am", artist: "Robert", album: "Chicago", song_url: "songs/sample.mp3")
Song.create(title: "BLOOD", artist: "Kendrick Lamar", album: "DAMN", song_url: "songs/BLOOD.mp3")
Song.create(title: "DNA", artist: "Kendrick Lamar", album: "DAMN", song_url: "songs/DNA.mp3")
Song.create(title: "YAH", artist: "Kendrick Lamar", album: "DAMN", song_url: "songs/YAH.mp3")
Song.create(title: "ELEMENT", artist: "Kendrick Lamar", album: "DAMN", song_url: "songs/ELEMENT.mp3")
Song.create(title: "FEEL", artist: "Kendrick Lamar", album: "DAMN", song_url: "songs/FEEL.mp3")


# //People
User.create(username: "lucas", password: "password", email: "hot@hotmail.com", image_url: "/user_pics/86.jpg")
User.create(username: "alex", password: "password", email: "hot2@hotmail.com", image_url: "user_pics/20.jpg")
User.create(username: "john", password: "password", email: "hot3@hotmail.com", image_url: "user_pics/33.jpg")
User.create(username: "michael", password: "password", email: "hot4@hotmail.com", image_url: "user_pics/34.jpg")
User.create(username: "rodrigo", password: "password", email: "hot5@hotmail.com", image_url: "user_pics/36.jpg")
User.create(username: "jean machine", password: "password", email: "hot6@hotmail.com", image_url: "user_pics/74.jpg")
