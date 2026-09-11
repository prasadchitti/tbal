// Total stars - 27   Good predicts - 9
// 1. Janma Thara
// 2. Sampath Thara
// 3. Vipath Thara
// 4. Kshema Thara
// 5. Pratyak Thara
// 6. Saadhan Thara
// 7. Naidhan Thara
// 8. Mitra Thara
// 9. Param Mitra Thara
// var counter = 0;
// for(var i=stars.indexOf(birthstar);i<=stars.indexOf(daystar);i++){
//   counter++;
//   console.log(counter);
//   if(counter>9){
//     counter=1;
//   }
// }


//var birthstar = prompt("input your birth star");
//var daystar = prompt("input the particular day star");
//var birthstar = prompt("input your birth star");
//var daystar = prompt("input the particular day star");

//getstarindex();

// ---- Page load setup ----
document.addEventListener("DOMContentLoaded", function () {
  var dateInput = document.getElementById("tithiDate");
  if (dateInput && !dateInput.value) {
    var today = new Date();
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var dd = String(today.getDate()).padStart(2, "0");
    dateInput.value = today.getFullYear() + "-" + mm + "-" + dd;
  }

  var copyrightYearEl = document.getElementById("copyrightYear");
  if (copyrightYearEl) {
    copyrightYearEl.textContent = new Date().getFullYear();
  }

  // Warn up front (not just when the user clicks Get Panchangam) if the astronomy
  // library failed to load, e.g. the CDN is down or blocked.
  if (!isAstronomyReady()) {
    var resultEl = document.getElementById("tithiResult");
    if (resultEl) {
      resultEl.innerHTML = "<div class=\"tithi-summary\">" +
        "<i class=\"fa fa-exclamation-triangle\"></i> The astronomy library failed to load, " +
        "so Panchangam Finder is temporarily unavailable. Please check your internet connection " +
        "and reload the page." +
        "</div>";
    }
  }

  // Show Share where the browser supports the Web Share API (mainly mobile) and Copy
  // everywhere else, so there is always exactly one way to get the text out.
  var shareBtn = document.getElementById("sharePanchangamBtn");
  var copyBtn = document.getElementById("copyPanchangamBtn");
  if (shareBtn && navigator.share) {
    shareBtn.style.display = "";
    if (copyBtn) {
      copyBtn.style.display = "none";
    }
  }
});

// ---- Tab switching ----
function showTab(name) {
  var tabs = {
    thara: { pane: "tabThara", btn: "tabBtnThara" },
    tithi: { pane: "tabTithi", btn: "tabBtnTithi" }
  };
  Object.keys(tabs).forEach(function (key) {
    var isActive = key === name;
    document.getElementById(tabs[key].pane).classList.toggle("active", isActive);
    document.getElementById(tabs[key].btn).classList.toggle("active", isActive);
  });
}

// ---- Clipboard copy (plain text, so pasting elsewhere keeps its own formatting) ----
function flashButtonText(btn, message) {
  if (!btn) {
    return;
  }
  if (btn.dataset.flashTimeout) {
    clearTimeout(Number(btn.dataset.flashTimeout));
  } else {
    btn.dataset.originalHtml = btn.innerHTML;
  }
  btn.innerHTML = message;
  var timeoutId = setTimeout(function () {
    btn.innerHTML = btn.dataset.originalHtml;
    delete btn.dataset.flashTimeout;
    delete btn.dataset.originalHtml;
  }, 1500);
  btn.dataset.flashTimeout = String(timeoutId);
}

function legacyCopy(text) {
  var textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  var ok = false;
  try {
    ok = document.execCommand("copy");
  } catch (e) {
    ok = false;
  }
  document.body.removeChild(textarea);
  return ok;
}

