function checkObj(obj, checkProp){
    if (obj.hasOwnProperty(checkProp) == true) {
        return obj[checkProp];
    }else 
        return "Not Found";
};