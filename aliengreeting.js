/* This project is an Alien Greeting Generator
for the Mixed Messages challenge on the Codecademy
section of my IT Career Switch course.
I have other ideas that I might do as well.
There is no HTML, CSS or associated website as that wasn't required.
As such the code will run in the browser console or node.js.*/

/* The generator has seven separate parts to
 generate with the following order of randomly-generated parts:
 a greeting, a form of address for Earthlings,
 an optional introductory exclamation, stating who they are,
 where they are from, what they intend to do, and to what.
 I've been careful to include consistent
  spacing between words in the resulting phrase.*/

 // The code is split into: the random arrays section, the function, and calling the function;
 //I've tried to be concise with the main generator, although a longer version might be easier to read.

 // The code includes a simple ASCII alien face, logged to the console before the main message.


 //arrays

 const greetingArr = ['Greetings ','Good day to you ','Good evening ','Good morning ','Ahoy, ',
 'Hi there ','Hello ','Well met ','Nice to meet you, ', 'Warm felicitations '];

 const earthFolkArr = ['Earthlings. ', 'people of Earth. ', 'inhabitants of this fair planet. ',
 'bipeds and other creatures of Earth. ','our new cosmic friends. ',
 'wise humans. ','foolish lifeforms. ','Earth. ','primitive planet-dwelling omnivores. ', 'kind, planetary hosts. '];

 const introExclArr = ['Lo! ', 'Behold. ', 'Hoorah. ', 'Aha! ', 'Know this. ', '', 'Yes. ', 'Oh my. ', 'Blahdy blah... ', ' Be at ease. '];

 const selfIdArr = [' the First Fleet ', ' the Expeditionary Force ',
 ' the Advance Landing Party ', ' the Wormhole Mariners ', ' the Benevolentians ',
 ' the Wise Cryptidians ', ' the Planet-Conquerers ', ' the Star-Surfing Stellarnauts ',
 ' the Munificent Tentacled Overlords ', ' your new friends '];

 const originArr = ['of Promixa Centauri, ', 'of Europa, ', 'of Betelgeuse, ', 'of All Time, ', 'of Sirius, ', 'of Ultraspace, ',
 'from across the cosmos, ', ' of Andromeda, ', ' from the more upmarket regions of the Milky Way, ', ' from a land of bounty and plenty beyond your ken, '];

 const verbArr = ['harvest', 'combine our genetic material with', 'abduct', 'cybernetically enhance', 'consult with',
  'probe', 'marvel at', 'feast on', 'make copies of', 'make a documentary about'];

 const nounArr = [' organs.', ' livestock.', ' politicians.', ' TV personalities.',
  ' magnificent forests.', ' ancient wonders.', ' civic leaders.', ' sportspeople.', ' wise elders.', ' world of tabletop role-playing.'];

  //functions
  //random number generator 0 - 9

  const genRando = () => Math.floor(Math.random()*10);

  // message generator

  const genMessage = () => {
 
    let mixedMessage = `${greetingArr[genRando()]}${earthFolkArr[genRando()]}${introExclArr[genRando()]}We,${selfIdArr[genRando()]}${originArr[genRando()]}are here to inform you we intend to ${verbArr[genRando()]} your${nounArr[genRando()]}`;


    console.log('--/---\\--');
    console.log('--|0 0|--');
    console.log('--\\===/--');
    console.log('---------');
    return mixedMessage;
  }

  genMessage();

