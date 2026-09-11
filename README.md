# Panchangam & Thara Balam

A small static web app with two Telugu astrology/calendar tools:

- **Thara Balam** — nakshatra compatibility calculator between two birth stars.
- **Panchangam Finder** — pick any date and get the Tithi, Nakshatram, Ruthuvu, Maasam,
  Ayanam, Year (Shaka Samvat + Samvatsara), and Vaaram active on that day, computed from
  real astronomical positions rather than approximations.

Built as a plain HTML/CSS/JS site — no build step, no npm install, just open it in a browser.

## Features

- **Thara Balam**: pick a "from" and "to" nakshatra, get the Thara (Janma, Sampath, Vipath, ...)
  and whether it's considered auspicious.
- **Panchangam Finder**:
  - Tithi and Nakshatram shown with exact start/end times, including days that span two of
    either (found via precise astronomical search, not fixed-length approximations).
  - Ruthuvu (season), Maasam (lunar month), Ayanam (Uttarayana/Dakshinayana), and Year
    (Shaka Samvat + 60-year Samvatsara name) for the selected date.
  - Defaults to today's date on load.
  - **Copy** button (plain-text, so pasting elsewhere keeps clean formatting) on browsers
    without Web Share support; a **Share** button instead on browsers that do (mostly mobile).
  - Friendly error message if the astronomy library fails to load (e.g. CDN blocked), shown
    immediately on page load rather than only after the user tries to use it.
- Dark theme, tabbed layout, mobile-friendly.

## Tech

- Plain HTML/CSS/JS — no bundler, no framework, no dependencies to install.
- [Bootstrap 3.3.7](https://getbootstrap.com/docs/3.3/) (CSS only) and
  [Font Awesome 4.7](https://fontawesome.com/v4/) via CDN, for base styling/icons.
- [Astronomy Engine](https://github.com/cosinekitty/astronomy) (MIT licensed) via CDN, pinned to
  `2.1.19`, for real Sun/Moon positions — used to compute Tithi, Nakshatram, and the sidereal
  (Lahiri ayanamsha) quantities (Ruthuvu, Maasam, Ayanam, Year).

## Running locally

It's a static site, so any of these work:

- Just open `index.html` directly in a browser.
- Or serve it (needed if you want relative paths to behave exactly like a real deployment):

  ```bash
  npx serve .
  ```

An internet connection is required either way, since Bootstrap, Font Awesome, and Astronomy
Engine all load from CDNs.

## Project structure

```
index.html      Page markup, layout, styling
goodday.js      All app logic: Thara Balam, Panchangam calculations, tab switching, copy/share
beauty.css      A couple of small extra style tweaks
favicon.svg     App icon
```

## Accuracy notes

- The Lahiri ayanamsha used for Nakshatram/Ruthuvu/Maasam/Ayanam/Year is a linear model
  calibrated against drikpanchang.com's published values, accurate to well under an arcminute
  over more than a century.
- Ugadi (and the Shaka year rollover) is found astronomically each year as the New Moon
  immediately preceding that year's Mesha Sankranti.
- Known simplifications: adhika/kshaya (leap/deficient) lunar months aren't specially detected;
  Ruthuvu, Maasam, Ayanam, and Year are single snapshot values at local midnight (only Tithi and
  Nakshatram show every value that occurs during the selected calendar day).

## Credits

- [Astronomy Engine](https://github.com/cosinekitty/astronomy) by Don Cross — MIT License.