function copyTextToClipboard(text, btn) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(function () {
      flashButtonText(btn, "<i class=\"fa fa-check\"></i> Copied!");
    }).catch(function () {
      flashButtonText(btn, legacyCopy(text) ? "<i class=\"fa fa-check\"></i> Copied!" : "Copy failed");
    });
  } else {
    flashButtonText(btn, legacyCopy(text) ? "<i class=\"fa fa-check\"></i> Copied!" : "Copy failed");
  }
}

function copyPanchangam() {
  var btn = document.getElementById("copyPanchangamBtn");
  if (!lastPanchangamText) {
    flashButtonText(btn, "Nothing to copy yet");
    return;
  }
  copyTextToClipboard(lastPanchangamText, btn);
}

function sharePanchangam() {
  var btn = document.getElementById("sharePanchangamBtn");
  if (!lastPanchangamText) {
    flashButtonText(btn, "Nothing to share yet");
    return;
  }
  if (!navigator.share) {
    flashButtonText(btn, "Sharing not supported here");
    return;
  }
  navigator.share({ title: "Panchangam", text: lastPanchangamText }).catch(function () {
    // User cancelled the share sheet, or it failed silently - nothing to show for either case.
  });
}

function getstarindex() {
var str1 = document.getElementById("str1").value;
var str2 = document.getElementById("str2").value;
console.log(str1, str2);
var stars = ["aswini", "bharani", "krithika", "rohini", "mrugasira", "arudra", "punarvasu", "pushyami", "aslesha", "makha", "pubha", "uthara", "hastha", "chitha", "swathi", "visakha", "anuradha", "jyestha", "moola", "poorvashada", "utharashada", "sravanam", "dhanista", "sathabhisham", "purvabadra", "utharabadra", "revathi"];
var counter = 0;

if (stars.indexOf(str1) > stars.indexOf(str2)) {
  for (i = stars.indexOf(str1); i < stars.length; i++) {
    counter++;
    if (counter > 9) {
      counter = 1;
    }
  }
  for (i = 0; i <= stars.indexOf(str2); i++) {
    counter++;
    if (counter > 9) {
      counter = 1;
    }
  }
  //console.log("else:" + counter);
}
else (stars.indexOf(str1) <= stars.indexOf(str2))
  for (var i = stars.indexOf(str1); i <= stars.indexOf(str2); i++) {
    counter++;
    //console.log(counter);
    if (counter > 9) {
      counter = 1;
  }
}
// (str1==="")||(str2==="")
if((!stars.includes(str1))||(!stars.includes(str2))){
  document.getElementById("thara").innerHTML = "Either typo or missed field";
}
else{
if (counter === 1) {
  //alert("Janma Thara, Not that good");
  document.getElementById("thara").innerHTML = "Janma Thara, may not be good";
}
else if (counter === 2) {
  // alert("Sampath Thara, A good one");
  document.getElementById("thara").innerHTML = "Sampath Thara, A good one";
}
else if (counter === 3) {
  // alert("Vipath Thara, Not that good");
  document.getElementById("thara").innerHTML = "Vipath Thara, may not be good";
}
else if (counter === 4) {
  // alert("Kshema Thara, A good one");
  document.getElementById("thara").innerHTML = "Kshema Thara, A good one";
}
else if (counter === 5) {
  // alert("Pratyak Thara, Not that good");
  document.getElementById("thara").innerHTML = "Pratyak Thara, may not be good";
}
else if (counter === 6) {
  // alert("Saadhan Thara, A good one");
  document.getElementById("thara").innerHTML = "Saadhan Thara, A good one";
}
else if (counter === 7) {
  // alert("Naidhan Thara, Not that good");
  document.getElementById("thara").innerHTML = "Naidhan Thara, may not be good";
}
else if (counter === 8) {
  // alert("Mitra Thara, A good one");
  document.getElementById("thara").innerHTML = "Mitra Thara, A good one";
}
else if (counter === 9) {
  // alert("Param Mitra Thara, A good one");
  document.getElementById("thara").innerHTML = "Param Mitra Thara, A good one";
}
else{
  alert("Error");
}
}
console.log(stars.indexOf(str1));
console.log(stars.indexOf(str2));
//console.log("final : "+counter);
//console.log("here : "i);
// for(var j=stars.indexOf(daystar);j<=27;j++){
//   if (j>27) {
//     j=0;
//   }
// }
}
function resetdata(){
document.getElementById('str1').value = '';
document.getElementById('str2').value = '';
document.getElementById("thara").innerHTML = "Data cleared";
}

