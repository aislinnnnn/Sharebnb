# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'uri'

User.destroy_all
Spot.destroy_all
Booking.destroy_all
Review.destroy_all



u1= User.create!(username:'guestuser', password:'password')
u2 = User.create!(username:'aislinn', password:'password')
u3 = User.create!(username:'matt', password:'password')
u4 = User.create!(username:'danielle', password:'password')
u5 = User.create!(username:'laura', password:'password')
u6 = User.create!(username:'will', password:'password')
u7 = User.create!(username:'kyle', password:'password')
u8 = User.create!(username:'kitty', password:'password')
u9 = User.create!(username:'katie', password:'password')
u10 = User.create!(username:'mike', password:'password')

s1 = u1.spots.create!(title:"Large bedroom in a Prime Location next to Train", location:"East Village, Manhattan, NY", price:168.00, num_guests:2, num_beds: 1, num_baths: 1, num_bedrooms:1, description:"Apartment available to share! Large bedroom with private bathroom! 5 minute walk from the subway. Great nightlife. Trendy coffee shops and historic locations.", rules:"No smoking. Check out by 1pm. No parties or events. No pets.", lat:40.730875, lng:-73.989707, image:"https://a0.muscache.com/airbnb/static/engagement/overlay_panel7-58b03c50e1eac957ec12f6ced3bf7872.jpg")

s2 = u2.spots.create!(title:"Large, beautiful apartment in prime location in Brroklyn! Short train ride to Manhattan", location:"Brooklyn, NY", price:249.00, num_guests:8, num_beds: 6, num_baths: 3, num_bedrooms:6, description:"Great apartment for sharing, lots of space!  Prime location close to Manhattan. Parks and bars all around.", rules:"Smoking and parties allowed. Check in after 3pm. All pets welcome", lat:40.723022, lng:-73.944352, image:"https://cupofjo.com/wp-content/uploads/2015/01/living-room-brooklyn-house-tour-best-apartment-decor-inspiration.jpg")

s3 = u3.spots.create!(title:"Times Square apartment with a View!!!", location:"Manhattan, NY", price:150.00, num_guests:10, num_beds: 5, num_baths: 3, num_bedrooms:3, description:"Luxury apartment on the 79th floor with amazing view and walking distance to subway! Lots of things to do nearby. Washer and dryer available for use.", rules:"Check in is after 3pm. No pets. No parties.", lat:40.759017, lng: -73.985603, image:"https://cdn.decoist.com/wp-content/uploads/2015/05/Midtown-Manhattan-Penthouse-Bedroom-with-Blue-Accents.png")

s4 = u4.spots.create!(title:"Loft Near Downtown SF!", location:"San Fransisco, CA", price:199.00, num_guests:2, num_beds: 1, num_baths: 1, num_bedrooms:3, description:"Beautiful apartment with loft bedroom available near downtown SF. 1 bathroom, near grocery stores anad public transport.", rules:"No smoking or parties. Check out by 10am. Not safe for infants.", lat:37.781475, lng: -122.416996, image:"https://st.hzcdn.com/simgs/aae1c8550447a1ed_4-4990/traditional-bedroom.jpg")

s5 = u5.spots.create!(title:"Stunning apt in the heart of the south side of Dublin city", location:"Dublin, Ireland", price:115.00,  num_guests:5, num_beds: 4, num_baths: 2, num_bedrooms:3, description:"Bright and spacious apartment with huge windows right in the heart of Dublin. Walking distance to the Luas and St. Stephen's green. Experience the city on your doorstep.", rules:"Check in after 3pm and check out before 11am. No pets or children allowed. No smoking or parties/events.", lat:53.334820, lng: -6.263306, image:"https://www.irishtimes.com/polopoly_fs/1.2743628.1470226201!/image/image.jpg_gen/derivatives/box_620_330/image.jpg")

s6 = u6.spots.create!(title:"Room in trendy apartment available for long term sharing walking distance to Trinity College", location:"Dublin, Ireland", price:89.00, num_guests:2, num_beds: 1, num_baths: 1, num_bedrooms:1, description:"Ideal for short term or long term sharing! Students welcome. Nexxt to Trinity college in the center of the city. Close to main attractions, but quiet street.", rules:"Check in after 4pm. Check out before 10am. No pets or children allowed. No smoking.", lat:53.346328, lng: -6.257035, image:"http://solosumba.com/g/bed/bedroom-amazing-masculine-curtains-mens-room-design-ideas-cool.jpg")

s7 = u7.spots.create!(title:"Cozy and bright apartment in a great location!", location:"San Fransisco, CA", price:175.00, num_guests:4, num_beds: 4, num_baths: 2, num_bedrooms:3, description:"This one three bedroom two bathrrom apartment is perfect to share during your visit to SF.  Great restaurants in walking distance. Quiet area. Near lots of public transportation.", rules:"Check in after 4pm. Check out before 10am. No pets or children allowed. No smoking.", lat:37.804507, lng: -122.415284, image:"http://ppcorn.com/us/wp-content/uploads/sites/14/2016/03/sf1.jpg")

