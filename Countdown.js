// Set the date we're counting down to
var countdownPrimary = new Date("Jun 12, 2026 15:30:00").getTime();
var countdownSeventh = new Date("May 28, 2026 15:30:00").getTime();
var countdownAwards = new Date("May 24, 2026 15:30:00").getTime();
var countdownEye = new Date("Jun 1, 2026 08:30:00").getTime();
var countdownEaster = new Date("Apr 2, 2026 15:30:00").getTime();
var countdownEas = new Date("May 4, 2026 08:30:00").getTime();
var countdownFirstTerm = new Date("Dec 19, 2025 15:30:00").getTime();
var countdownSecondTerm = new Date("Mar 13, 2026 15:30:00").getTime();
var countdownThirdTerm = new Date("Jun 12, 2026 15:30:00").getTime();
var countdownGraduation = new Date("Jun 11, 2026 08:30:00").getTime();
var countdownExhibition = new Date("May 27, 2026 08:30:00").getTime();
var countdownSummerCamp = new Date("Jun 22, 2026 08:30:00").getTime();
var countdownChristmasBreak = new Date("Dec 20, 2025 08:30:00").getTime();
var countdownMidTermBreak = new Date("Oct 27, 2025 08:30:00").getTime();
var countdownCarnivalBreak = new Date("Feb 23, 2026 08:30:00").getTime();
var countdownSummerBreak = new Date("Jun 15, 2026 15:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    var now = new Date().getTime();

    // Distance calculations
    var distances = {
        prm: countdownPrimary - now,
        seg: countdownSeventh - now,
        awd: countdownAwards - now,
        eye: countdownEye - now,
        est: countdownEaster - now,
        eas: countdownEas - now,
        frt: countdownFirstTerm - now,
        set: countdownSecondTerm - now,
        tht: countdownThirdTerm - now,
        exh: countdownExhibition - now,
        grd: countdownGraduation - now,
        smc: countdownSummerCamp - now,
        xms: countdownChristmasBreak - now,
        mid: countdownMidTermBreak - now,
        crn: countdownCarnivalBreak - now,
        smr: countdownSummerBreak - now
    };

    // Prevent negative countdowns (Option A)
    for (let key in distances) {
        if (distances[key] < 0) distances[key] = 0;
    }

    // Helper function
    function calc(distance) {
        return {
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000)
        };
    }

    // Calculate all countdowns
    var prm = calc(distances.prm);
    var seg = calc(distances.seg);
    var awd = calc(distances.awd);
    var eye = calc(distances.eye);
    var est = calc(distances.est);
    var eas = calc(distances.eas);
    var frt = calc(distances.frt);
    var set = calc(distances.set);
    var tht = calc(distances.tht);
    var exh = calc(distances.exh);
    var grd = calc(distances.grd);
    var smc = calc(distances.smc);
    var xms = calc(distances.xms);
    var mid = calc(distances.mid);
    var crn = calc(distances.crn);
    var smr = calc(distances.smr);

    // Display
    document.getElementById("countdownPrimary").innerHTML =
        `End-of-School Year for Primary<br>${prm.days}d ${prm.hours}h ${prm.minutes}m ${prm.seconds}s`;

    document.getElementById("countdownSeventh").innerHTML =
        `Last Day of Classes for GR7-9 & 11<br>${seg.days}d ${seg.hours}h ${seg.minutes}m ${seg.seconds}s`;

    document.getElementById("countdownAwards").innerHTML =
        `Award Ceremony<br>${awd.days}d ${awd.hours}h ${awd.minutes}m ${awd.seconds}s`;

    document.getElementById("countdownEye").innerHTML =
        `End-of-Year Examinations for GR7-9 & 11<br>${eye.days}d ${eye.hours}h ${eye.minutes}m ${eye.seconds}s`;

    document.getElementById("countdownEaster").innerHTML =
        `Easter Break<br>${est.days}d ${est.hours}h ${est.minutes}m ${est.seconds}s`;

    document.getElementById("countdownEas").innerHTML =
        `eAssessment Examinations for GR10<br>${eas.days}d ${eas.hours}h ${eas.minutes}m ${eas.seconds}s`;

    document.getElementById("countdownFirstTerm").innerHTML =
        `End of First Term<br>${frt.days}d ${frt.hours}h ${frt.minutes}m ${frt.seconds}s`;

    document.getElementById("countdownSecondTerm").innerHTML =
        `End of Second Term<br>${set.days}d ${set.hours}h ${set.minutes}m ${set.seconds}s`;

    document.getElementById("countdownThirdTerm").innerHTML =
        `End of Third Term<br>${tht.days}d ${tht.hours}h ${tht.minutes}m ${tht.seconds}s`;

    document.getElementById("countdownExhibition").innerHTML =
        `Grade 6 Exhibition<br>${exh.days}d ${exh.hours}h ${exh.minutes}m ${exh.seconds}s`;

    document.getElementById("countdownGraduation").innerHTML =
        `Grade 6 Graduation<br>${grd.days}d ${grd.hours}h ${grd.minutes}m ${grd.seconds}s`;

    document.getElementById("countdownSummerCamp").innerHTML =
        `Start of Summer Camp<br>${smc.days}d ${smc.hours}h ${smc.minutes}m ${smc.seconds}s`;

    document.getElementById("countdownChristmasBreak").innerHTML =
        `Christmas Break<br>${xms.days}d ${xms.hours}h ${xms.minutes}m ${xms.seconds}s`;

    document.getElementById("countdownMidTermBreak").innerHTML =
        `Mid-Term Break<br>${mid.days}d ${mid.hours}h ${mid.minutes}m ${mid.seconds}s`;

    document.getElementById("countdownCarnivalBreak").innerHTML =
        `Carnival Break<br>${crn.days}d ${crn.hours}h ${crn.minutes}m ${crn.seconds}s`;

    document.getElementById("countdownSummerBreak").innerHTML =
        `Start of Summer Break<br>${smr.days}d ${smr.hours}h ${smr.minutes}m ${smr.seconds}s`;

    // Custom messages for finished events
    if (countdownPrimary - now < 0)
        document.getElementById("countdownPrimary").innerHTML = "Primary School is Out!!!";

    if (countdownSeventh - now < 0)
        document.getElementById("countdownSeventh").innerHTML = "Grade 7-9 & 11 Classes are Out!!!";

    if (countdownAwards - now < 0)
        document.getElementById("countdownAwards").innerHTML = "Award Ceremony is in Progress or Over!";

    if (countdownEye - now < 0)
        document.getElementById("countdownEye").innerHTML = "End-of-Year Examinations are in Progress or Over!";

    if (countdownEaster - now < 0)
        document.getElementById("countdownEaster").innerHTML = "Easter Break is in Progress or Over!";

    if (countdownEas - now < 0)
        document.getElementById("countdownEas").innerHTML = "eAssessment Examinations for GR10 are in Progress or Over!";

    if (countdownFirstTerm - now < 0)
        document.getElementById("countdownFirstTerm").innerHTML = "First Term is Over!";

    if (countdownSecondTerm - now < 0)
        document.getElementById("countdownSecondTerm").innerHTML = "Second Term is Over!";

    if (countdownThirdTerm - now < 0)
        document.getElementById("countdownThirdTerm").innerHTML = "Third Term is Over!";

    if (countdownExhibition - now < 0)
        document.getElementById("countdownExhibition").innerHTML = "Grade 6 Exhibition is Over!";

    if (countdownGraduation - now < 0)
        document.getElementById("countdownGraduation").innerHTML = "Grade 6 Graduation is Over!";

    if (countdownSummerCamp - now < 0)
        document.getElementById("countdownSummerCamp").innerHTML = "Summer Camp has already begun, or ended!";

    if (countdownChristmasBreak - now < 0)
        document.getElementById("countdownChristmasBreak").innerHTML = "Christmas Break is in Progress or Over!";

    if (countdownMidTermBreak - now < 0)
        document.getElementById("countdownMidTermBreak").innerHTML = "Mid-Term Break is in Progress or Over!";

    if (countdownCarnivalBreak - now < 0)
        document.getElementById("countdownCarnivalBreak").innerHTML = "Carnival Break is in Progress or Over!";

    if (countdownSummerBreak - now < 0)
        document.getElementById("countdownSummerBreak").innerHTML = "Summer Break has begun!";
}, 1000);
