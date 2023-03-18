function receivesAFunction(callback) {
    callback();
  }
  
  function returnsANamedFunction() {
    function namedFunction() {
      // function body goes here
    }
    return namedFunction;
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
      // function body goes here
    };
  }