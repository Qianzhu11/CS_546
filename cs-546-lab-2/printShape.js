module.exports = {
    triangle: (lines) => {
        let t = "";
        if (lines === undefined || typeof lines !== "number" || lines < 1 || lines % 1 !== 0) {
            throw "input is invalid";
        }
        for (let i = 1; i <= lines; i++) {
            if (i !== lines) {
                for (let j = i; j < lines; j++) {
                    t += " ";
                }
                t += "/";
                for (let j = 0; j < 2 * (i - 1); j++) {
                    t += " ";
                }
                t += "\\";
                t += "\n";
            }
            if (i === lines) {
                t += "/";
                for (let j = 0; j < 2 * (lines - 1); j++) {
                    t += "-";
                }
                t += "\\" + "\n";
            }
        }
        return t;
    },
    square: (lines) => {
        let s = "";
        if (lines === undefined || typeof lines !== "number" || lines < 2 || lines % 1 !== 0) {
            throw "input is invalid";
        }

        s += "|";
        for (let i = 0; i < lines; i++) {
            s += "-";
        }
        s += "|";
        s += "\n";

        for (let i = 0; i < lines - 2; i++) {
            s += "|";
            for (let j = 0; j < lines; j++) {
                s += " ";
            }
            s += "|";
            s += "\n";
        }

        s += "|";
        for (let i = 0; i < lines; i++) {
            s += "-";
        }
        s += "|";
        s += "\n";

        return s;
    },
    rhombus: (lines) => {
        let r = "";
        if (lines === undefined || typeof lines !== "number" || lines < 2 || lines % 2 !== 0) {
            throw "input is invalid";
        }

        for (let i = 0; i < lines / 2 - 1; i++) {
            r += " ";
        }
        r += "/-" + "\\" + "\n";

        for (let i = 0; i < lines / 2 - 1; i++) {
            for (let j = i + 2; j < lines / 2; j++) {
                r += " ";
            }
            r += "/";
            for (let j = i + 2; j < 3 * (i + 2) - 1; j++) {
                r += " ";
            }
            r += "\\";
            r += "\n";
        }

        for (let i = 0; i < lines / 2 - 1; i++) {
            for (let j = 0; j < i; j++) {
                r += " ";
            }
            r += "\\";
            for (let j = lines - 2 * i - 1; j >0; j--) {
                r += " ";
            }
            r += "/";
            r += "\n";
        }

        for (let i = 0; i < lines / 2 - 1; i++) {
            r += " ";
        }

        r += "\\" + "-" + "/" + "\n";

        return r;

        
    },
};

