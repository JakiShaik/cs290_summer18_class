var text;
switch(new Date().getDay()){
    case 4:
    case 5:
        text = "Hello";
        break;
    case 0:
    case 6:
        text = "Bye";
        break;
    default:
        text = "Blah";
}
console.log(text);