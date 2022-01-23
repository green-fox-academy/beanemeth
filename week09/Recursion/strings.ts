/* Given a string, write a recursive (no loops) method 
which returns a new string with all the lowercase 'x' chars changed to 'y' chars. */

let randomString: string = ('random text, x and x, her we go!')

function returnLowercasexToY(textwithx: string): string {
    if (!textwithx.includes('x')) {
        return textwithx
    }
        return returnLowercasexToY(textwithx.replace('x', 'y'))
}
console.log(returnLowercasexToY(randomString))