function swap() {
  let s1 = document.getElementById("str1").value;
  let s2 = document.getElementById("str2").value
  document.getElementById("str1").value = s2;
  document.getElementById("str2").value = s1;
  document.getElementById("thara").innerHTML = "Fields swapped";

}

// ---- Tithi Finder ----
// Tithi = 12-degree slice of Moon's ecliptic elongation from the Sun (0-360 deg -> 30 tithis).
// Names 0-13 are shared by both paksha; the 15th (index 14) differs: Punnami vs Amavasya.
var TITHI_NAMES = ["Padyami", "Vidiya", "Thadiya", "Chavithi", "Panchami", "Shashti", "Sapthami",
  "Ashtami", "Navami", "Dasami", "Ekadasi", "Dwadasi", "Thrayodasi", "Chaturdasi"];

function isAstronomyReady() {
  return (typeof Astronomy !== "undefined") &&
    (typeof Astronomy.MoonPhase === "function") &&
    (typeof Astronomy.SearchMoonPhase === "function") &&
    (typeof Astronomy.EclipticGeoMoon === "function") &&
    (typeof Astronomy.SunPosition === "function") &&
    (typeof Astronomy.Search === "function") &&
    (typeof Astronomy.MakeTime === "function");
}

// ---- Sidereal (Lahiri ayanamsha) helpers, used for Nakshatram/Ruthuvu/Year ----
// Astronomy Engine only gives tropical (of-date) ecliptic longitudes; Vedic panchangam
// quantities need the sidereal longitude, i.e. tropical longitude minus the ayanamsha.
// Calibrated against drikpanchang.com's published Lahiri Ayanamsha (1950-01-01: 23.165392 deg,
// 2026-09-11: 24.236710 deg); precession is close enough to linear over human timescales that
// two widely-spaced calibration points reproduce a third (1950) to within half an arcsecond.
var AYANAMSHA_EPOCH_MS = Date.UTC(1950, 0, 1, 0, 0, 0);
var AYANAMSHA_AT_EPOCH = 23.165392;
var AYANAMSHA_DEG_PER_DAY = 0.00003824561;

function ayanamsha(date) {
  var days = (date.getTime() - AYANAMSHA_EPOCH_MS) / 86400000;
  return AYANAMSHA_AT_EPOCH + days * AYANAMSHA_DEG_PER_DAY;
}

function normDeg360(deg) {
  deg = deg % 360;
  if (deg < 0) deg += 360;
  return deg;
}

function normDeg180(deg) {
  deg = deg % 360;
  if (deg <= -180) deg += 360;
  if (deg > 180) deg -= 360;
  return deg;
}

function moonTropicalLon(astroTime) {
  return Astronomy.EclipticGeoMoon(astroTime).lon;
}

function sunTropicalLon(astroTime) {
  return Astronomy.SunPosition(astroTime).elon;
}

function siderealLongitude(tropicalLonFn, astroTime) {
  return normDeg360(tropicalLonFn(astroTime) - ayanamsha(astroTime.date));
}

// Generic root-finder wrapper: finds when a body's sidereal longitude crosses targetDeg.
function searchSiderealCrossing(tropicalLonFn, targetDeg, startDate, limitDays) {
  var t0 = Astronomy.MakeTime(startDate);
  var t1 = limitDays >= 0 ? t0 : t0.AddDays(limitDays);
  var t2 = limitDays >= 0 ? t0.AddDays(limitDays) : t0;
  function f(t) {
    return normDeg180(siderealLongitude(tropicalLonFn, t) - targetDeg);
  }
  try {
    return Astronomy.Search(f, t1, t2, { dt_tolerance_seconds: 1 });
  } catch (e) {
    return null;
  }
}

