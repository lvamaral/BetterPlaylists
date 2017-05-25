user = @pm.user

json.id user.id
json.username user.username
json.image_url user.image_url
json.membership_id @pm.id
