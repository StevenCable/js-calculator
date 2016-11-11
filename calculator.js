/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
 function calculatorModule(){
    var _memory = 0;
    var _total =  0;

// function validation(junk) {
//   if(typeof (junk) !== 'number'){
//       throw new Error;
//   }
//   else {
//     return false;
//   }
 


    
  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
   function loadTotal(x){
    if(typeof x === 'number'){
        _total = x;
      return _total;
    }
    else{
      throw new Error();
      
    }
   }


  /**
   * Return the value of `total`
   * @return { Number }
   */
   function getTotal(){
    return _total; 
   }


  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
  function sumTotal(x){
    if(typeof x === 'number'){
        _total += x;
    }
    else{
      throw new Error();
      
    }

  }

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
  function differenceTotal(x){
     
    if(typeof x === 'number'){
        _total -= x;
    }
    else{
      throw new Error();
      
    }

  }

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
  function multiplyTotal(x){
    if (typeof x === 'number'){
      _total *= x;
  }
  else{
    throw new Error();
    }

  }

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
  function divideTotal(x){
    if (typeof x === 'number'){
      _total /= x;
  }
  else{
    throw new Error();
  }
}

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
   function recallMemory(){
    return _memory;
   }

  /**
   * Stores the value of `total` to `memory`
   */
    function saveMemory(){
      _memory = _total ;
    }

  /**
   * Clear the value stored at `memory`
   */
   function clearMemory(){
    _memory = 0;
   }

  /**
   * Validation
   */
return {
      load: loadTotal,
      getTotal: getTotal,
      add: sumTotal,
      subtract: differenceTotal,
      multiply: multiplyTotal,
      divide: divideTotal,
      recallMemory: recallMemory,
      saveMemory: saveMemory,
      clearMemory: clearMemory,

    };

}