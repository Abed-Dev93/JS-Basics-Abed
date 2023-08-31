
const stringSize = (text) => {
    return text.length;
}
const replaceCharacterE = (text) => {
    return text.replace('e', " ");
}
const concatString = (text1, text2) => {
    return text1 + text2;
}
const showChar5 = (text) => {
    return text.charAt(4);
}
const showChar9 = (text) => {
    return text.slice(0, 9);
}
const toCapitals = (text) => {
    return text.toUpperCase();
}
const toLowerCase = (text) => {
    return text.toLowerCase();
}
const removeSpaces = (text) => {
    return text.trim();
}
const IsString = (text) => {
    return typeof(text) === "string";
}

const getExtension = (text) => {
    return text.substring(text.lastIndexOf('.') + 1, text.length);
}
const countSpaces = (text) => {
    let count = 0;
    for (let i=0; i<text.length; i++) {
        if (text.charAt(i) === " ")
        count++;
    }
    return count;
}
const InverseString = (text) => {
    let mix = "";
    for (let i=text.length-1; i>=0; i--)
        mix += text.charAt(i);
    return mix;
}

const power = (x, y) => {
    return Math.pow(x, y);
}
const absoluteValue = (num) => {
    if (num % 1 == 0 && num % num == 0 && num % -1 == 0)
        return num * (-1);
    return true;
}
const absoluteValueArray = (array) => {
    for (let i=0; i<array.length; i++) {
        if (array[i] % 1 == 0 && array[i] % array[i] == 0 && array[i] % -1 == 0)
            array[i] *= -1;
    }
    return array;
}
const circleSurface = (radius) => {
    return Math.round(Math.PI * Math.pow(radius, 2));
}
const hypothenuse = (ab, ac) => {
    return Math.sqrt(Math.pow(ab, 2) + Math.pow(ac, 2));
}
const BMI = (weight, height) => {
    return Math.round((weight / Math.pow(height, 2)) * 100) / 100;
}

const createLanguagesArray = () => {

}

const createNumbersArray = () => {

}

const replaceElement = (languages) => {

}

const addElement = (languages) => {

}

const addNumberElement = (numbers) => {

}

const removeFirst = (languages) => {

}

const removeLast = (languages) => {

}

const convertStrToArr = (social_arr) => {

}

const convertArrToStr = (languages) => {

}

const sortArr = (social_arr) => {

}

const invertArr = (social_arr) => {

}