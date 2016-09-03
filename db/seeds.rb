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



#Artist, Album, Songs
Artist.create({name: 'Tycho', genre:'ambient', artist_picture_url: 'https://jukely.imgix.net/a393dda6c2f451731fb593ee154ae37db56d348dab7262ed6aabd08cf379?ixlib=rb-0.3.5&w=750&h=656&fit=crop&s=0714fea9fba115413bf64f8a7df09770'})
Album.create({title: 'Awake', artist_id: 1, album_picture_url: 'https://upload.wikimedia.org/wikipedia/en/c/ca/Tycho_-_Awake.png'})
Song.create({title:'See', audio_url: 'google.com', length: '135', album_id: 1, artist_id: 1})

Artist.create({name: 'Ariana Grande', genre:'pop', artist_picture_url: 'http://www.rap-up.com/wp-content/uploads/2014/12/ariana-grande.jpg'})

Artist.create({name: 'Alan Walker', genre:'edm', artist_picture_url: 'http://d19y6wq6pk1k2b.cloudfront.net/~/media/images/artists/alan%20walker/alan-walker-1000x1000.png?mw=1500'})

Artist.create({name: 'ODESZA', genre:'ambient', artist_picture_url: 'https://i1.sndcdn.com/avatars-000097056058-s07lh7-t500x500.jpg'})
Artist.create({name: 'Ariana Grande', genre:'pop', artist_picture_url: 'http://www.rap-up.com/wp-content/uploads/2014/12/ariana-grande.jpg'})

Artist.create({name: 'Alan Walker', genre:'edm', artist_picture_url: 'http://d19y6wq6pk1k2b.cloudfront.net/~/media/images/artists/alan%20walker/alan-walker-1000x1000.png?mw=1500'})

Artist.create({name: 'ODESZA', genre:'ambient', artist_picture_url: 'https://i1.sndcdn.com/avatars-000097056058-s07lh7-t500x500.jpg'})
Artist.create({name: 'Ariana Grande', genre:'pop', artist_picture_url: 'http://www.rap-up.com/wp-content/uploads/2014/12/ariana-grande.jpg'})

Artist.create({name: 'Alan Walker', genre:'edm', artist_picture_url: 'http://d19y6wq6pk1k2b.cloudfront.net/~/media/images/artists/alan%20walker/alan-walker-1000x1000.png?mw=1500'})

Artist.create({name: 'ODESZA', genre:'ambient', artist_picture_url: 'https://i1.sndcdn.com/avatars-000097056058-s07lh7-t500x500.jpg'})
Artist.create({name: 'Ariana Grande', genre:'pop', artist_picture_url: 'http://www.rap-up.com/wp-content/uploads/2014/12/ariana-grande.jpg'})

Artist.create({name: 'Alan Walker', genre:'edm', artist_picture_url: 'http://d19y6wq6pk1k2b.cloudfront.net/~/media/images/artists/alan%20walker/alan-walker-1000x1000.png?mw=1500'})

Artist.create({name: 'ODESZA', genre:'ambient', artist_picture_url: 'https://i1.sndcdn.com/avatars-000097056058-s07lh7-t500x500.jpg'})
Artist.create({name: 'Ariana Grande', genre:'pop', artist_picture_url: 'http://www.rap-up.com/wp-content/uploads/2014/12/ariana-grande.jpg'})

Artist.create({name: 'Alan Walker', genre:'edm', artist_picture_url: 'http://d19y6wq6pk1k2b.cloudfront.net/~/media/images/artists/alan%20walker/alan-walker-1000x1000.png?mw=1500'})

Artist.create({name: 'ODESZA', genre:'ambient', artist_picture_url: 'https://i1.sndcdn.com/avatars-000097056058-s07lh7-t500x500.jpg'})
Artist.create({name: 'Ariana Grande', genre:'pop', artist_picture_url: 'http://www.rap-up.com/wp-content/uploads/2014/12/ariana-grande.jpg'})

