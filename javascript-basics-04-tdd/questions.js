
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
    let array = ["Html", "CSS", "Java", "PHP"];
    return array;
}

const createNumbersArray = () => {
    let array = [];
    for (let i=0; i<=5; i++)
        array[i] = i;
    return array;
}

const replaceElement = (languages) => {
    let array = ["Html", "CSS", "Java", "PHP"];
    array[2] = "Javascript";
    return array;
}

const addElement = (languages) => {
    let array = ["Html", "CSS", "Javascript", "PHP"];
    array.push("Ruby");
    array.push("Python");
    return array;
}

const addNumberElement = (numbers) => {
    let array = [0,1,2,3,4,5];
    array.unshift(-1);
    array.unshift(-2);
    return array;
}

const removeFirst = (languages) => {
    let array = ['Html', 'CSS', 'Javascript', 'PHP', 'Ruby', 'Python'];
    array.shift();
    return array;
}

const removeLast = (languages) => {
    let array = ['CSS', 'Javascript', 'PHP', 'Ruby', 'Python'];
    array.pop();
    return array;
}

const convertStrToArr = (social_arr) => {
    let s = 'Facebook,Twitter,Google +,Viadeo,LinkedIn';
    let array = s.split(',');
    return array;
}

const convertArrToStr = (languages) => {
    let array = ['CSS', 'Javascript', 'PHP', 'Ruby'];
    let s = "";
    for (let i=0; i<array.length; i++)
        s += array[i] + ",";
    s = s.slice(0, -1);
    return s;
}

const sortArr = (social_arr) => {
    let array = ['Facebook','Twitter', 'Google +','Viadeo','LinkedIn'];
    array.sort();
    return array;
}

const invertArr = (social_arr) => {
    let array = ['CSS','Javascript','PHP','Ruby'];
    array.reverse();
    return array;
}