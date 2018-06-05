module.exports =  function(){
	var _copy = function(obj){
		console.log("Clonando")


	// (F.prototype will hold the object prototype chain)
		  function F() {}
		  var newObj;

		  if(typeof obj.clone === 'function')
		    return obj.clone()

		  // To copy something that is not an object, just return it:
		  if(typeof obj !== 'object' && typeof obj !== 'function' || obj == null)
		    return obj;

		  if(typeof obj === 'object') {    
		    // Copy the prototype:
		    newObj = {}
		    var proto = Object.getPrototypeOf(obj)
		    Object.setPrototypeOf(newObj, proto)
		  } else {
		    // If the object is a function the function evaluate it:
		    var aux
		    newObj = eval('aux='+obj.toString())
		    // And copy the prototype:
		    newObj.prototype = obj.prototype
		  }

		  // Copy the object normal properties with a deep copy:
		  for(var i in obj) {
		    if(obj.hasOwnProperty(i)) {
		      if(typeof obj[i] !== 'object')
		        newObj[i] = obj[i]
		      else
		        newObj[i] = _copy(obj[i])
		    }
		  }

		  return newObj;
		}

	
	return {
		 copy : function(obj){
		 	return _copy(obj);
		 },
		 isNumber : function(str) {
		   if (typeof str != "string") return false // we only process strings!
		   // could also coerce to string: str = ""+str
		   return !isNaN(str) && !isNaN(parseFloat(str))
 		 }
	  
	}
}