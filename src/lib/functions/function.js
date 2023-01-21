/**
 * 
 * @param {String} text Text to be reduce.
 * @param {Number} words Number of words to get.
 * 
 * A function to reduce the text to given words.
 */
function reduceText(text, words){
    let word = 0

    for (let i = 0; i < text.length; i++) {
        if(text[i] == " "){
            word++
        }

        if(word == words) {
            return text.slice(0, i)
        }
    }
}

export {reduceText}