Artist.create({name: 'Alan Walker', genre:'edm', artist_picture_url: 'http://d19y6wq6pk1k2b.cloudfront.net/~/media/images/artists/alan%20walker/alan-walker-1000x1000.png?mw=1500'})

Artist.create({name: 'ODESZA', genre:'ambient', artist_picture_url: 'https://i1.sndcdn.com/avatars-000097056058-s07lh7-t500x500.jpg'})
Artist.create({name: 'Ariana Grande', genre:'pop', artist_picture_url: 'http://www.rap-up.com/wp-content/uploads/2014/12/ariana-grande.jpg'})

Artist.create({name: 'Alan Walker', genre:'edm', artist_picture_url: 'http://d19y6wq6pk1k2b.cloudfront.net/~/media/images/artists/alan%20walker/alan-walker-1000x1000.png?mw=1500'})

Artist.create({name: 'ODESZA', genre:'ambient', artist_picture_url: 'https://i1.sndcdn.com/avatars-000097056058-s07lh7-t500x500.jpg'})
Artist.create({name: 'Ariana Grande', genre:'pop', artist_picture_url: 'http://www.rap-up.com/wp-content/uploads/2014/12/ariana-grande.jpg'})

Artist.create({name: 'Alan Walker', genre:'edm', artist_picture_url: 'http://d19y6wq6pk1k2b.cloudfront.net/~/media/images/artists/alan%20walker/alan-walker-1000x1000.png?mw=1500'})

Artist.create({name: 'ODESZA', genre:'ambient', artist_picture_url: 'https://i1.sndcdn.com/avatars-000097056058-s07lh7-t500x500.jpg'})
Artist.create({name: 'Ariana Grande', genre:'pop', artist_picture_url: 'http://www.rap-up.com/wp-content/uploads/2014/12/ariana-grande.jpg'})

Artist.create({name: 'Alan Walker', genre:'edm', artist_picture_url: 'http://d19y6wq6pk1k2b.cloudfront.net/~/media/images/artists/alan%20walker/alan-walker-1000x1000.png?mw=1500'})

Artist.create({name: 'ODESZA', genre:'ambient', artist_picture_url: 'https://i1.sndcdn.com/avatars-000097056058-s07lh7-t500x500.jpg'})
Artist.create({name: 'Ariana Grande', genre:'pop', artist_picture_url: 'http://www.rap-up.com/wp-content/uploads/2014/12/ariana-grande.jpg'})

Artist.create({name: 'Alan Walker', genre:'edm', artist_picture_url: 'http://d19y6wq6pk1k2b.cloudfront.net/~/media/images/artists/alan%20walker/alan-walker-1000x1000.png?mw=1500'})

Artist.create({name: 'ODESZA', genre:'ambient', artist_picture_url: 'https://i1.sndcdn.com/avatars-000097056058-s07lh7-t500x500.jpg'})
Artist.create({name: 'Ariana Grande', genre:'pop', artist_picture_url: 'http://www.rap-up.com/wp-content/uploads/2014/12/ariana-grande.jpg'})

Artist.create({name: 'Alan Walker', genre:'edm', artist_picture_url: 'http://d19y6wq6pk1k2b.cloudfront.net/~/media/images/artists/alan%20walker/alan-walker-1000x1000.png?mw=1500'})

Artist.create({name: 'ODESZA', genre:'ambient', artist_picture_url: 'https://i1.sndcdn.com/avatars-000097056058-s07lh7-t500x500.jpg'})
Artist.create({name: 'Ariana Grande', genre:'pop', artist_picture_url: 'http://www.rap-up.com/wp-content/uploads/2014/12/ariana-grande.jpg'})

Artist.create({name: 'Alan Walker', genre:'edm', artist_picture_url: 'http://d19y6wq6pk1k2b.cloudfront.net/~/media/images/artists/alan%20walker/alan-walker-1000x1000.png?mw=1500'})

