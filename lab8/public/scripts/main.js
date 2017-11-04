let myForm = document.getElementById('palForm');

myForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let formerP = document.getElementById("inputText").value;

    if (formerP != '') {
        let node = document.createElement("li");
        node.className = isPalindrome(formerP);
        let textNode = document.createTextNode(formerP);
        node.appendChild(textNode);

        document.getElementById('palList').appendChild(node);
        document.getElementById('inputText').value = "";
    } else {
        alert("You must provide text to check!");
    }
});

function isPalindrome(string) {
    if (string === undefined || typeof(string) !== "string") {
        return;
    }
    string = string.toLowerCase().replace(/[^\w]|_/g, "");
    let reversedString = string.split("").reverse().join("");
    if (string == reversedString){
        return 'is-palindrome';
    } else {
        return 'not-palindrome';
    }
}