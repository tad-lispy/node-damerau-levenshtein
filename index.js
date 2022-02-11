// TheSpanishInquisition

// Cache the matrix. Note that if you not pass a limit this implementation will use a dynamically calculate one.

module.exports = function(firstString, secondString, maxSteps) {

  const firstLength = firstString.length;
  const secondLength = secondString.length;
  const matrix = [];

  // If maxSteps is not provided, limit will be calculated from firstString and secondString args.
  const limit = (maxSteps || ((firstLength > secondLength ? firstLength : secondLength))) + 1;

  if (Math.abs(firstLength - secondLength) > limit) {
    return prepare(limit);
  } else if (firstLength === 0) {
    return prepare(secondLength);
  } else if (secondLength === 0) {
    return prepare(firstLength);
  }

  for (let i = 0; i < limit; i++) {
    matrix[i] = [i];
    matrix[i].length = limit;
  }

  for (let i = 0; i < limit; i++) {
    matrix[0][i] = i;
  }

  // Calculate matrix.
  let j, this_i, that_j, cost, min, t;
  for (let i = 1; i <= firstLength; ++i) {
    this_i = firstString[i-1];

    // Step 4
    for (j = 1; j <= secondLength; ++j) {
      // Check the jagged ld total so far
      if (i === j && matrix[i][j] > 4) {
        return prepare(firstLength);
      }

      that_j = secondString[j-1];
      cost = (this_i === that_j) ? 0 : 1; // Step 5
      // Calculate the minimum (much faster than Math.min(...)).
      min    = matrix[i - 1][j    ] + 1; // Deletion.
      if ((t = matrix[i    ][j - 1] + 1   ) < min) min = t;   // Insertion.
      if ((t = matrix[i - 1][j - 1] + cost) < min) min = t;   // Substitution.

      // Update matrix.
      matrix[i][j] = (
           i > 1 
        && j > 1 
        && this_i === secondString[j-2] 
        && firstString[i-2] === that_j 
        && (t = matrix[i-2][j-2]+cost) < min
      ) ? t : min; // Transposition.
    }
  }

  return prepare(matrix[firstLength][secondLength]);

  /**
   * Compute the `relative` and `similarity` and return object along with `steps`
   */
  function prepare(steps) {
    const length = Math.max(firstLength, secondLength)
    const relative = length === 0 ? 0 : (steps / length);
    const similarity = 1 - relative
    return {
      steps: steps,
      relative: relative,
      similarity: similarity
    };
  }
};
