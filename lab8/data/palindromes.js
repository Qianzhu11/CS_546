let exportedMethods = {
    isPalindromes(string) {
        if (typeof string !== "string") throw "Must provide a string";
        string = string.trim().replace(/\W+/g, " ").replace(/ /g,'').toLowerCase();
        let i = 0, j = string.length - 1;
        while(i < j) {
            if (string.charAt(i) !== string.charAt(j)) {
                return "Oops,it's not a palindrome.";
                break;
            } else {
                i++;
                j--;
            }
        }
        if (j - i <= 1) {
            return "Congratulations,you find a palindrome.";
        }
    }
}

module.exports = exportedMethods;