function tithiFromIndex(globalIndex) {
  var paksha = globalIndex < 15 ? "Sukla Paksha" : "Krishna Paksha";
  var localIndex = globalIndex % 15;
  var name = localIndex < 14 ? TITHI_NAMES[localIndex] :
    (paksha === "Sukla Paksha" ? "Punnami (Full Moon)" : "Amavasya (New Moon)");
  return { paksha: paksha, name: name, number: localIndex + 1 };
}

function formatTithiTime(date) {
  if (!date) {
    return "unknown";
  }
  try {
    return date.toLocaleString(undefined, { dateStyle: "medium", timeStyle: "medium" });
  } catch (e) {
    return date.toLocaleString();
  }
}

// ---- Nakshatram (day-spanning, same treatment as Tithi) ----
// 27 nakshatras = 360/27 deg slices of the Moon's sidereal longitude. Reuses the same
// 27 star names already used by the Thara Balam feature, just capitalized for display.
var NAKSHATRA_NAMES = ["Aswini", "Bharani", "Krithika", "Rohini", "Mrugasira", "Arudra", "Punarvasu",
  "Pushyami", "Aslesha", "Makha", "Pubba", "Uthara", "Hastha", "Chitha", "Swathi", "Visakha",
  "Anuradha", "Jyestha", "Moola", "Poorvashada", "Utharashada", "Sravanam", "Dhanista",
  "Sathabhisham", "Purvabadra", "Utharabadra", "Revathi"];
var NAKSHATRA_SPAN_DEG = 360 / 27;

function getNakshatraEntries(dayStart, dayEnd) {
  var entries = [];
  var cursor = dayStart;
  var currentIndex = null;
  var maxIterations = 4;

  for (var iteration = 0; iteration < maxIterations; iteration++) {
    if (currentIndex === null) {
      var lon = siderealLongitude(moonTropicalLon, Astronomy.MakeTime(cursor));
      currentIndex = Math.floor(lon / NAKSHATRA_SPAN_DEG) % 27;
    } else {
      currentIndex = (currentIndex + 1) % 27;
    }

    var targetEnd = ((currentIndex + 1) * NAKSHATRA_SPAN_DEG) % 360;
    var endResult = searchSiderealCrossing(moonTropicalLon, targetEnd, cursor, 3);
    var endTime = endResult ? endResult.date : null;

    var startTime;
    if (iteration === 0) {
      var targetStart = (currentIndex * NAKSHATRA_SPAN_DEG) % 360;
      var startResult = searchSiderealCrossing(moonTropicalLon, targetStart, cursor, -3);
      startTime = startResult ? startResult.date : null;
    } else {
      startTime = cursor;
    }

    entries.push({ name: NAKSHATRA_NAMES[currentIndex], start: startTime, end: endTime });

    if (!endTime || endTime >= dayEnd) {
      break;
    }
    cursor = endTime;
  }
  return entries;
}

// ---- Ruthuvu (Vedic/lunar-month-based season) ----
// The amanta lunar month is named after whichever solar Sankranti (rashi ingress) falls
// within it. In the ordinary (non-adhika-masa) case this is: if the Sankranti into the
// NEXT rashi happens before the next Amavasya, this month is already named for that next
// rashi; otherwise this month is still named for the current rashi (its own Sankranti
// already happened earlier this month). Adhika/kshaya (leap/deficient) months, a rare
// once-per-~32-month event, are not specially detected.
var RITU_NAMES = ["Vasantha Ruthuvu", "Greeshma Ruthuvu", "Varsha Ruthuvu", "Sharad Ruthuvu",
  "Hemanta Ruthuvu", "Shishira Ruthuvu"];

