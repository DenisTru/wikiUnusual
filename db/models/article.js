const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/wikiUnusual';
mongoose.connect(mongoURI);
const articleSchema = new mongoose.Schema({});
// const articleSchema = new mongoose.Schema({
//     "Places_and_infrastructure": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Africa": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Antarctica": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Asia": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Europe": {
//       "type": [
//         "Array"
//       ]
//     },
//     "North_America": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Oceania": {
//       "type": [
//         "Array"
//       ]
//     },
//     "South_America": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Non-existent_places": {
//       "type": [
//         "Array"
//       ]
//     },
//     "History": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Mathematics_and_numbers": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Dates_and_timekeeping": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Language": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Unusual_names": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Science": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Physics": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Earth_sciences": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Chemistry_and_material_science": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Space_and_astronomy": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Medicine_and_health": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Human_sexuality_and_reproduction": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Individual_patients_and_staff": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Nervous_system_and_behaviour": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Phobias": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Animals": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Cats": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Cattle": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Chickens": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Squirrels": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Mammals": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Individual_animals": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Names_in_biology": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Plants": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Technology,_inventions_and_products": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Hygiene_and_sanitation": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Clothing_and_accessories": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Transport": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Computing": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Popular_culture,_entertainment_and_the_arts": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Art": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Comics_and_animation": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Literature": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Music": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Instruments": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Genres": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Composers,_musicians,_and_performers": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Musical_works": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Songs": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Albums": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Film": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Television": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Video_games": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Internet_memes_and_online_culture": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Festivals": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Stage_shows": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Food": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Beverages": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Restaurants": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Sports": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Animals_in_sports": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Athletes": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Sport_teams_and_associations": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Games_and_strategy_contests": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Folklore": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Mystery_animals_and_animal_folklore": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Society,_economy_and_law": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Politics_and_government": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Business_and_economics": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Law,_law_enforcement_and_crime": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Taxation": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Punishments": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Religion_and_spirituality": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Military": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Animals_in_the_military": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Wars,_operations_and_battles": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Weapons_and_military_equipment": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Death": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Questions": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Lists": {
//       "type": [
//         "Array"
//       ]
//     },
//     "Other_pages": {
//       "type": [
//         "Array"
//       ]
//     }
//   }
// );
const Article = mongoose.model('Article', articleSchema, 'articles');

// const oneFavorite = new mongoose.Schema({
//   name: String,
//   description: String,
// });

// const favoritesSchema = new mongoose.Schema({
//   favorites: [[oneFavorite]],
// });

// const Favorites = mongoose.model('Favorites', favoritesSchema);

module.exports = Article;
// module.exports = Favorites;
