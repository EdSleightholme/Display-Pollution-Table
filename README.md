## TO RUN 

cmd line to dictionary. type in `npm i` and then `npm run start` 

# THE TASK

Brightbridge Council are a new EarthSense customer who have purchased a fleet of Zephyrs (air quality sensors). Your task is to create a React application that allows the council to monitor each of their Zephyrs along with their latest pollution measurements.

### Things to Note

In the utils.ts file, you will find:

1. An array of Brightbridge's Zephyrs, including various pieces of metadata as well as the latest pollution measurements they have taken.
2. A colourscale for the pollution measurements ranging from 1 to 10.

### Things to Do

1. Display the name, type, battery charge, NO₂, and PM₂.₅ measurements for each Zephyr in a list.
2. Order the list so that standard Zephyr types are displayed before enhanced Zephyr types.
3. Some of the Zephyrs listed are no longer owned by Brightbridge Council - remove these from the list.
4. Use the colourscale to display a colour associated with each Zephyr. You should base this color on the highest value between the NO₂ and PM₂.₅ measurements.
5. Add a filter that allows the council to show either: all Zephyrs, standard Zephyrs alone, or enhanced Zephyrs alone.
6. Do pay attention to styles and how you can present the information in a clean, engaging way for the council.

## Review

Add a table and by default display all the area. Add 2 checkboxes to filter between the types of filter. 

Their are 5 files to mention. 

App.tsx that deal with loading data in and out of state and the general big picture layout of the table and the headers
    Also it should be noted with the data loading in to state the colors are added on to the correct each entry.  

zephrRow.tsx that is a file about hwo a single row will be displayed on the table

types.ts that contains all types used though out the project

util.ts contains all base data that is used

App.css contains all the css styles used 

