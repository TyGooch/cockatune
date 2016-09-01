# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Users
User.create({username: 'TyGooch', password:'password', profile_picture_url: 'http://res.cloudinary.com/dtatkxxcm/image/upload/v1472680415/NotPink_ppycej.jpg'})
User.create({username: 'paulKim', password:'password', profile_picture_url: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Paul_Hansen_Kim.jpg'})
User.create({username: '49erfan', password:'password', profile_picture_url: 'https://dealermesh.com/New%20folder/images/profile/2219225-austin-carr-profile.jpg'})
User.create({username: 'sofiaSong', password:'password', profile_picture_url: 'http://therealdeal.com/wp-content/uploads/2014/01/sofia-song.jpg'})
User.create({username: 'pGarcia', password:'password', profile_picture_url: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAfFAAAAJGYxZDhkZjQ3LTJiMTQtNGE0Zi05MTg2LTMzZDQ1NmJiZWQ0NA.jpg'})

#Artists
Artist.create({name: 'tycho', genre:'ambient'})
