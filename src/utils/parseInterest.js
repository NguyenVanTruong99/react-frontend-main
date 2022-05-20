const parseInterest = string => {
  if (!string) return "";
  let asteriskIndices = {first: false, second: false}
  let interestIndices = {first: 0, second: string.length-1}
  let i;
  let interest = ""
  for (i = 0; i < string.length; i++) {
    if (string.charAt(i) === "*")
      if (asteriskIndices["first"] === false)
        asteriskIndices["first"] = i;
      else if (asteriskIndices["second"] === false) {
        asteriskIndices["second"] = i;
        break;
      }
  }

  for (i = asteriskIndices["first"]; i >= 0; i--) {
    if (string.charAt(i) === ",") {
      interestIndices["first"] = i+2;
      break;
    }
  }
  for (i = asteriskIndices["second"]; i < string.length; i++) {
    if (string.charAt(i) === ",") {
      interestIndices["second"] = i-1;
      break;
    }
  }
  interest = 
    string.slice(interestIndices["first"], interestIndices["second"] + 1);

  interest = interest.replace(/\*/g, "")
  return interest;
}

  export default parseInterest;