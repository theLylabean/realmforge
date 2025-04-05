# D & D Charachter Builder

## Current Ideas:

### Features:
1. Step-by-step character creation flow:
    -Name & Basic Info (name, alignment, level)
    -Choose Race (pull race list from API, show traits)
    -Choose Class (pull class list, show proficiencies, features)
    -Choose Background (use API for starting gear and skills)
    -Assign Ability Scores (manual input or dice roll simulation)
    -Review Character Sheet (all info compiled for final view)

2. API Integration:
    -D&D 5e API for races, classes, backgrounds, equipment, etc.
    -Save selections to React state or localStorage for now.

### Visual:
1. Fonts: Use fantasy-style fonts from Google Fonts like:
    -MedievalSharp, Uncial Antiqua, Pirata One, or Cinzel
2. Textures:
    -A parchment or scroll background image
    -Borders or corners with scrollwork or runes
3. Icons & Logos:
    -Find or make class logos (swords, shields, arcane symbols)
    -Use Game-icons.net or Flaticon with fantasy sets
4. Animations: Subtle page transitions (Framer Motion?), hover effects for buttons or selections

### Components:
1. CharacterForm (holds step-by-step inputs)
    -RaceSelect
    -ClassSelect
    -BackgroundSelect
    -AbilityScoreInput
2. CharacterSheet (final review of all data)
3. StepNavigation or ProgressBar
4. Header with medieval logo or nameplate

### Bonus Features
(These can be implemented later)
1. Save/load multiple characters (localStorage or Firebase)
2. Export to PDF --if I get done with the base of the App, maybe put this in, but it's not important right now.
3. Roll dice (e.g., 4d6 for stat gen)
4. Add a “Randomize” mode
5. Toggle light/dark parchment themes

## Roadmap:

### Phase One: Setup & Core Functionality (MVP)
1. Create Basic Page Structure
    -Home / Character Builder page
    -Final Character Sheet page or component
2. Set Up Multi-Step Form
Use state to store progress through steps (could be in one component or multiple)
    1. Name & alignment
    2. Choose race (fetch from API, display info when selected)
    3. Choose class (fetch from API, display info)
    4. Assign ability scores (manual input for MVP)
    5. Final review (show all selected info)
3. Manage State
    -Use useState or useReducer to keep track of form selections
    -Possibly use Context to share data across components
4. Display Final Character Sheet
    -Show character name, race, class, ability scores, etc.
    -Pull extra details from the API where relevant (traits, features)

### Phase Two: Styling & Theming
1. Apply Medieval/Fantasy UI
    -Use parchment or scroll-style background
    -Add fantasy fonts from Google Fonts (e.g., Cinzel, Uncial Antiqua)
    -Use borders, icons, or textures for UI elements
    -Add simple CSS or Tailwind for layout/styling
2. Add Icons & Class Logos
    -Find or design class/race icons
    -Display icons next to options
    -Use consistent theme/styling throughout

### Phase Three: Monster Effectiveness Feature (do this at a later date)
1. Design the “Effectiveness Advisor”
    -After final character sheet is shown, analyze the character’s build
    -Match traits, class, or stats to general monster weaknesses
    -Show a panel: “Strong Against” / “Weak Against” monster types
2. Use API Data or Create a Simple Map
    -Option A: Use D&D API monster data and filter by type
    -Option B: Create your own simplified monster-type reference in a JSON file

### Phase Four: Stretch Goals
1. Add Save/Load Character
    -Save character to localStorage or a small backend (Firebase, etc.)
    -Allow user to return and edit/view characters
2. Add Spell/Equipment Selection
    -Pull available spells for the chosen class
    -Let user select starting equipment or starting spells
3. Add Dice Roller
    -Add a simple dice roller to generate ability scores (4d6 drop lowest)
    -Let user choose manual input or auto roll

### Final Steps
1. Polish UI and fix any bugs
2. Write README with instructions & features (research the best way to do this)
3. Deploy with Netlify or Vercel (research what this is for later)
4. Share it in your portfolio/demo to teacher!
