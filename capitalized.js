function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (let index = 0; index < str.length; index++) {
        str[index] = str[index].charAt(0).toUpperCase() + str[index].slice(1);
    }
    return str.join(' ');
}
console.log(titleCase("codemind technology"));
