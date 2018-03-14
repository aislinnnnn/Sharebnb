# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username:'guestuser', password:'password')
User.create(username:'aislinn', password:'password')
User.create(username:'conor', password:'password')
User.create(username:'danielle', password:'password')
User.create(username:'laura', password:'password')
User.create(username:'will', password:'password')
User.create(username:'kyle', password:'password')
User.create(username:'kitty', password:'password')
User.create(username:'katie', password:'password')
User.create(username:'mike', password:'password')

Spot.create(title:"Large bedroom in a Prime Location next to Train", location:"East Village, Manhattan, NY", price:168.00, host_id: 1, num_guests:2, num_beds: 1, num_baths: 1, num_bedrooms:1, description:"Apartment available to share! Large bedroom with private bathroom! 5 minute walk from the subway. Great nightlife. Trendy coffee shops and historic locations.", rules:"No smoking. Check by 1pm. No parties or events. No pets.", lat:40.730875, lng:-73.989707, image:"https://a0.muscache.com/airbnb/static/engagement/overlay_panel7-58b03c50e1eac957ec12f6ced3bf7872.jpg")

Spot.create(title:"Times Square apartment with a View!!!", location:"Manhattan, NY", price:150.00, host_id: 2, num_guests:10, num_beds: 5, num_baths: 3, num_bedrooms:3, description:"Luxury apartment on the 79th floor with amazing view and walking distance to subway! Lots of things to do nearby. Washer and dryer available for use.", rules:"Check in is after 3pm. No pets. No parties.", lat:40.759017, lng: -73.985603, image:"http://luxurylaunches.com/wp-content/uploads/2014/01/2-bedroom-loft-rue-des-ecoles-1.jpg")

Spot.create(title:"Loft Near Downtown SF!", location:"San Fransisco, CA", price:199.00, host_id: 3, num_guests:2, num_beds: 1, num_baths: 1, num_bedrooms:3, description:"Beautiful apartment with loft bedroom available near downtown SF. 1 bathroom, near grocery stores anad public transport.", rules:"No smoking or parties. Check out by 10am. Not safe for infants.", lat:37.781475, lng: -122.416996, image:"http://rootofgood.com/wp-content/uploads/2014/09/airbnb-bedroom-quebec.jpg")

Spot.create(title:"Stunning apt in the heart of the south side of Dublin city", location:"Dublin, Ireland", price:115.00, host_id: 4, num_guests:5, num_beds: 4, num_baths: 2, num_bedrooms:3, description:"Bright and spacious apartment with huge windows right in the heart of Dublin. Walking distance to the Luas and St. Stephen's green. Experience the city on your doorstep.", rules:"Check in after 3pm and check out before 11am. No pets or children allowed. No smoking or parties/events.", lat:53.334820, lng: -6.263306, image:"https://www.irishtimes.com/polopoly_fs/1.2743628.1470226201!/image/image.jpg_gen/derivatives/box_620_330/image.jpg")

Spot.create(title:"Room in trendy apartment available for long term sharing walking distance to Trinity College", location:"Dublin, Ireland", price:89.00, host_id: 5, num_guests:2, num_beds: 1, num_baths: 1, num_bedrooms:1, description:"Ideal for short term or long term sharing! Students welcome. Nexxt to Trinity college in the center of the city. Close to main attractions, but quiet street.", rules:"Check in after 4pm. Check out before 10am. No pets or children allowed. No smoking.", lat:53.346328, lng: -6.257035, image:"https://d1052pu3rm1xk9.cloudfront.net/smww_768_verified_ur_6_50/6b572dc161a74096813723549d4a7829dd18e9a9dffbce2479d18555.jpg")

Spot.create(title:"Cozy and bright apartment in a great location!", location:"San Fransisco, CA", price:175.00, host_id: 6, num_guests:4, num_beds: 4, num_baths: 2, num_bedrooms:3, description:"This one three bedroom two bathrrom apartment is perfect to share during your visit to SF.  Great restaurants in walking distance. Quiet area. Near lots of public transportation.", rules:"Check in after 4pm. Check out before 10am. No pets or children allowed. No smoking.", lat:37.804507, lng: -122.415284, image:"http://www.4pm.ie/ShowThumbnail.aspx?id=605195&img=4pm.ie__o64c2272%20copy_Small.jpg&h=8000&w=8000&crop=False")

date1 = Date.new(5/5/2018)
date2 = Date.new(5/7/2018)

Booking.create({spot_id:2, user_id:2, check_in:date1, check_out:date2, num_guests:3})