s8 = u8.spots.create!(title:"Apartment just a few steps away from Midleton Main Street", location:"Midleton, Cork, Ireland", price:96.00, num_guests:3, num_beds: 2, num_baths: 1, num_bedrooms:2, description:"Excellent location a few steps from the main street. Near the Jameson Heritage center and lots of bars a restaurants.  Cork city only 20 minute train raide away.", rules:"No smoking or parties. Children and pets welcome. Keep the noise down after 9pm please.", lat:51.914032, lng: -8.172473, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSstysdZwp5g4G8jbMhHZRBO-NkiVTIol-NQ9h-sdYQ8VD6Vnwa")

s9 = u9.spots.create!(title:"Great home with private pool available to share!!", location:"Dhahran, Saudi Arabia", price:100.00, num_guests:8, num_beds: 4, num_baths: 2, num_bedrooms:3, description:"This is a beautiful home with a huge private pool! Very clean and nicely decorated. Washer and dryer available for use.", rules:"Check in after 2pm. Check out before 11am. No pets or children allowed. No smoking.", lat:26.316344, lng: 50.142781, image:"http://www.towaaf.com/uploads/image/picture/17809/1042883_78_z.jpg")

s10 = u10.spots.create!(title:"Inner city 2 bedroom apartment!", location:"Melbourne, Australia", price:89.00, num_guests:3, num_beds: 3, num_baths: 2, num_bedrooms:2, description:"Spacious 2 bedroom apartment is perfect for a vacation or for business. Quiet area, but near lots of attractions. Everything you need for a comfortable stay is supplied", rules:"Check in after 2pm. Check out before 11am. No pets or children allowed. No smoking.", lat:-37.813934, lng: 144.970395, image:"https://melbourne.frasershospitality.com/d/fpmelbourne/media/Images/__thumbs_1050_567_crop/FP-Melbourne-1_c755a8.jpg")

date1 = Date.new(2018,5,5)
date2 = Date.new(2018,5,7)
date3 = Date.new(2019,6,20)
date4 = Date.new(2019,6,28)
date5 = Date.new(2018, 12,3)
date6 = Date.new(2018, 12,17)

u1.bookings.create!({spot_id:s2.id, check_in:date1, check_out:date2, num_guests:1})
u2.bookings.create!({spot_id:s7.id, check_in:date3, check_out:date4, num_guests:4})
u3.bookings.create!({spot_id:s4.id, check_in:date1, check_out:date2, num_guests:2})
u4.bookings.create!({spot_id:s1.id, check_in:date3, check_out:date4, num_guests:2})
u5.bookings.create!({spot_id:s3.id, check_in:date5, check_out:date6, num_guests:2})
u6.bookings.create!({spot_id:s5.id, check_in:date1, check_out:date3, num_guests:2})
u7.bookings.create!({spot_id:s6.id, check_in:date5, check_out:date4, num_guests:2})
u8.bookings.create!({spot_id:s9.id, check_in:date3, check_out:date4, num_guests:7})
u9.bookings.create!({spot_id:s10.id, check_in:date5, check_out:date6, num_guests:2})
u10.bookings.create!({spot_id:s8.id, check_in:date1, check_out:date2, num_guests:2})

r1 = s1.reviews.create!(author_id:u2.id, body:"Great apartment but the owner was terrible to share with! Location was excellent", accuracy:4, communication:1, cleanliness:3, location:5, checkin:4, value:4 )

r2 = s1.reviews.create!(author_id:u3.id, body:"Awesome flat, especially for the price! The stairs are not joke though, had to take a break on the 3rd floor.", accuracy:5, communication:4, cleanliness:4, location:5, checkin:4, value:5 )

r3 = s1.reviews.create!(author_id:u5.id, body:"We loved this home. It is beautiful and cozy. Exceeded our expectations.", accuracy:5, communication:5, cleanliness:5, location:5, checkin:5, value:5 )

r4 = s2.reviews.create!(author_id:u10.id, body:"This place was soooooooo great. We had lots of fun. location could have been better.", accuracy:4, communication:4, cleanliness:5, location:3, checkin:4, value:4 )

r5 = s3.reviews.create!(author_id:u9.id, body:"The apartment is nice but it so too loud and busy outside. We couldnt sleep at all. Times square sucks", accuracy:4, communication:5, cleanliness:4, location:1, checkin:4, value:3 )

r6 = s4.reviews.create!(author_id:u8.id, body:"Okay apartment, the pictures look nothing like the apartment really is though. False advertising! Good location though.", accuracy:2, communication:3, cleanliness:3, location:5, checkin:3, value:3 )

r7 = s5.reviews.create!(author_id:u7.id, body:"Awesome location, near all of the fun things in Dublin. The accents are hard to understand though. We just smiled and laughed a lot.", accuracy:5, communication:1, cleanliness:5, location:5, checkin:4, value:5 )

r8 = s6.reviews.create!(author_id:u7.id, body:"This apartment ws horrible! Proximity to the college made it loud at night and impossible to sleep. Would not come back.", accuracy:2, communication:3, cleanliness:3, location:1, checkin:4, value:3 )

r9 = s7.reviews.create!(author_id:u5.id, body:"The owner did not tell us that we would be sharing the apartment with 8 dogs!! I love dogs but that is just too much. And they didnt even let us bring our own dog. UNFAIR!", accuracy:2, communication:2, cleanliness:1, location:4, checkin:4, value:3)

r10 = s8.reviews.create!(author_id:u4.id, body:"This home was nice but there is nothing to do around here. Train brough us to Cork city but there is nothing to do there either!!", accuracy:4, communication:5, cleanliness:5, location:2, checkin:4, value:4 )

r11 = s9.reviews.create!(author_id:u3.id, body:"The pool at this home is amazing. We pent all of our time there. Could not have survived the crazy heat without it!", accuracy:4, communication:4, cleanliness:5, location:4, checkin:5, value:5)

r12 = s10.reviews.create!(author_id:u2.id, body:"Beautiful and clean home! Great location. Would highly recommend this place", accuracy:5, communication:5, cleanliness:5, location:5, checkin:5, value:5 )
