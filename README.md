I use algorithm kindly provided by TheSpanishInquisition here: <http://jsperf.com/damerau-levenshtein-distance>.

All credits goes there. I have only packed it into Node module.

It provides a function that takes two string arguments and returns a hash like this:

```` javascript
{
  distance: 5,  // Levenstein demerau distance
  relative: 0.7 // distance / length of bigger of two words
}
````

