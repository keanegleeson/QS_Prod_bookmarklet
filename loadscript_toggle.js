//Bookmarklet to toggle between stg and prod
javascript: (function() {
    var loc = location.href;

    if (loc.includes('sense')) {
        loc = loc.replace('sense', 'dataloadeditor');
    } else {
        loc = loc.replace('dataloadeditor', 'sense');
    }
    location.replace(loc)
})()