function getAmantaMonthIndex(dayStart) {
  var t0 = Astronomy.MakeTime(dayStart);
  var currentRashi = Math.floor(siderealLongitude(sunTropicalLon, t0) / 30);
  var nextRashiTarget = ((currentRashi + 1) % 12) * 30;
  var nextSankranti = searchSiderealCrossing(sunTropicalLon, nextRashiTarget, dayStart, 40);
  var nextAmavasya = Astronomy.SearchMoonPhase(0, dayStart, 35);
  if (nextSankranti && nextAmavasya && nextSankranti.date <= nextAmavasya.date) {
    return (currentRashi + 1) % 12;
  }
  return currentRashi;
}

function getRitu(dayStart) {
  var monthIndex = getAmantaMonthIndex(dayStart);
  return RITU_NAMES[Math.floor(monthIndex / 2)];
}

// ---- Maasam (amanta lunar month name) ----
var MAASAM_NAMES = ["Chaitra", "Vaishakha", "Jyeshtha", "Ashadha", "Sravana", "Bhadrapada",
  "Ashwayuja", "Karthika", "Margasira", "Pushya", "Magha", "Phalguna"];

function getMaasam(dayStart) {
  var monthIndex = getAmantaMonthIndex(dayStart);
  return MAASAM_NAMES[monthIndex] + " Maasam";
}

// ---- Ayanam ----
// Uttarayana runs from Makara Sankranti (Sun entering sidereal Capricorn, ~mid-January) to
// Karka Sankranti (~mid-July); Dakshinayana is the other half of the year.
function getAyanam(dayStart) {
  var t0 = Astronomy.MakeTime(dayStart);
  var currentRashi = Math.floor(siderealLongitude(sunTropicalLon, t0) / 30);
  var isUttarayana = currentRashi >= 9 || currentRashi <= 2; // Makara(9),Kumbha,Meena,Mesha,Vrishabha,Mithuna(2)
  return isUttarayana ? "Uttarayanam" : "Dakshinayanam";
}

// ---- Year (Shaka Samvat + 60-year Samvatsara cycle, Telugu/Shaka reckoning) ----
// 60-name cycle and anchor (Shaka 1948 = Parabhava, index 39) per the standard Samvatsara
// list (en.wikipedia.org/wiki/Samvatsara), cross-checked against drikpanchang.com.
var SAMVATSARA_NAMES = ["Prabhava", "Vibhava", "Shukla", "Pramoduta", "Prajapati", "Angirasa",
  "Srimukha", "Bhava", "Yuva", "Dhatru", "Ishvara", "Bahudhanya", "Pramathi", "Vikrama",
  "Vrushaprajaa", "Chitrabhanu", "Swabhanu", "Tarana", "Parthiva", "Vyaya", "Sarvajit",
  "Sarvadhari", "Virodhi", "Vikruti", "Khara", "Nandana", "Vijaya", "Jaya", "Manmatha",
  "Durmukha", "Hevilambi", "Vilambi", "Vikari", "Sharvari", "Plava", "Shubhakrit", "Shobhakrit",
  "Krodhi", "Vishvavasu", "Parabhava", "Plavanga", "Kilaka", "Saumya", "Sadharana",
  "Virodhikrutha", "Paridhaavi", "Pramaadi", "Ananda", "Rakshasa", "Nala", "Pingala",
  "Kalayukta", "Siddharthi", "Raudri", "Durmati", "Dundubhi", "Rudhirodgari", "Raktakshi",
  "Krodhana", "Akshaya"];
var SAMVATSARA_ANCHOR_SHAKA_YEAR = 1948;
var SAMVATSARA_ANCHOR_INDEX = 39; // Parabhava

function findMeshaSankranti(gregorianYear) {
  var searchStart = new Date(gregorianYear, 2, 15, 0, 0, 0, 0); // March 15
  return searchSiderealCrossing(sunTropicalLon, 0, searchStart, 60);
}