Artist.create({name: 'ODESZA', genre:'ambient', artist_picture_url: 'https://i1.sndcdn.com/avatars-000097056058-s07lh7-t500x500.jpg'})
Artist.create({name: 'Ariana Grande', genre:'pop', artist_picture_url: 'http://www.rap-up.com/wp-content/uploads/2014/12/ariana-grande.jpg'})

Artist.create({name: 'Alan Walker', genre:'edm', artist_picture_url: 'http://d19y6wq6pk1k2b.cloudfront.net/~/media/images/artists/alan%20walker/alan-walker-1000x1000.png?mw=1500'})

Artist.create({name: 'ODESZA', genre:'ambient', artist_picture_url: 'https://i1.sndcdn.com/avatars-000097056058-s07lh7-t500x500.jpg'})
Artist.create({name: 'Ariana Grande', genre:'pop', artist_picture_url: 'http://www.rap-up.com/wp-content/uploads/2014/12/ariana-grande.jpg'})

Artist.create({name: 'Alan Walker', genre:'edm', artist_picture_url: 'http://d19y6wq6pk1k2b.cloudfront.net/~/media/images/artists/alan%20walker/alan-walker-1000x1000.png?mw=1500'})

Artist.create({name: 'ODESZA', genre:'ambient', artist_picture_url: 'https://i1.sndcdn.com/avatars-000097056058-s07lh7-t500x500.jpg'})
Artist.create({name: 'Ariana Grande', genre:'pop', artist_picture_url: 'http://www.rap-up.com/wp-content/uploads/2014/12/ariana-grande.jpg'})

Artist.create({name: 'Alan Walker', genre:'edm', artist_picture_url: 'http://d19y6wq6pk1k2b.cloudfront.net/~/media/images/artists/alan%20walker/alan-walker-1000x1000.png?mw=1500'})

Artist.create({name: 'ODESZA', genre:'ambient', artist_picture_url: 'https://i1.sndcdn.com/avatars-000097056058-s07lh7-t500x500.jpg'})
Artist.create({name: 'Ariana Grande', genre:'pop', artist_picture_url: 'http://www.rap-up.com/wp-content/uploads/2014/12/ariana-grande.jpg'})

Artist.create({name: 'Alan Walker', genre:'edm', artist_picture_url: 'http://d19y6wq6pk1k2b.cloudfront.net/~/media/images/artists/alan%20walker/alan-walker-1000x1000.png?mw=1500'})

Artist.create({name: 'ODESZA', genre:'ambient', artist_picture_url: 'https://i1.sndcdn.com/avatars-000097056058-s07lh7-t500x500.jpg'})
Artist.create({name: 'Ariana Grande', genre:'pop', artist_picture_url: 'http://www.rap-up.com/wp-content/uploads/2014/12/ariana-grande.jpg'})

Artist.create({name: 'Alan Walker', genre:'edm', artist_picture_url: 'http://d19y6wq6pk1k2b.cloudfront.net/~/media/images/artists/alan%20walker/alan-walker-1000x1000.png?mw=1500'})

Artist.create({name: 'ODESZA', genre:'ambient', artist_picture_url: 'https://i1.sndcdn.com/avatars-000097056058-s07lh7-t500x500.jpg'})
Artist.create({name: 'Ariana Grande', genre:'pop', artist_picture_url: 'http://www.rap-up.com/wp-content/uploads/2014/12/ariana-grande.jpg'})

Artist.create({name: 'Alan Walker', genre:'edm', artist_picture_url: 'http://d19y6wq6pk1k2b.cloudfront.net/~/media/images/artists/alan%20walker/alan-walker-1000x1000.png?mw=1500'})

Artist.create({name: 'ODESZA', genre:'ambient', artist_picture_url: 'https://i1.sndcdn.com/avatars-000097056058-s07lh7-t500x500.jpg'})
Artist.create({name: 'Ariana Grande', genre:'pop', artist_picture_url: 'http://www.rap-up.com/wp-content/uploads/2014/12/ariana-grande.jpg'})

