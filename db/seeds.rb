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
Artist.create({name: 'Tycho', genre:'ambient', artist_picture_url: 'https://jukely.imgix.net/a393dda6c2f451731fb593ee154ae37db56d348dab7262ed6aabd08cf379?ixlib=rb-0.3.5&w=750&h=656&fit=crop&s=0714fea9fba115413bf64f8a7df09770', header_image_url: 'http://blog.iso50.com/wp-content/uploads/2012/12/Tycho-WC13-header.jpg'})
  Album.create({title: 'Awake', artist_id: 1, album_picture_url: 'https://upload.wikimedia.org/wikipedia/en/c/ca/Tycho_-_Awake.png'})
    Song.create({title:'Awake', audio_url: 'http://res.cloudinary.com/dtatkxxcm/video/upload/v1473112406/1-01_Awake_ndwfn6.mp3', length: '283', album_id: 1, artist_id: 1})
    Song.create({title:'Montana', audio_url: 'http://res.cloudinary.com/dtatkxxcm/video/upload/v1473110522/1-02_Montana_xq2uzg.mp3', length: '326', album_id: 1, artist_id: 1})
    Song.create({title:'L', audio_url: 'http://res.cloudinary.com/dtatkxxcm/video/upload/v1473110564/1-03_L_m4puxs.mp3', length: '277', album_id: 1, artist_id: 1})
    Song.create({title:'Dye', audio_url: 'http://res.cloudinary.com/dtatkxxcm/video/upload/v1473110514/1-04_Dye_edewkw.mp3', length: '317', album_id: 1, artist_id: 1})
    Song.create({title:'See', audio_url: 'http://res.cloudinary.com/dtatkxxcm/video/upload/v1473110694/1-05_See_p8k1br.mp3', length: '318', album_id: 1, artist_id: 1})
    Song.create({title:'Apogee', audio_url: 'http://res.cloudinary.com/dtatkxxcm/video/upload/v1473110300/1-06_Apogee_r0xt5j.mp3', length: '260', album_id: 1, artist_id: 1})
    Song.create({title:'Spectre', audio_url: 'http://res.cloudinary.com/dtatkxxcm/video/upload/v1473110319/1-07_Spectre_xpyn8e.mp3', length: '226', album_id: 1, artist_id: 1})
    Song.create({title:'Plains', audio_url: 'http://res.cloudinary.com/dtatkxxcm/video/upload/v1473110955/1-08_Plains_tgcmzb.mp3', length: '197', album_id: 1, artist_id: 1})
  Album.create({title: 'Dive', artist_id: 1, album_picture_url: 'https://upload.wikimedia.org/wikipedia/en/1/11/Dive_tycho_album.jpg'})
    # Song.create({title:'A Walk', audio_url: 'google.com', length: '135', album_id: 2, artist_id: 1})
    # Song.create({title:'Hours', audio_url: '', length: '135', album_id: 2, artist_id: 1})
    # Song.create({title:'Daydream', audio_url: '', length: '135', album_id: 2, artist_id: 1})
    # Song.create({title:'Dive', audio_url: '', length: '135', album_id: 2, artist_id: 1})
    # Song.create({title:'Coastal Brake', audio_url: '', length: '135', album_id: 2, artist_id: 1})
    # Song.create({title:'Ascension', audio_url: '', length: '135', album_id: 2, artist_id: 1})
    Song.create({title:'Melanine', audio_url: 'http://res.cloudinary.com/dtatkxxcm/video/upload/v1473111103/07_Melanine_w7pjly.mp3', length: '173', album_id: 2, artist_id: 1})
    # Song.create({title:'Adrift', audio_url: '', length: '135', album_id: 2, artist_id: 1})
    # Song.create({title:'Epigram', audio_url: '', length: '135', album_id: 2, artist_id: 1})
    # Song.create({title:'Elegy', audio_url: '', length: '135', album_id: 2, artist_id: 1})
  Album.create({title: 'The Science of Patterns', artist_id: 1, album_picture_url: 'http://sentiospace.com/wp-content/uploads/2016/02/the-science-of-patterns-tycho-400x400.jpg'})
    Song.create({title:'Red Bridge', audio_url: 'google.com', length: '135', album_id: 3, artist_id: 1})

