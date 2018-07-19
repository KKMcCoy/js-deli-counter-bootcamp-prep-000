var katzDeliLine= [];

function takeANumber(katzDeliLine,name) {
    katzDeliLine.push(name);
    return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name,0)+1} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0 ) { 
  return `Currently serving ${katzDeliLine[0]}.`;
    } else {
  return "There is nobody waiting to be served!";
}
  return katzDeliLine.shift();
}

function currentLine(katzDeliLine) {
  var newDeliLine = [];
  do{
    for(let i = 0; i < newDeliLine.length ; i++){
    newDeliLine = [...newDeliLine, `${i+1}. ${katzDeliLine[i]}`];
     } return `The line is currently is: ${newDeliLine}`;
    } while (newDeliLine.length < 1)
      return "The line is currently empty.";
}
 