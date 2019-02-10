# Bindr, the dating app for books!

Bindr is an book recommendation app written in JavaScript using the MERN stack. Book data is scraped from goodreads.com and stored in MongoDB with a Node/Express server, Mongoose, Cloudinary for media storage, and Passport.js for user auth. It uses React Native through Expo with nativebase.io components on the frontend. 

## How to run it
- - -
If you have an Android, try out Bindr on Expo, https://expo.io/@esalvatier/Bindr-App.

You can run it locally on Android or ios by typing `expo start` in the terminal. Metro Bundler will open in your browser. The [server](https://github.com/dev-mev/Bindr-Server) is deployed to Heroku, and no additional steps are needed to connect client and server.

## How it works
- - -
Bindr offers recommendations based on books scraped from user-generated book lists on goodreads.com. The books are tagged with keywords that are tied to wordsearch and image selection components in the app that are then used to filter recommendations. We also scraped for weather-related book lists and request user-location when you load the app in order to gather current weather data through the [Dark Sky API](https://darksky.net/dev) and return recommendations based on weather. Audio comments and profile images are stored on cloudinary.com. 

![alt text](assets/images/readme_images/word_highlight.PNG "wordsearch")
![alt text](assets/images/readme_images/picture_selection.PNG "picture selection")
![alt text](assets/images/readme_images/recommendations.PNG "recommendations")
![alt text](assets/images/readme_images/swipe.PNG "swipe")
![alt text](assets/images/readme_images/saved.PNG "saved")
![alt text](assets/images/readme_images/book_detail.PNG "book detail")
![alt text](assets/images/readme_images/comments.PNG "comments")

## Contributors
- - -
- [dev-mev](https://github.com/dev-mev)
- [esalvatier](https://github.com/esalvatier)
- [leannr78](https://github.com/leannr78)
- [UVXY](https://github.com/UVXY)

## Credit
- - -
Much of the code for audio functionality comes from [React Native Audio Player](https://github.com/getstream/react-native-audio-player), which uses Expo's Audio package.

The wordsearch component was built using [wordsearch.js npm](https://www.npmjs.com/package/wordsearch "wordsearch npm").

Book data was scraped using [scrapy](https://github.com/scrapy/scrapy).