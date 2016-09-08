var levenshtien = require("./../index");

var assert = require('assert');

describe('Damerau - Levenshtein', function() {
    describe('#Equality.', function() {
        it('Should return 0 step when Test is equals Test.', function() {
        assert.equal(0, levenshtien("test", "test").steps);
        });
    });
    describe("#Additions.",function(){
        it('should return 1 step when append one char.', function() {
            assert.equal(1, levenshtien ("test", "tests").steps);
        });
        it('should return 1 step when prepend one char.', function() {
            assert.equal(1, levenshtien ("test", "stest").steps);
        });
        it('should return 2 steps when append two char.', function() {
            assert.equal(2, levenshtien ("test", "mytest").steps);
        });
        it('should return 7 steps when append seven char.', function() {
            assert.equal(7, levenshtien ("test", "mycrazytest").steps);
        });
    });

    describe("#Additions prepend and append.",function(){
        it('should return 9 steps when prepend two chars and append seven chars.', function() {
        assert.equal(9, levenshtien ("test", "mytestiscrazy").steps);
        });
    });

    describe("#Addition of repeated chars.",function(){
        it('should return 1 step when adding another "e"', function() {
        assert.equal(1, levenshtien ("test", "teest").steps);
        });
    });

    describe("#Deletion.",function(){
        it('should return 1 step when remove "e" char.', function() {
            assert.equal( 1, levenshtien ("test", "tst").steps);
        });
    });

    describe("#Transposition.",function(){
        it('should return 1 step when transposition  "s" char.', function() {
            assert.equal( 1, levenshtien ("test", "tset").steps);
        });
    });

    describe("#Addition with transposition.",function(){
        it('should return 1 step when transposition  "s" char and append another "s".', function() {
            assert.equal( 2, levenshtien ("test", "tsets").steps);
        });
    });

    describe("#Transposition of repeated chars.",function(){
        it('should return 1 step when transposition "n" and "a".', function() {
            assert.equal( 1, levenshtien("banana", "banaan").steps);
        });

        it('should return 1 step when transposition "b" and "a".', function() {
            assert.equal( 1, levenshtien("banana", "abnana").steps);
        });

        it('should return 1 step when transposition  "b" and "a" and "n" and "b".', function() {
            assert.equal( 2, levenshtien("banana", "nabana").steps);
        });
    });

    describe("#Empty strings.",function(){
        it('should return 0 step when both are empty.', function() {
            assert.equal( 0, levenshtien("", "").steps);
        });

        it('should return 4 steps when second string are empty.', function() {
            assert.equal( 4, levenshtien("test", "").steps);
        });

        it('should return 4 steps when first string are empty.', function() {
            assert.equal( 4, levenshtien("", "test").steps);
        });

    });
});
