var assert = require('assert');
var clone=require('../index');

describe('Clone Methods', function () {

  describe('#clone', function () {
    it('clone empty array:', function () {
      var arr1 = [];
      var arr2 = clone(arr1);
      assert.equal(arr1===arr2, false);
    });

    it('clone empty array:', function () {
      var arr1 = {};
      var arr2 = clone(arr1);
      assert.equal(arr1===arr2, false);
    });
  });


});
