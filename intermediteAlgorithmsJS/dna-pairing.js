function calculatePair(initial) {
  if (initial === "A") {
    return "T";
  }else if (initial === "T") {
    return "A";
  }else if (initial === "G") {
    return "C";
  }else if (initial === "C") {
    return "G";
  }
}

function pairElement(initialStrand) {
  return initialStrand.split("").map(initialPair => {
    let pair = [initialPair, calculatePair(initialPair)];
    return pair;
  })
}
console.log(pairElement("GCG"));