// Ugadi = the New Moon immediately preceding Mesha Sankranti (the lunar month containing
// Mesha Sankranti is, by definition, Chaitra). The Shaka year (and Samvatsara) is treated as
// rolling over for the whole civil day Ugadi falls on, matching how panchangam sites display it,
// even though the exact astronomical instant is rarely at local midnight.
function findUgadi(gregorianYear) {
  var meshaSankranti = findMeshaSankranti(gregorianYear);
  if (!meshaSankranti) {
    return null;
  }
  return Astronomy.SearchMoonPhase(0, meshaSankranti.date, -40);
}

function getShakaYear(dayStart) {
  var year = dayStart.getFullYear();
  var ugadi = findUgadi(year);
  if (!ugadi) {
    return year - 78;
  }
  var ugadiDay = new Date(ugadi.date.getFullYear(), ugadi.date.getMonth(), ugadi.date.getDate());
  return dayStart >= ugadiDay ? year - 78 : year - 79;
}

function getYearDisplay(dayStart) {
  var shakaYear = getShakaYear(dayStart);
  var idx = ((shakaYear - SAMVATSARA_ANCHOR_SHAKA_YEAR + SAMVATSARA_ANCHOR_INDEX) % 60 + 60) % 60;
  return "Shaka " + shakaYear + ", " + SAMVATSARA_NAMES[idx] + " Samvatsaram";
}

// ---- Vaaram (weekday) ----
var VAARAM_NAMES = ["Aadi Vaaram", "Soma Vaaram", "Mangala Vaaram", "Budha Vaaram", "Guru Vaaram",
  "Shukra Vaaram", "Shani Vaaram"];

function getVaaram(dayStart) {
  return VAARAM_NAMES[dayStart.getDay()];
}

var lastPanchangamText = "";

