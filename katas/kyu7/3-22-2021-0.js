/*******************************************************
=======================Codewars=========================
It is written in the stars
https://www.codewars.com/kata/5888a57cbf87c25c840000c6/
********************************************************/
function starSign(dates) {
  let day = dates.getDate()
  let month = dates.getMonth()
  let monthConv = [
    date=>date<21? 'Capricorn':  'Aquarius',
    date=>date<20? 'Aquarius':  'Pisces',
    date=>date<21? 'Pisces':  'Aries',
    date=>date<21? 'Aries':  'Taurus',
    date=>date<22? 'Taurus':  'Gemini',
    date=>date<22? 'Gemini':  'Cancer',
    date=>date<23? 'Cancer':  'Leo',
    date=>date<24? 'Leo':  'Virgo',
    date=>date<24? 'Virgo':  'Libra',
    date=>date<24? 'Libra':  'Scorpio',
    date=>date<23? 'Scorpio':  'Sagittarius',
    date=>date<22? 'Sagittarius':  'Capricorn'
  ]
  return monthConv[month](day)
}
