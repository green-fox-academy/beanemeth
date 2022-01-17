/*Given a string, write a recursive (no loops) method which returns a new string with all the lowercase 'x' chars removed.*/

let randomStringAgain: string = ('random text, x and x, her we go!')

function removeLowercaseX(textwithx: string, charX: string): string {
    
    if (textwithx.length== 0) {
        return ''
    }
    if (textwithx.charAt(0) == charX){
        return removeLowercaseX(textwithx.substring(1), charX);
    }
    return textwithx.charAt(0) +removeLowercaseX(textwithx.substring(1), charX);
}
console.log(removeLowercaseX(randomStringAgain, 'x'))



 
/*
public String noX(String str)
{
	char ch;
  if(str.length() == 0)
  	return str;
  ch = str.charAt(0);
  if(ch == 'x')
  	return noX(str.substring(1));
  return ch + noX(str.substring(1));
} */
 