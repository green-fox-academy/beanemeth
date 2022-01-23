/* Given a string, write a recursive (no loops) method which returns a new string with all adjacent chars separated by an *. 
Please note that there should be no trailing * at the end of the returned string. For example, the string word should be changed to w*o*r*d. */

let randomStringAgainAgain: string = ('random text, x and x, her we go!')

function insertStars(textobestarred: string): string {
    if (textobestarred.length < 2) {
        return textobestarred
    }
        return textobestarred.charAt(0) + "*" +insertStars(textobestarred.substring(1))
}
console.log(insertStars(randomStringAgainAgain))