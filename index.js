// TheSpanishInquisition

// Cache the matrix. Note that if you not pass a limit this implementation will use a dynamically calculate one.

module.exports = function(firstString, secondString, limit) {

  var firstLength = firstString.length,
      secondLength = secondString.length,
      matrix = [];

  // If the limit is not defined it will be calculate from firstString and secondString args.
  limit = (limit || ((secondLength > firstLength ? secondLength : firstLength)))+1;

  for (var i = 0; i < limit; i++) {
    matrix[i] = [i];
    matrix[i].length = limit;
  }
  for (i = 0; i < limit; i++) {
    matrix[0][i] = i;
  }

  if (Math.abs(firstLength - secondLength) > (limit || 100)){
    return prepare (limit || 100);
  }
  if (firstLength === 0){
    return prepare (secondLength);
  }
  if (secondLength === 0){
    return prepare (firstLength);
  }

  // Calculate matrix.
  var j, this_i, that_j, cost, min, t;
  for (i = 1; i <= firstLength; ++i) {
    this_i = firstString[i-1];

    // Step 4
    for (j = 1; j <= secondLength; ++j) {
      // Check the jagged ld total so far
      if (i === j && matrix[i][j] > 4) return prepare (firstLength);

      that_j = secondString[j-1];
      cost = (this_i === that_j) ? 0 : 1; // Step 5
      // Calculate the minimum (much faster than Math.min(...)).
      min    = matrix[i - 1][j    ] + 1; // Deletion.
      if ((t = matrix[i    ][j - 1] + 1   ) < min) min = t;   // Insertion.
      if ((t = matrix[i - 1][j - 1] + cost) < min) min = t;   // Substitution.

      // Update matrix.
      matrix[i][j] = (i > 1 && j > 1 && this_i === secondString[j-2] && firstString[i-2] === that_j && (t = matrix[i-2][j-2]+cost) < min) ? t : min; // Transposition.
    }
  }

  return prepare (matrix[firstLength][secondLength]);

/**
 *
 */
  function prepare(steps) {
    var length = Math.max(firstLength, secondLength)
    var relative = length === 0
      ? 0
      : (steps / length);
    var similarity = 1 - relative
    return {
      steps: steps,
      relative: relative,
      similarity: similarity
    };
  }

};
