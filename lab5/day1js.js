/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    if (expected === found) {
      return "TEST SUCCEEDED";
    } else {
      return "TEST FAILED.  Expected " + expected + " found " + found;
    }
  }
  
  /* max returns the maximum of 2 arguments */
  function max(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    };
  }
  console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));
  
  /* max3 takes 3 numbers as arguments and returns the largest */
  function maxOfThree(a, b, c) {
    return max(max(a, b), c);
  
  }
  console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
  console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));
  console.log("Expected output of maxOfThree(55,65,44) is 55  " + myFunctionTest(65, maxOfThree(55, 65, 44)));
  
  /*  isVowel takes a character and returns true if it is a vowel, false otherwise */
  function isVowel(ch) {
      if (ch.toLowerCase() == 'a' || ch.toLowerCase() == 'e' || ch.toLowerCase() == 'i' || ch.toLowerCase() == 'o' || ch.toLowerCase() == 'u') {
        return true;
      }
      return false;
  }
  console.log("Expected output of isVowel('E ') is true "+ myFunctionTest(true, isVowel('E')));
  console.log("Expected output of isVowel('m') is true "+ myFunctionTest(false, isVowel('m')));
  
  /* sum sums all the numbers in an array of numbers */
  function sum(a) {
    let b=0;
    for(let i=0; i<a.length; i++) {
      b+=a[i];
    }
    return b;
  }
  console.log("Expected output of sum([2,3,4]) is 9 "+ myFunctionTest(9, sum([2,3,4])));
  console.log("Expected output of sum([2,9,4]) is 15 "+ myFunctionTest(15, sum([2,9,4])));
  
  /* multiply multiplies all the numbers in an array of numbers */
  function multiply(a) {
    let b=1;
    for(let i=0; i<a.length; i++) {
      b*=a[i];
    }
    return b;
  }
  
  console.log("Expected output of multiply([2,3,4]) is 24 "+ myFunctionTest(24, multiply([2,3,4])));
  console.log("Expected output of multiply([0,9,4]) is 0 "+ myFunctionTest(0, multiply([0,9,4])));
  
  /* reverse computes the reversal of a string */
  function reverse(a){
    let b="";
    for (let i=a.length-1; i>=0; i--){
      b+=a.at(i);
    }
    return b;
  }
  console.log("Expected output of reverse('Anass') is ssanA "+ myFunctionTest("ssanA", reverse("Anass")));
  console.log("Expected output of reverse('instructor') is rotcurtsni "+ myFunctionTest('rotcurtsni', reverse('instructor')));
  
  /*  findLongestWord takes an array of words and returns the length of the longest one */
  function findLongestWord(a){
    let x=0;
    for (let i=0; i<a.length-1; i++) {
      if (a[i].length<= a[i+1].length) {
        x=a[i+1].length;
      }
    }
    return x;
  }
  console.log("Expected output of findLongestWord(['Anass','Mouad','Manouzi','boumediene'] is 10)"+ myFunctionTest(10, findLongestWord(['Anass','Mouad','Manouzi','boumediene'])));
  console.log("Expected output of findLongestWord(['Ronaldo','Ibrahimovic','Tshambalala','fenwa'] is 11)"+ myFunctionTest(11, findLongestWord(['Ronaldo','Ibrahimovic','Tshambalala','fenwa'])));
  
  /* filterLongWords takes an array of words and an integer i and returns the array of words that are longer than i */
  function filterLongWords(a,i) {
    let b=[];
    for (let j=0; j<a.length; j++) {
      if (a[j].length>i) {
        b.push(a[j]);
  
      }
    }
    return b;
    
  }
  console.log("Expected output of filterLongWords(['Anass','Mouad','Manouzi','-outmani'],5) is ['Manouzi','-outmani']"+ myFunctionTest(JSON.stringify(['Manouzi', '-outmani']), JSON.stringify(filterLongWords(['Anass','Mouad','Manouzi','-outmani'],5))));
  console.log("Expected output of filterLongWords(['Ronaldo','Ibrahimovic','Tshambalala','Akinfenwa'],8) is ['Ibrahimovic','Tshambalala','Akinfenwa']"+ myFunctionTest(JSON.stringify(['Ibrahimovic','Tshambalala','Akinfenwa']), JSON.stringify(filterLongWords(['Ronaldo','Ibrahimovic','Tshambalala','Akinfenwa'],8))));
  /**/
  const a = [1,3,5,3,3]; 
  /* multiply each element by 10 */
  const b = a.map((elem, i, array) => elem * 10)
  console.log("Multiply each element by 10: "+b.toString());
  //document.writeln(b.toString() + "<br/>");
  
  /* return array with all elements equal to 3 */ 
  const c = a.map((elem, i, array) => elem=3)
  console.log("Return array with all elements equal to 3: "+c.toString());
  //document.writeln(c.toString() + "<br/>");
  
  /* return the product of all elements */
  const d = a.reduce((prevValue, elem) => prevValue * elem)
  console.log("Return the product of all elements: "+d);
  //document.writeln(d.toString() + "<br/>");