Artist.create({name: 'Alan Walker', genre:'edm', artist_picture_url: 'http://d19y6wq6pk1k2b.cloudfront.net/~/media/images/artists/alan%20walker/alan-walker-1000x1000.png?mw=1500', header_image_url: 'http://i.amz.mshcdn.com/vuXkF1M-eAn1zkdn6w5fQa7NY_s=/950x534/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fcard%2Fimage%2F25098%2Falan.walker.jpg'})
  Album.create({title: 'Faded - Single', artist_id: 2, album_picture_url: 'http://a2.mzstatic.com/us/r30/Music69/v4/e6/52/ca/e652caf9-5769-cc74-ec37-d80e3b960505/cover600x600.jpeg'})
    Song.create({title:'Faded', audio_url: 'http://res.cloudinary.com/dtatkxxcm/video/upload/v1473179941/Alan_Walker_-_Faded_fqmwpd.mp3', length: '312', album_id: 4, artist_id: 2})

Artist.create({name: 'Steve Aoki', genre:'edm', artist_picture_url: 'http://cdn2.thelineofbestfit.com/images/remote/http_cdn2.thelineofbestfit.com/media/2013/08/steve-aoki.jpeg', header_image_url: 'http://files.clubplanet.com/SiteFiles%5CArticleImages%5C6400%5Caoki_header.jpg'})
  Album.create({title: '4OKI', artist_id: 3, album_picture_url: 'http://www.steveaoki.com/site/wp-content/uploads/2016/07/SteveAoki.4OKIEP_800px.jpg'})
    Song.create({title:'ILYSM', audio_url: 'http://res.cloudinary.com/dtatkxxcm/video/upload/v1473182926/01_ILYSM_op4zbj.mp3', length: '200', album_id: 5, artist_id: 3})
    Song.create({title:'Dope Girlz', audio_url: 'http://res.cloudinary.com/dtatkxxcm/video/upload/v1473182932/02_Dope_Girlz_lyzwie.mp3', length: '234', album_id: 5, artist_id: 3})
    Song.create({title:'Bring The Funk Back', audio_url: 'http://res.cloudinary.com/dtatkxxcm/video/upload/v1473182934/03_Bring_The_Funk_Back_wecf3g.mp3', length: '267', album_id: 5, artist_id: 3})
    Song.create({title:'Kids', audio_url: 'http://res.cloudinary.com/dtatkxxcm/video/upload/v1473183673/Steve_Aoki_MORTEN_-_Kids_Official_Music_Video_Chapter_4_of_4_vigtlm.mp3', length: '199', album_id: 5, artist_id: 3})

