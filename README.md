# Expense Tracker App
Simple expense tracker app to learn react and frontend concepts in practice.

## Creating a new application
1. Execute the command `yarn create react-app expense-tracker --template typescript`. This command will bootstrap a new react application with the most commonly used tools and libs like typescript, babel, jslint and webpack.
2. Add main assets (images and icons) that will be used in the application
3. Add styled components dependencies to enable css in js `yarn add styled-components`.
4. Define global styles. By default browsers set the font-size to 16px. When decreasing the font-size for smaller devices, it is a good practice to do so using percentage instead of fixed font-size (e.g 93.75% instead of 15px - 93.75% of 16px = 15px). The reason behind it is user preferences. In case the user has changed the font-size on their device, the application won't enforce a fixed font-size. Besides that, it is a good practice to use REM instead of pixels to define component sizes. REM is a unit of measure relative to the font-size thus it helps to keep the application sizes proportionately.
5. Add miragejs dependency to enable mock backend apis during development `yarn add miragejs -D`
6. Add http client axios dependency `yarn add axios`. The advantage of using axios over raw fetch is that it provides some features on top of the native fetch api like (1) easily configurable api host and root path (by default fetch always need the complete url), (2) responses automatically converted into json, (3) interception of requests and reponses to pre or post process them (e.g in case the response is 401 redirect the user to login page and embed access token in all requests), etc. These features could be custom implemented but using a library that is widely used by the community thus broadly tested is less error prone.
7. Add react-modal dependency to easy development of modals `yarn add react-modal`. It is always easier and safer to use libs developed and widely used by the community as they are broadly tested.