Artist.create({name: 'Alan Walker', genre:'edm', artist_picture_url: 'http://d19y6wq6pk1k2b.cloudfront.net/~/media/images/artists/alan%20walker/alan-walker-1000x1000.png?mw=1500'})

Artist.create({name: 'ODESZA', genre:'ambient', artist_picture_url: 'https://i1.sndcdn.com/avatars-000097056058-s07lh7-t500x500.jpg'})
Artist.create({name: 'Ariana Grande', genre:'pop', artist_picture_url: 'http://www.rap-up.com/wp-content/uploads/2014/12/ariana-grande.jpg'})

Artist.create({name: 'Alan Walker', genre:'edm', artist_picture_url: 'http://d19y6wq6pk1k2b.cloudfront.net/~/media/images/artists/alan%20walker/alan-walker-1000x1000.png?mw=1500'})

Artist.create({name: 'ODESZA', genre:'ambient', artist_picture_url: 'https://i1.sndcdn.com/avatars-000097056058-s07lh7-t500x500.jpg'})
Artist.create({name: 'Ariana Grande', genre:'pop', artist_picture_url: 'http://www.rap-up.com/wp-content/uploads/2014/12/ariana-grande.jpg'})

Artist.create({name: 'Alan Walker', genre:'edm', artist_picture_url: 'http://d19y6wq6pk1k2b.cloudfront.net/~/media/images/artists/alan%20walker/alan-walker-1000x1000.png?mw=1500'})

Artist.create({name: 'ODESZA', genre:'ambient', artist_picture_url: 'https://i1.sndcdn.com/avatars-000097056058-s07lh7-t500x500.jpg'})
Artist.create({name: 'Ariana Grande', genre:'pop', artist_picture_url: 'http://www.rap-up.com/wp-content/uploads/2014/12/ariana-grande.jpg'})

Artist.create({name: 'Alan Walker', genre:'edm', artist_picture_url: 'http://d19y6wq6pk1k2b.cloudfront.net/~/media/images/artists/alan%20walker/alan-walker-1000x1000.png?mw=1500'})

Artist.create({name: 'ODESZA', genre:'ambient', artist_picture_url: 'https://i1.sndcdn.com/avatars-000097056058-s07lh7-t500x500.jpg'})
Artist.create({name: 'Ariana Grande', genre:'pop', artist_picture_url: 'http://www.rap-up.com/wp-content/uploads/2014/12/ariana-grande.jpg'})

Artist.create({name: 'Alan Walker', genre:'edm', artist_picture_url: 'http://d19y6wq6pk1k2b.cloudfront.net/~/media/images/artists/alan%20walker/alan-walker-1000x1000.png?mw=1500'})

Artist.create({name: 'ODESZA', genre:'ambient', artist_picture_url: 'https://i1.sndcdn.com/avatars-000097056058-s07lh7-t500x500.jpg'})
Artist.create({name: 'Ariana Grande', genre:'pop', artist_picture_url: 'http://www.rap-up.com/wp-content/uploads/2014/12/ariana-grande.jpg'})

Artist.create({name: 'Alan Walker', genre:'edm', artist_picture_url: 'http://d19y6wq6pk1k2b.cloudfront.net/~/media/images/artists/alan%20walker/alan-walker-1000x1000.png?mw=1500'})

Artist.create({name: 'ODESZA', genre:'ambient', artist_picture_url: 'https://i1.sndcdn.com/avatars-000097056058-s07lh7-t500x500.jpg'})
Artist.create({name: 'Ariana Grande', genre:'pop', artist_picture_url: 'http://www.rap-up.com/wp-content/uploads/2014/12/ariana-grande.jpg'})

Artist.create({name: 'Alan Walker', genre:'edm', artist_picture_url: 'http://d19y6wq6pk1k2b.cloudfront.net/~/media/images/artists/alan%20walker/alan-walker-1000x1000.png?mw=1500'})

