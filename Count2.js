/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let presentCount = init;
    let increment=()=>{
        return ++presentCount;
    }
    
    let decrement=()=>{
        return --presentCount;
    }
    
    let reset=()=>{
        return (presentCount = init );
    }
    return { increment, decrement,reset };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
