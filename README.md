[![NPM](https://nodei.co/npm/damerau-levenshtein.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/damerau-levenshtein/)

I use algorithm kindly provided by TheSpanishInquisition here: <http://jsperf.com/damerau-levenshtein-distance>.

All credits goes there. I have only packed it into Node module.

It provides a function that takes two string arguments and returns a hash like this:

```` javascript
{
  steps: 5,       // Levenstein demerau distance
  relative: 0.7,  // steps / length of the longer string
  similarity: 0.3 // 1 - relative
}
````

Please see [tests](./test/test.js) for more insights.


### Example

Here is how you can use this package in an _Angular_ project:

1. Install the package in your project
    `npm install damerau-levenshtein`

2. Import into your project
    `import * as levenshtien from 'damerau-levenshtein';`

3. Use wherever
    `const lev = levenshtien('hello world', 'Hello World!');`

*Optional*

If you're using _TypeScript_, create an interface
```ts
interface LevenshteinResponse {
  steps: number;
  relative: number;
  similarity: number;
}
```
