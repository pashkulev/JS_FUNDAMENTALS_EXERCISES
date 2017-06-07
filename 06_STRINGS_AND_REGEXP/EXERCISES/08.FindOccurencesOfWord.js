function findOccurrences(sentence, word) {
    let regex = new RegExp(`\\b${word}\\b`, 'gi');
    let results = sentence.match(regex);
    if (results !== null) {
        console.log(results.length);
    } else {
        console.log(0);
    }
}

findOccurrences('The waterfall was so high, that the child couldn’t see its peak.', 'the');
findOccurrences('How do you plan on achieving that? How? How can you even think of that?', 'how');
findOccurrences('There was one. Therefore I bought it. I wouldn’t buy it otherwise.', 'there');