# Severi Boesen - A portfolio website

Currently deployed at: https://boesen.netlify.app/

This is a portfolio website created with NextJS, Tailwind CSS and Flowbite React.
It is a single-page website with several components, so read the instructions before diving in.

## Installation
1. Pull main branch
2. run 'npm i'
3. run 'npm run dev' to open project in http://localhost:3000

## Project Structure
SRC contains all major content, excluding pictures.
- **app** folder contains main page info, including layout and metadata.
- **components** folder contains each component, with a subfolder named *subcomponents* that contains subcomponents

Public contains image files used.

### Components
 Each section has its own component. Website header and footer have their own respective components as well.
 - **code** contains my coding experience overview with a timeline subcomponent
 - **events** contains my event organization experience overview with a event carousel subcomponent
 - **music** contains my music career overview with a card subcomponent
 - **hero** contain page title and a simple script that runs 3 titles in a loop: producer of music/events/code
 - **general** contains a general person overview
 - **footer** contains footer information
 - **header** contain header information

 #### Subcomponents
 There are 3 subcomponents, one for each subsection of my skillset. Each one contains a Flowbite React component utilized for showcasing different features.
 - **codeTimeline**  contains a timeline component
 - **eventsCarousel** contains a carousel component
 - **musicCards** contains a Card component collective