# Introduction

Final Project Link: [https://gameclosure-3e705.web.app/](https://gameclosure-3e705.web.app/)

This WebApp was built in ReactJS for a 16 hour coding challenge to create a basic copy of "Adventure Capitalist", an idle business sim game. 

The goal of this game is to acquire businesses by making money.  You make money by clicking on businesses you've purchased and waiting for them to gain capital for you.  You can also hire managers so you don't need to manually click on your businesses to make money.  

Here is the web version of "Adventure Capitalist": [http://en.gameslol.net/adventure-capitalist-1086.html](http://en.gameslol.net/adventure-capitalist-1086.html)



# Basic Specifications 

- Ability to buy and upgrade several businesses
- Purchased businesses make money.  When clicked on, after a certain amount of time has passed, that business awards money to the user.  
- Managers can be hired to automatically collect money from businesses
- When you close the game, the next time you open it, you see how much money your businesses made for you 

# Implementation

This project was developed on ReactJs with Javascript ES6.  It is a front-end implementation without a server backend.  Given the time limit, I decided to focus on visual polish. 

I used React-Redux for keeping a global state of available businesses/managers and what the player had unlocked.  

React-Bootstrap is used for providing some useful UI components for displaying and structuring the data.  When this UI was insufficient, I used local `const style={ ... }` objects to tweak the UI at specific points.  As my UI tweaks were relatively minor, this system worked alright.  However, should the styling become more complex, switching back to using "classNames" to be able to more easily reuse certain css styling would become necessary.  


## Tech Philosophy
 
- Separate code between View from Functions
- Clearly define input dependencies between scripts.  Keys of Javascript Objects are always accessed via:
` const { varA, varB , ... } = props `
to declare what variables we rely on from certain objects.  
- Use HOCs to provide functionality to View components 
- Ensure each script or component are limited to one primary responsibility by subdividing into smaller components as necessary. 

## Organization 

### Overview 
```
project
└───src
│   └───components
│   └───functions
```
The code is organized into separate ReactJS component views from their data/function declarations as much as possible.  Typically, a component will not declare any functions or even state and will instead rely completely on "props" to define their behaviors.  This ensures maximal code reuse as the "functions" folder containing all functional behaviors can be reused in ReactNative or any other javascript proejct.  

App.js is the main starting point for the visualization of app.  Here the main View components are added that power the UI of the game.  

### Views 
```
project
└───src
│   └───components
│      └───businesses
│         └───components
│      └───managers
│      └───money
```
All visual elements can be found in src/components.  The respective subfolder names, "businesses", "managers", etc. correspond to the ReactJS Component Views for those game components.  For example, "businesses" contains views for seeing a business to buy, or the buttons/progress bars related to collecting from and upgrading a business. 

As there is more complexity to displaying businesses, that folder has a subfolder named "components" that are visual components specific to the display of businesses.  

"managers" and "money" have a HOC "withManagerModal" and "withMoneyGainedModal" respectively, that allows those popups to easily be embedded into another component without needing to modify that component's view code. 

There is a slight "exception" case when it comes to view code in this folder.  Ideally the "withTimer" HOC would be in the functions folder as it relates to functionality rather than view.  The current HOC is a bit of a hybrid as it relies on React Component lifecycle methods to function and uses the HTML DOM Window specific "setTimeout" function.  Replacing "setTimeout" with a more platform agnostic timing function would allow this function to be better reused between ReactJS and ReactNative, and thus web vs. mobile apps.  

### Functions 
```
project
└───src
│   └───functions
│      └───businesses
│      └───managers
│      └───state
│      └───helper
```

The "state" folder contains all code related to storing the unlock/upgrade status for all businesses and managers of the user.  Furthermore, it contains code for saving and retrieving this state when the web app opens or closes by using "local-storage" in the HTML Window.  As mentioned, React-Redux is used to manage global state.  

To make this code more platform agnostic, references to "local-storage" should be replaced with some platform dependent "storage adapter".  After doing so, the remaining code will be platform independent, and can selectively choose which "storage adapter" to use depending on which platform it's being deployed to. 


Functional components related to extracting and parsing state data from the React Redux Global Store are contained in the "businesses" and "managers" folders of "functions".  

The functional components "withBusinesses.jsx" and "withManagers.jsx" are responsible for extracting state from the React Redux Global Store and providing methods to modify that state. 

The functional components "withBusinessesFunc.jsx" and "withManagerFunc.jsx" provide additional derived data and methods from provided props for displaying information and providing functionality related to updating and parsing unlocked businesses and managers.  



### Config
```
project
└───src
│   └───config
│      └───images
```
The configuration of the game is described via a "businessConfig" and "managerConfig" javascript object.  Each key in these objects corresponds to a business or manager that can be unlocked.  The values for these keys are that business or manager's original prices and upgrade costs.  The businessConfig uses "images" to define the display icon for each business. 

As a future step, config can be described in a separate ".json" object instead of within a live script.  At that point, these existing scripts would just need to read in the ".json" object to know what the game configuration was.  


# TradeOffs

Several tradeoffs and future steps were mentioned in the sections above.  Below are some additional improvements that can be made: 

### Functionality 

- Typescript should be introduced as the project grows larger.  The code can get hard to read and modify when modifications to the "business" and "managers" objects are made.  These objects drive a lot of the game's functionality by telling all of the views how to display different elements to a business.  As I subdivided the view and functional components, a given "business" object can be modified by several functions and then referenced across several different components.  

- GlobalStateStorageManager.js manages "local-storage" updates based on web app open and close events.  This isn't great as this class is now coupled to HTML DOM Window events and can't be immediately used in other platforms.  To improve readability, better centralize our app open/close dependent code, and ensure our code is more platform agnostic, there should be a separate app lifecycle class that provides its own events for app open/close that we subscribe.  This class would be swapped out depending on which platform was used, while still maintaining the same methods.  

- GlobalStateStorageManager.js shouldn't define initialState.  It makes more sense for that code to exist within the config folder.  

- GlobalStateStorageManager.js code related to calculating offline income and time can be placed in another script. 

- The "formatMoney" and "formatName" helpers can be combined 

- Instead of Redux Global State having a "unlockedManagers" object, it could be a "managers" object with similar structure to "businesses".  This would allow us to easier extend the managers functionality, right now it's limited to a true/false boolean value of being unlocked.  

### View Styling  
- The height for BusinessView is hardcoded to '15vh' and OpenBusinessButton height is hardcoded to '12vh'.  A more flexible view system should be used to better scale the view to any screen size. 

- Some screen sizes can cause text to overrun and BusinessView sizes to be too small.  More css styling code should be added to ensure that size scaling works properly for all screen sizes.

- The WelcomeBack screen should convert seconds into DAYS:HOURS:MINUTE:SECONDS format 

- The general UI can be made clearer, the total money display at the top should be larger or be prefaced with "balance: $...."  I decided to keep it that way to ensure that mobile devices wouldn't run out of horizontal space when displaying this. 

- The content in the Cards displaying an individual business should be vertically centered.  This would require more css styling (a simple vertical-align: center wouldn't suffice here)


I wrote these TradeOffs from about 20 minutes of analysis.  If I had more time I'm sure I'd find more ways to improve this :) 