function getTithi() {
  var resultEl = document.getElementById("tithiResult");
  lastPanchangamText = "";

  if (!isAstronomyReady()) {
    resultEl.innerHTML = "Could not load the astronomy library (Astronomy Engine). " +
      "Check your internet connection and reload the page.";
    return;
  }

  var dateVal = document.getElementById("tithiDate").value;
  if (!dateVal) {
    resultEl.innerHTML = "Please select a date first.";
    return;
  }

  var parts = dateVal.split("-");
  var year = parseInt(parts[0], 10);
  var month = parseInt(parts[1], 10);
  var day = parseInt(parts[2], 10);

  var dayStart = new Date(year, month - 1, day, 0, 0, 0, 0);
  var dayEnd = new Date(year, month - 1, day + 1, 0, 0, 0, 0);

  var html = "";
  var text = ["Panchangam for " + dayStart.toLocaleDateString()];

  // Year, Ayanam, Ruthuvu, Maasam
  try {
    var yearLine = "Year: " + getYearDisplay(dayStart);
    var ayanamLine = "Ayanam: " + getAyanam(dayStart);
    var rituLine = "Ruthuvu: " + getRitu(dayStart);
    var maasamLine = "Maasam: " + getMaasam(dayStart);
    html += "<div class=\"tithi-summary\">" +
      "<span class=\"tithi-name\">Year:</span> " + getYearDisplay(dayStart) + "<br>" +
      "<span class=\"tithi-name\">Ayanam:</span> " + getAyanam(dayStart) + "<br>" +
      "<span class=\"tithi-name\">Ruthuvu:</span> " + getRitu(dayStart) + "<br>" +
      "<span class=\"tithi-name\">Maasam:</span> " + getMaasam(dayStart) +
      "</div>";
    text.push("", yearLine, ayanamLine, rituLine, maasamLine);
  } catch (e) {
    html += "<div class=\"tithi-summary\">Could not compute Year/Ayanam/Ruthuvu/Maasam: " + e.message + "</div>";
    text.push("", "Could not compute Year/Ayanam/Ruthuvu/Maasam: " + e.message);
  }

  // Tithi
  var entries = [];
  var cursor = dayStart;
  var currentIndex = null;
  var maxIterations = 4;

  try {
    for (var iteration = 0; iteration < maxIterations; iteration++) {
      if (currentIndex === null) {
        var phase = Astronomy.MoonPhase(cursor);
        currentIndex = Math.floor(phase / 12) % 30;
      } else {
        currentIndex = (currentIndex + 1) % 30;
      }

      var targetLon = ((currentIndex + 1) * 12) % 360;
      var endResult = Astronomy.SearchMoonPhase(targetLon, cursor, 3);
      var endTime = endResult ? endResult.date : null;

      var startTime;
      if (iteration === 0) {
        var startTargetLon = (currentIndex * 12) % 360;
        var startResult = Astronomy.SearchMoonPhase(startTargetLon, cursor, -3);
        startTime = startResult ? startResult.date : null;
      } else {
        startTime = cursor;
      }

      entries.push({
        tithi: tithiFromIndex(currentIndex),
        start: startTime,
        end: endTime
      });

      if (!endTime || endTime >= dayEnd) {
        break;
      }
      cursor = endTime;
    }

    html += "<h4>Tithi</h4>";
    text.push("", "Tithi:");
    for (var i = 0; i < entries.length; i++) {
      var entry = entries[i];
      html += "<div class=\"tithi-entry\">" +
        "<span class=\"tithi-name\">" + entry.tithi.paksha + ", " + entry.tithi.name +
        " (Tithi " + entry.tithi.number + ")</span><br>" +
        "Starts: " + formatTithiTime(entry.start) + "<br>" +
        "Ends: " + formatTithiTime(entry.end) +
        "</div>";
      text.push("- " + entry.tithi.paksha + ", " + entry.tithi.name + " (Tithi " + entry.tithi.number + "): " +
        formatTithiTime(entry.start) + " - " + formatTithiTime(entry.end));
    }
  } catch (e) {
    html += "<h4>Tithi</h4><div class=\"tithi-entry\">Error computing Tithi: " + e.message + "</div>";
    text.push("", "Tithi: Error computing Tithi: " + e.message);
  }

  // Nakshatram
  try {
    var nakshatraEntries = getNakshatraEntries(dayStart, dayEnd);
    html += "<h4>Nakshatram</h4>";
    text.push("", "Nakshatram:");
    for (var n = 0; n < nakshatraEntries.length; n++) {
      var nakEntry = nakshatraEntries[n];
      html += "<div class=\"tithi-entry\">" +
        "<span class=\"tithi-name\">" + nakEntry.name + "</span><br>" +
        "Starts: " + formatTithiTime(nakEntry.start) + "<br>" +
        "Ends: " + formatTithiTime(nakEntry.end) +
        "</div>";
      text.push("- " + nakEntry.name + ": " + formatTithiTime(nakEntry.start) + " - " + formatTithiTime(nakEntry.end));
    }
  } catch (e) {
    html += "<h4>Nakshatram</h4><div class=\"tithi-entry\">Error computing Nakshatram: " + e.message + "</div>";
    text.push("", "Nakshatram: Error computing Nakshatram: " + e.message);
  }

  // Vaaram
  try {
    var vaaramLine = "Vaaram: " + getVaaram(dayStart);
    html += "<div class=\"tithi-summary\">" +
      "<span class=\"tithi-name\">Vaaram:</span> " + getVaaram(dayStart) +
      "</div>";
    text.push("", vaaramLine);
  } catch (e) {
    html += "<div class=\"tithi-summary\">Could not compute Vaaram: " + e.message + "</div>";
    text.push("", "Could not compute Vaaram: " + e.message);
  }

  resultEl.innerHTML = html;
  lastPanchangamText = text.join("\n");
}