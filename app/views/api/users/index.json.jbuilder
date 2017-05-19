json.array! @users, :id, :username, :image_url
#
# @users.each do |user|
#   json.set! user.id do
#      json.set! :id, user.id
#      json.set! :username, user.username
#      json.set! :image_url, user.image_url
#
#   end
# end