Artist.create({name: 'ODESZA', genre:'ambient', artist_picture_url: 'https://i1.sndcdn.com/avatars-000097056058-s07lh7-t500x500.jpg'})
Artist.create({name: 'Ariana Grande', genre:'pop', artist_picture_url: 'http://www.rap-up.com/wp-content/uploads/2014/12/ariana-grande.jpg'})

Artist.create({name: 'Alan Walker', genre:'edm', artist_picture_url: 'http://d19y6wq6pk1k2b.cloudfront.net/~/media/images/artists/alan%20walker/alan-walker-1000x1000.png?mw=1500'})

Artist.create({name: 'ODESZA', genre:'ambient', artist_picture_url: 'https://i1.sndcdn.com/avatars-000097056058-s07lh7-t500x500.jpg'})
Artist.create({name: 'Ariana Grande', genre:'pop', artist_picture_url: 'http://www.rap-up.com/wp-content/uploads/2014/12/ariana-grande.jpg'})

Artist.create({name: 'Alan Walker', genre:'edm', artist_picture_url: 'http://d19y6wq6pk1k2b.cloudfront.net/~/media/images/artists/alan%20walker/alan-walker-1000x1000.png?mw=1500'})

Artist.create({name: 'ODESZA', genre:'ambient', artist_picture_url: 'https://i1.sndcdn.com/avatars-000097056058-s07lh7-t500x500.jpg'})
Artist.create({name: 'Ariana Grande', genre:'pop', artist_picture_url: 'http://www.rap-up.com/wp-content/uploads/2014/12/ariana-grande.jpg'})

Artist.create({name: 'Alan Walker', genre:'edm', artist_picture_url: 'http://d19y6wq6pk1k2b.cloudfront.net/~/media/images/artists/alan%20walker/alan-walker-1000x1000.png?mw=1500'})

Artist.create({name: 'ODESZA', genre:'ambient', artist_picture_url: 'https://i1.sndcdn.com/avatars-000097056058-s07lh7-t500x500.jpg'})
Artist.create({name: 'Ariana Grande', genre:'pop', artist_picture_url: 'http://www.rap-up.com/wp-content/uploads/2014/12/ariana-grande.jpg'})

Artist.create({name: 'Alan Walker', genre:'edm', artist_picture_url: 'http://d19y6wq6pk1k2b.cloudfront.net/~/media/images/artists/alan%20walker/alan-walker-1000x1000.png?mw=1500'})

Artist.create({name: 'ODESZA', genre:'ambient', artist_picture_url: 'https://i1.sndcdn.com/avatars-000097056058-s07lh7-t500x500.jpg'})
Artist.create({name: 'Ariana Grande', genre:'pop', artist_picture_url: 'http://www.rap-up.com/wp-content/uploads/2014/12/ariana-grande.jpg'})

Artist.create({name: 'Alan Walker', genre:'edm', artist_picture_url: 'http://d19y6wq6pk1k2b.cloudfront.net/~/media/images/artists/alan%20walker/alan-walker-1000x1000.png?mw=1500'})

Artist.create({name: 'ODESZA', genre:'ambient', artist_picture_url: 'https://i1.sndcdn.com/avatars-000097056058-s07lh7-t500x500.jpg'})
Artist.create({name: 'Ariana Grande', genre:'pop', artist_picture_url: 'http://www.rap-up.com/wp-content/uploads/2014/12/ariana-grande.jpg'})

Artist.create({name: 'Alan Walker', genre:'edm', artist_picture_url: 'http://d19y6wq6pk1k2b.cloudfront.net/~/media/images/artists/alan%20walker/alan-walker-1000x1000.png?mw=1500'})

Artist.create({name: 'ODESZA', genre:'ambient', artist_picture_url: 'https://i1.sndcdn.com/avatars-000097056058-s07lh7-t500x500.jpg'})
