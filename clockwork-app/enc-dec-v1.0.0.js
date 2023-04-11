const encodeListCW = {
  // LOWERCASE //
  "l01": "a",
  "l02": "b",
  "l03": "c",
  "l04": "d",
  "l05": "e",
  "l06": "f",
  "l07": "g",
  "l08": "h",
  "l09": "i",
  "l10": "j",
  "l11": "k",
  "l12": "l",
  "l13": "m",
  "l14": "n",
  "l15": "o",
  "l16": "p",
  "l17": "q",
  "l18": "r",
  "l19": "s",
  "l20": "t",
  "l21": "u",
  "l22": "v",
  "l23": "w",
  "l24": "x",
  "l25": "y",
  "l26": "z",
  
  // UPPERCASE //
  "u01": "A",
  "u02": "B",
  "u03": "C",
  "u04": "D",
  "u05": "E",
  "u06": "F",
  "u07": "G",
  "u08": "H",
  "u09": "I",
  "u10": "J",
  "u11": "K",
  "u12": "L",
  "u13": "M",
  "u14": "N",
  "u15": "O",
  "u16": "P",
  "u17": "Q",
  "u18": "R",
  "u19": "S",
  "u20": "T",
  "u21": "U",
  "u22": "V",
  "u23": "W",
  "u24": "X",
  "u25": "Y",
  "u26": "Z",
  
  // NUMERAL SYMBOLS //
  "num00": "0",
  "num01": "1",
  "num02": "2",
  "num03": "3",
  "num04": "4",
  "num05": "5",
  "num06": "6",
  "num07": "7",
  "num08": "8",
  "num09": "9",
  "w01": " ",
  
  // BASIC SYMBOLS //
  "bs01": "!",
  "bs02": "@",
  "bs03": "#",
  "bs04": "$",
  "bs05": "%",
  "bs06": "^",
  "bs07": "&",
  "bs08": "*",
  "bs09": "(",
  "bs10": ")",
  "bs11": "<",
  "bs12": ">",
  "bs13": ".",
  "bs14": ",",
  "bs15": "?",
  "bs16": "-",
  "bs17": "_",
  "bs18": "=",
  "bs19": "+",
  "bs20": "`",
  "bs21": "~",
  "bs22": ":",
  "bs23": ";",
  "bs24": "'",
  "bs25": "\"",
  "bs26": "\\",
  "bs27": "|",
  "bs28": "/",
};
const listOfPrefixStuff = [
  "CANTREADMENOWBITCH",
  "NOWIN4K",
  "THEFITNESSGRAMPACERTESTISA...",
  "THEENCODINGDUDE",
  "THISISTOTALLYBASE64",
  "NUBMER",
  "SYNTAXERROR:XISNOTAFUNCTION",
  "WHENTHEIMPOSTERISSUS",
  "IDONTGETPAIDENOUGH4DIS",
  "FORTNITEBATTLEPASS",
  "UWUOWO:3TWT",
  "LUKASEXISTS",
  "MINECRAFT",
  "ILOVEBANABA",
  "LISTOFPREFIXSTUFF",
  "NOWWITHHDMI2.1",
  "IHAVEEATEN10POUNDSOFC4",
  "REMOVEDHEROBRINE",
  "LETOUTPUT=\"\"FOR(LETSTEP=0;",
  "WORDREH",
  "RAGGYRUTTHEFUCKUPYOUDUMBRITHEAD",
]
function encodeCW(input) {
  let output = listOfPrefixStuff[Math.floor(Math.random()*listOfPrefixStuff.length)]+"(V1.0.0)";
  for (let step = 0; step < input.length; step++) {
    for (const key in encodeListCW) {
      if (encodeListCW[key] == input[step]) {
    	  output += "#"+key;
      }
    }	
  }
  return output;
}
function decodeCW(input) {
  let toDecode = input.split("#");
  let output = "";
  for (let step = 1; step < toDecode.length; step++) {
    for (const key in encodeListCW) {
      if (key == toDecode[step]) {
    	  output += encodeListCW[toDecode[step]];
      }
    }	
  }
  return output;
}
console.log("-- CLOCKWORK --\n enc-dec.js loaded!")