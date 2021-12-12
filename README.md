# Expense Tracker App
Simple expense tracker app to learn react and frontend concepts in practice.

## Creating a new application
1. Execute the command `yarn create react-app expense-tracker --template typescript`. This command will bootstrap a new react application with the most commonly used tools and libs like typescript, babel, jslint and webpack.
2. Add main assets (images and icons) that will be used in the application
3. Add styled components dependencies to enable css in js `yarn add styled-components`.
4. Define global styles. By default browsers set the font-size to 16px. When decreasing the font-size for smaller devices, it is a good practice to do so using percentage instead of fixed font-size (e.g 93.75% instead of 15px - 93.75% of 16px = 15px). The reason behind it is user preferences. In case the user has changed the font-size on their device, the application won't enforce a fixed font-size. Besides that, it is a good practice to use REM instead of pixels to define component sizes. REM is a unit of measure relative to the font-size thus it helps to keep the application sizes proportionately.