Artist.create({name: 'Kendrick Lamar', genre:'hip hop', artist_picture_url: 'http://emorywheel.com/wp-content/uploads/2016/03/1556365_10152290789958092_885501008_o.jpg', header_image_url: 'http://rappingmanual.com/wp-content/uploads/2014/08/kendrick-lamar-00.jpg'})
  Album.create({title: 'Good Kid M.A.A.D City', artist_id: 4, album_picture_url: 'https://upload.wikimedia.org/wikipedia/en/9/93/KendrickGKMC.jpg'})
    Song.create({title:"Sherane a.k.a Master Splinter's Daughter", audio_url: 'http://res.cloudinary.com/dtatkxxcm/video/upload/v1473184906/01_Sherane_A.K.A._Master_Splinters_Daughter_jguohl.mp3', length: '273', album_id: 6, artist_id: 4})
    Song.create({title:"Bitch, Don't Kill My Vibe", audio_url: 'http://res.cloudinary.com/dtatkxxcm/video/upload/v1473184789/02_Bitch_Dant_Kill_My_Vibe_mztoso.mp3', length: '310', album_id: 6, artist_id: 4})
    Song.create({title:'Backseat Freestyle', audio_url: 'http://res.cloudinary.com/dtatkxxcm/video/upload/v1473184739/03_Backstreet_Freestyle_qn4cn2.mp3', length: '212', album_id: 6, artist_id: 4})
    Song.create({title:'The Art of Peer Pressure', audio_url: 'http://res.cloudinary.com/dtatkxxcm/video/upload/v1473184772/04_The_Art_Of_Peer_Pressure_w89vzg.mp3', length: '324', album_id: 6, artist_id: 4})
    Song.create({title:'Money Trees', audio_url: 'http://res.cloudinary.com/dtatkxxcm/video/upload/v1473184801/05_Money_Trees_Feat._Jay_Rock_hc40k0.mp3', length: '386', album_id: 6, artist_id: 4})
    Song.create({title:'Poetic Justice', audio_url: 'http://res.cloudinary.com/dtatkxxcm/video/upload/v1473184852/06_Poetic_Justice_Feat._Drake_1_lssksv.mp3', length: '300', album_id: 6, artist_id: 4})
    Song.create({title:'good kid', audio_url: 'http://res.cloudinary.com/dtatkxxcm/video/upload/v1473184978/07_Good_Kid_eibow1.mp3', length: '214', album_id: 6, artist_id: 4})
    Song.create({title:'m.A.A.d city', audio_url: 'http://res.cloudinary.com/dtatkxxcm/video/upload/v1473184913/08_M.A.A.D_City_Feat._MC_Eiht_vlybty.mp3', length: '350', album_id: 6, artist_id: 4})
    Song.create({title:'Swimming Pools (Drank)', audio_url: 'http://res.cloudinary.com/dtatkxxcm/video/upload/v1473184890/09_Swimming_Pools_Drank_Extended_Version_ryvu18.mp3', length: '313', album_id: 6, artist_id: 4})
    Song.create({title:"Sing About Me, I'm Dying of Thirst", audio_url: 'http://res.cloudinary.com/dtatkxxcm/video/upload/v1473184923/10_Sing_About_Me_Im_Dying_Of_Thirst_jkgugx.mp3', length: '723', album_id: 6, artist_id: 4})
    Song.create({title:'Real', audio_url: 'http://res.cloudinary.com/dtatkxxcm/video/upload/v1473184967/11_Real_Feat._Anna_Wise_Of_Sonnymoon_czbovp.mp3', length: '443', album_id: 6, artist_id: 4})
    Song.create({title:'Compton', audio_url: 'http://res.cloudinary.com/dtatkxxcm/video/upload/v1473184945/12_Compton_Feat._Dr._Dre_iyax21.mp3', length: '248', album_id: 6, artist_id: 4})
    Song.create({title:'The Recipe', audio_url: 'http://res.cloudinary.com/dtatkxxcm/video/upload/v1473184783/2-13_The_Recipe_Feat._Dr_Dre_Bonus_Track_w31n18.mp3', length: '353', album_id: 6, artist_id: 4})
  Album.create({title: 'To Pimp A Butterfly', artist_id: 4, album_picture_url: ''})
    Song.create({title:'Compton', audio_url: '', length: '248', album_id: 6, artist_id: 4})


Artist.create({name: 'Ariana Grande', genre:'pop', artist_picture_url: 'http://www.rap-up.com/wp-content/uploads/2014/12/ariana-grande.jpg', header_image_url: 'http://static.tumblr.com/k9j0lua/B9Xnbavxq/8.png'})


Artist.create({name: 'ODESZA', genre:'ambient', artist_picture_url: 'https://i1.sndcdn.com/avatars-000097056058-s07lh7-t500x500.jpg', header_image_url: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Odesza_2014.jpg'})

Artist.create({name: 'The Rolling Stones', genre:'rock', artist_picture_url: 'http://wwwrollingstones.wpengine.netdna-cdn.com/files/2015/05/Rolling-Stones-2-600x485.jpg', header_image_url: 'http://wwwrollingstones.wpengine.netdna-cdn.com/files/2012/08/RS_Limited_Prints_940-458x172.jpg'})
