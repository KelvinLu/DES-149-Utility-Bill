$('div#bill-table').hide();

$('a#details').click(function() {
  $('div#bill-table').slideToggle();
});

funfact = $('div.fun-fact');
funfact_t = funfact.find('a#total');
funfact_s = funfact.find('a#showering');
funfact_f = funfact.find('a#faucet');
funfact_l = funfact.find('a#lawn');
funfact_c = funfact.find('a#cost');

function showfunfact(g1, g2) {
  return function() {
    dg = Math.abs(g1 - g2);
    t = Math.round(dg);
    s = Math.round(dg / 31 / 5);
    f = Math.round(dg / 31 / 2);
    l = Math.round((dg / 250) * 10) / 10;
    c = Math.round(0.00602 * dg * 100) / 100

    funfact.stop().fadeIn();
    funfact_t.html(t.toString());
    funfact_s.html(s.toString());
    funfact_f.html(f.toString());
    funfact_l.html(l.toString());
    funfact_c.html('$' + c.toString());
  }
}

function hidefunfact() {
  funfact.stop().fadeOut();
}

funfact.hide();

function highlight(e1, e2) {
  return function() {
    e1.stop().fadeTo(50, 0.6);
    if (e2) e2.stop().fadeTo(50, 0.6);
  }
}

function nohighlight(e1, e2) {
  return function() {
    e1.stop().fadeTo(50, 1);
    if (e2) e2.stop().fadeTo(50, 1);
  }
}

n = $('div.h-chart#versus-neighborhood');
jul = $('div.v-bar#monthly-usage-jul');
jun = $('div.v-bar#monthly-usage-jun');
may = $('div.v-bar#monthly-usage-may');
apr = $('div.v-bar#monthly-usage-apr');
mar = $('div.v-bar#monthly-usage-mar');
feb = $('div.v-bar#monthly-usage-feb');

n.hover(showfunfact(11523, 12751), hidefunfact).hover(highlight(n), nohighlight(n));
jul.hover(showfunfact(11523, 11332), hidefunfact).hover(highlight(jul, jun), nohighlight(jul, jun));
jun.hover(showfunfact(11332, 10481), hidefunfact).hover(highlight(jun, may), nohighlight(jun, may));
may.hover(showfunfact(10481, 10642), hidefunfact).hover(highlight(may, apr), nohighlight(may, apr));
apr.hover(showfunfact(10642, 10223), hidefunfact).hover(highlight(apr, mar), nohighlight(apr, mar));
mar.hover(showfunfact(10223, 10331), hidefunfact).hover(highlight(mar, feb), nohighlight(mar, feb));
