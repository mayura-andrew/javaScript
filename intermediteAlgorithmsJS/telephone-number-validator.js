function telephoneCheck(str) {
  if (str.indexOf("(") === -1 && str.indexOf(")") > -1 ) return false;
if (str.indexOf(")") - str.indexOf("(") >= 5) return false;
if (str.match(/-/g) && str.match(/-/g).length > 2)
return false;
if (str.match(/-1/g))
return false;
let polishedPhone = str.replace(/-| /g, "");

if (polishedPhone.indexOf("(") < polishedPhone.indexOf(")")) {
  polishedPhone = polishedPhone.replace(/\(|\)/g, "");
} 
console.log(polishedPhone)
if (polishedPhone.length === 10) {
  return true;
}else if (polishedPhone.length === 11 && polishedPhone[0] === "1") {
  return true;
}

return false;

}

telephoneCheck("55 55-55-555-5");
