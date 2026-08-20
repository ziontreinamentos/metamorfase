const RELAY = "https://tracking-relay-metamorfase.levelclub.workers.dev";

function uuid() {
  return (crypto.randomUUID && crypto.randomUUID())
    || 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}
function getCookie(n) {
  var m = document.cookie.match('(^|;)\\s*' + n + '\\s*=\\s*([^;]+)');
  return m ? m.pop() : '';
}
function setCookie(n, v, d) {
  var t = new Date(); t.setTime(t.getTime() + d * 864e5);
  document.cookie = n + '=' + v + ';expires=' + t.toUTCString() + ';path=/;SameSite=Lax';
}

export function sendEvent(eventName, gaEvent) {
  if (typeof window === 'undefined') return;

  var vid = getCookie('_vid');
  if (!vid) { vid = uuid(); setCookie('_vid', vid, 400); }

  var qs = new URLSearchParams(window.location.search);
  var fbclid = qs.get('fbclid');
  var fbc = getCookie('_fbc');
  if (!fbc && fbclid) { fbc = 'fb.1.' + Date.now() + '.' + fbclid; setCookie('_fbc', fbc, 90); }

  var gaCid = '';
  if (window.gtag) { try { window.gtag('get', 'G-1ZYVLE73BY', 'client_id', function (id) { gaCid = id || ''; }); } catch (e) {} }

  var eventId = uuid();
  var cleanUrl = window.location.origin + window.location.pathname;

  if (window.fbq) window.fbq('track', eventName, {}, { eventID: eventId });
  if (gaEvent && window.gtag) window.gtag('event', gaEvent, { page_location: cleanUrl });

  var payload = JSON.stringify({
    event_name: eventName,
    event_id: eventId,
    event_source_url: cleanUrl,
    fbp: getCookie('_fbp'),
    fbc: getCookie('_fbc') || fbc,
    vid: vid,
    ga_client_id: gaCid,
    ga_event_name: gaEvent || ''
  });

  try {
    fetch(RELAY, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=UTF-8' }, body: payload, keepalive: true });
  } catch (e) {
    if (navigator.sendBeacon) navigator.sendBeacon(RELAY, new Blob([payload], { type: 'text/plain' }));
  }
}
