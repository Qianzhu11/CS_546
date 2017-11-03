let exportedMethods = {
    isPalindromes(string) {
        if (typeof string !== "string") throw "Must provide a string";
        string = string.trim();
        let i = 0, j = string.length - 1;
        while(i < j) {
            if (string.charAt(i) !== string.charAt(j)) {
                return "Oops, it's not a palindrome";
            }
            i++;
            j--;
        }
        return "Congratulations, you find a palindrome";
    }
}

module.exports = exportedMethods;