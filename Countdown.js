// Set the date we're counting down to
var countdownPrimary = new Date("Jun 12, 2026 15:30:00").getTime();         // End-of-School Year for Primary
var countdownSeventh = new Date("Jun 12, 2026 15:30:00").getTime();         // Last Day of Classes for GR7-9 & 11
var countdownAwards = new Date("May 24, 2026 15:30:00").getTime();          // Award Ceremony
var countdownEye = new Date("Jun 1, 2026 08:30:00").getTime();              // End-of-Year Examinations for GR7-9 & 11
var countdownEaster = new Date("Apr 2, 2026 15:30:00").getTime();           // Start of Easter Break
var countdownEas = new Date("May 4, 2026 08:30:00").getTime();              // eAssessment Examinations for GR10
var countdownFirstTerm = new Date("Dec 19, 2025 15:30:00").getTime();       // End of First Term
var countdownSecondTerm = new Date("Mar 13, 2026 15:30:00").getTime();      // End of Second Term
var countdownThirdTerm = new Date("Jun 12, 2026 15:30:00").getTime();       // End of Third Term
var countdownGraduation = new Date("Jun 11, 2026 08:30:00").getTime();      // Grade 6 Graduation
var countdownExhibition = new Date("May 27, 2026 08:30:00").getTime();      // Grade 6 Exhibition
var countdownSummerCamp = new Date("Jun 22, 2026 08:30:00").getTime();      // Start of Summer Camp

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distancePrm = countdownPrimary - now;
    var distanceSeg = countdownSeventh - now;
    var distanceAwd = countdownAwards - now;
    var distanceEye = countdownEye - now;
    var distanceEst = countdownEaster - now;
    var distanceEas = countdownEas - now;
    var distancFrt = countdownFirstTerm - now;
    var distanceSet = countdownSecondTerm - now;
    var distanceTht = countdownThirdTerm - now;
    var distanceSmc = countdownSummerCamp - now;

    // Time calculations for days, hours, minutes and seconds - Primary
    var daysPrm = Math.floor(distancePrm / (1000 * 60 * 60 * 24));
    var hoursPrm = Math.floor((distancePrm % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutesPrm = Math.floor((distancePrm % (1000 * 60 * 60)) / (1000 * 60));
    var secondsPrm = Math.floor((distancePrm % (1000 * 60)) / 1000);

    // Time calculations for days, hours, minutes and seconds - Seventh Grade
    var daysSeg = Math.floor(distanceSeg / (1000 * 60 * 60 * 24));
    var hoursSeg = Math.floor((distanceSeg % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutesSeg = Math.floor((distanceSeg % (1000 * 60 * 60)) / (1000 * 60));
    var secondsSeg = Math.floor((distanceSeg % (1000 * 60)) / 1000);

    // Time calculations for days, hours, minutes and seconds - Award Ceremony
    var daysAwd = Math.floor(distanceAwd / (1000 * 60 * 60 * 24));
    var hoursAwd = Math.floor((distanceAwd % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutesAwd = Math.floor((distanceAwd % (1000 * 60 * 60)) / (1000 * 60));
    var secondsAwd = Math.floor((distanceAwd % (1000 * 60)) / 1000);

    // Time calculations for days, hours, minutes and seconds - End of Year Examinations
    var daysEye = Math.floor(distanceEye / (1000 * 60 * 60 * 24));
    var hoursEye = Math.floor((distanceEye % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutesEye = Math.floor((distanceEye % (1000 * 60 * 60)) / (1000 * 60));
    var secondsEye = Math.floor((distanceEye % (1000 * 60)) / 1000);

    // Time calculations for days, hours, minutes and seconds - Easter Break
    var daysEst = Math.floor(distanceEst / (1000 * 60 * 60 * 24));
    var hoursEst = Math.floor((distanceEst % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutesEst = Math.floor((distanceEst % (1000 * 60 * 60)) / (1000 * 60));
    var secondsEst = Math.floor((distanceEst % (1000 * 60)) / 1000);

    // Time calculations for days, hours, minutes and seconds - eAssessment Examinations
    var daysEas = Math.floor(distanceEas / (1000 * 60 * 60 * 24));
    var hoursEas = Math.floor((distanceEas % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutesEas = Math.floor((distanceEas % (1000 * 60 * 60)) / (1000 * 60));
    var secondsEas = Math.floor((distanceEas % (1000 * 60)) / 1000);

    // Time calculations for days, hours, minutes and seconds - End of First Term
    var daysFrt = Math.floor(distancFrt / (1000 * 60 * 60 * 24));
    var hoursFrt = Math.floor((distancFrt % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutesFrt = Math.floor((distancFrt % (1000 * 60 * 60)) / (1000 * 60));
    var secondsFrt = Math.floor((distancFrt % (1000 * 60)) / 1000);
    
    // Time calculations for days, hours, minutes and seconds - End of Second Term
    var daysSet = Math.floor(distanceSet / (1000 * 60 * 60 * 24));
    var hoursSet = Math.floor((distanceSet % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutesSet = Math.floor((distanceSet % (1000 * 60 * 60)) / (1000 * 60));
    var secondsSet = Math.floor((distanceSet % (1000 * 60)) / 1000);

    // Time calculations for days, hours, minutes and seconds - End of Third Term
    var daysTht = Math.floor(distanceTht / (1000 * 60 * 60 * 24));
    var hoursTht = Math.floor((distanceTht % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutesTht = Math.floor((distanceTht % (1000 * 60 * 60)) / (1000 * 60));
    var secondsTht = Math.floor((distanceTht % (1000 * 60)) / 1000);

    // Time calculations for days, hours, minutes and seconds - Summer Camp
    var daysSmc = Math.floor(distanceSmc / (1000 * 60 * 60 * 24));
    var hoursSmc = Math.floor((distanceSmc % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutesSmc = Math.floor((distanceSmc % (1000 * 60 * 60)) / (1000 * 60));
    var secondsSmc = Math.floor((distanceSmc % (1000 * 60)) / 1000);

    // Display the result in coresponding divs
    document.getElementById("countdownPrimary").innerHTML = `End-of-School Year for Primary<br>${daysPrm}d ${hoursPrm}h ${minutesPrm}m ${secondsPrm}s`;
    document.getElementById("countdownSeventh").innerHTML = `Last Day of Classes for GR7-9 & 11<br>${daysSeg}d ${hoursSeg}h ${minutesSeg}m ${secondsSeg}s`;
    // document.getElementById("countdownAwards").innerHTML = `Award Ceremony\n${daysAwd}d ${hoursAwd}h ${minutesAwd}m ${secondsAwd}s`;
    document.getElementById("countdownAwards").innerHTML = `Award Ceremony<br>${daysAwd}d ${hoursAwd}h ${minutesAwd}m ${secondsAwd}s`;
    document.getElementById("countdownEye").innerHTML = `End-of-Year Examinations for GR7-9 & 11<br>${daysEye}d ${hoursEye}h ${minutesEye}m ${secondsEye}s`;
    document.getElementById("countdownEaster").innerHTML = `Easter Break<br>${daysEst}d ${hoursEst}h ${minutesEst}m ${secondsEst}s`;
    document.getElementById("countdownEas").innerHTML = `eAssessment Examinations for GR10<br>${daysEas}d ${hoursEas}h ${minutesEas}m ${secondsEas}s`;
    document.getElementById("countdownSecondTerm").innerHTML = `End of Second Term<br>${daysSet}d ${hoursSet}h ${minutesSet}m ${secondsSet}s`;
    document.getElementById("countdownThirdTerm").innerHTML = `End of Third Term<br>${daysTht}d ${hoursTht}h ${minutesTht}m ${secondsTht}s`;
    document.getElementById("countdownFirstTerm").innerHTML = `End of First Term<br>${daysFrt}d ${hoursFrt}h ${minutesFrt}m ${secondsFrt}s`;
    document.getElementById("countdownExhibition").innerHTML = `Grade 6 Exhibition<br>${daysSeg}d ${hoursSeg}h ${minutesSeg}m ${secondsSeg}s`;
    document.getElementById("countdownThirdTerm").innerHTML = `Start of Summer Camp<br>${daysSmc}d ${hoursSmc}h ${minutesSmc}m ${secondsSmc}s`;

    // If the count down is finished, log message
    if (distancePrm < 0) {
        document.getElementById("countdownPrimary").innerHTML = "Primary School is Out!!!";
    }

    if (distanceSeg < 0) {
        document.getElementById("countdownSeventh").innerHTML = "Grade 7-9 & 11 Classes are Out!!!";
    }

    if (distanceAwd < 0) {
        document.getElementById("countdownAwards").innerHTML = "Award Ceremony is in Progress or Over!";
    }

    if (distanceEye < 0) {
        document.getElementById("countdownEye").innerHTML = "End-of-Year Examinations are in Progress or Over!";
    }

    if (distanceEst < 0) {
        document.getElementById("countdownEaster").innerHTML = "Easter Break is in Progress or Over!";
    }

    if (distanceEas < 0) {
        document.getElementById("countdownEas").innerHTML = "eAssessment Examinations for GR10 are in Progress or Over!";
    }

    if (distanceFrt < 0) {
        document.getElementById("countdownFirstTerm").innerHTML = "First Term is Over!";
    }
    
    if (distanceSet < 0) {
        document.getElementById("countdownSecondTerm").innerHTML = "Second Term is Over!";
    }

    if (distanceTht < 0) {
        document.getElementById("countdownThirdTerm").innerHTML = "Third Term is Over!";
    }

    if (distanceSeg < 0) {
        document.getElementById("countdownExhibition").innerHTML = "Grade 6 Exhibition is Over!";
    }

    if (distanceSmc < 0) {
        document.getElementById("countdownSummerCamp").innerHTML = "Summer Capm has already begun, or ended!";
    }
}, 1000);