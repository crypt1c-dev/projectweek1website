
# Readme Portfolio website projectweek.
## Waarom deze readme?
Aangezien er bij het maken van de website niet expliciet gewerkt is aan het responsive maken van de website, is de website enkel zichtbaar zoals gewenst wanneer het op specifieke zoom, resolutie,... wordt weergegeven. Hier enkele specificaties:
## Specificaties
### resolutie
Het beeldscherm waarop ik de website heb gemaakt heeft een resolutie van `2560 x 1600`. De schaal die ingesteld staat in de windows-instellingen staat aangeduid op `200%`
![instellingen screenshot](https://i.imgur.com/fjYdHVW.png)

### browser
#### Welke browser
Bij het maken van de website heb ik gebruik gemaakt van de browser **Google Chrome**. Deze keuze heb ik gemaakt omdat Firefox Developer Edition de animaties niet ondersteunde die ik wilde toevoegen.

#### zoompercentage
Eens je de website hebt geopend in Google Chrome, is een zoompercentage van `90%` **noozakelijk** om de juiste layout te hebben.
## Wat kan er mis zijn?

Indien toch Firefox wordt gebruikt, is er waarschijnlijk geen probleem met positie-fouten of animatiemoeilijkheden.

Bij het gebruik van Google Chrome: Als je ziet dat de tekst erg is gekleefd aan de linkerkant van je scherm, en de afbeelding `Jens V.` of andere titels een beetje buiten beeld staan, volg dan volgende stappen:

**1 |** Ga naar de code van `style.css`.

**2 |** Hier ga je iets moeten aanpassen aan de code. Verwijder de regel `overflow-x: hidden;` in de body class:

```css 
body {
    font-family: "Red Hat Display", sans-serif;
    background-color: #f5f5f5;
    color: #333333;
    overflow-x: hidden; <-- verwijder deze regel
    width: 100vw;
}
```
**3 |** Ga terug naar je browser, scroll met de onderste scrollbar helemaal naar links zodat de scrollbar links tegen de rand zit en het logo / de titels niet meer hard tegen de rand kleven.

**4 |** Voeg de regel `overflow-x: hidden;` weer toe aan de body class.

**Vergeet niet op te slaan!**

![Logo](https://i.imgur.com/r4sux2c.png)


## Extra info
De map `wireframe, ontwerp, feedback` bevat geen screenshot na de feedback aangezien Emma (mijn buddy van ook vorige projectweek) mij niet echt feedback heeft gegeven (zie screenshot feedback buddy.png).
