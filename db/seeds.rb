# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username:'guestuser', password:'password')
User.create(username:'aislinn', password:'password')

Spot.create(title:"App Academy", location:"Manhattan, NY", price:100.00, host_id: 1, num_guests:10, num_beds: 5, num_baths: 2, num_bedrooms:2, description:"Fun place", rules:"None", lat:40.751465, lng:-73.983930, image:"https://a0.muscache.com/airbnb/static/engagement/overlay_panel7-58b03c50e1eac957ec12f6ced3bf7872.jpg")

s = Spot.create(title:"Home", location:"Ardsley, NY", price:50.00, host_id: 2, num_guests:6, num_beds: 3, num_baths: 2, num_bedrooms:3, description:"home", rules:"None", lat:41.009335, lng: -73.841435)

Spot.create(title:"Random", location:"Random", price:60.00, host_id: 2, num_guests:3, num_beds: 3, num_baths: 2, num_bedrooms:3, description:"random", rules:"random", lat:42.009335, lng: -73.841435)
