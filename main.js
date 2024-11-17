let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Removes 'javascript' from end if message
secretMessage.pop();

// Adds 'to' and 'program' to the end of the message.
secretMessage[23] = 'to';
secretMessage[24] = 'program';

// Changes 'easily' to 'right'
secretMessage.splice(7, 1, 'right');

// Removes 'learning' from the start of the message
secretMessage.shift();

// Adds 'Programming' to the beginning of the message
secretMessage.unshift('Programming');

// removes 'get' 'right' ' the' 'first' 'time' and replaces with 'know,'
secretMessage.splice(6, 5, 'know,');

// Testing
console.log(secretMessage.join(' '));
