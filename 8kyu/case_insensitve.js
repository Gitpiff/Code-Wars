/**
 * Write a fx that takes two strings A snd B and returns whether or not B is in A in a case-sensitive way
 */

function stringIncludes(a, b){
    return a.match(b) ? "true" : "false"
    

}

console.log(stringIncludes("whale likes Cars", "whale"))