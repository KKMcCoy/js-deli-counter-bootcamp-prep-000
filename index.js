var katzDeliLine= [];

function takeANumber(katzDeliLine,name) {
    katzDeliLine.push(name);
    return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name,0)+1} in line.`;
}

function nowServing(katzDeliLine) {
  do { 
  return `Currently serving ${katzDeliLine[0]}.`;
    } while (katzDeliLine.length === 0)
  return "There is nobody waiting to be served!";
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
 