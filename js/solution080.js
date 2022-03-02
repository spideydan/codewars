// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!




function doubleChar(str) {
    let str1 = str.split('')
    let str2 = []
    for (let i = 0; i < str1.length; i++) {
        str2 += str1[i] + str1[i]
    }
    return str2
}
