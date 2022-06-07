export {addTeaProperty, teaNumberFive};
export default teaNumberOne; 

//datatypes + let/const
const SHOP_NAME = `Dalida's tea shop`; //const + string datatype
let numberOfTeaTypes = 5; // let + number datatype
let shopIsOpen = true; // let + boolean datatype
let workingHours; // let + underfined datatype
const NUMBER_OF_EMPLOYEES = null; // null value

//objects 
let teaNumberOne = {
    name: `Green tea`,
    price: 1500,
    origin: 'India'
}

let teaNumberTwo = {
    name: `Black tea`,
    price: 1200,
    origin: `China`
}

let teaNumberThree = {
    name: `Yellow tea`,
    price: 1800,
    origin: `China`
}

let teaNumberFour = {
    name: `Herbal tea`,
    price: 2200, 
    origin: `Japan`
}

let teaNumberFive = {
    name: `White tea`,
    price: 2500,
    origin: `Jordan`
}

//Function + add/delete properties // Function declaration
function addTeaProperty(teaType, property_name, property_value) {
    return teaType[`${property_name}`] =  `${property_value}`; 
}

//Function Expression
const deleteTeaProperty = function(teaType, property_name){
    delete teaType[`${property_name}`]
}

//Arraw Function 
const changeTeaProperty = (teaType, property_name, property_value) => {return teaType[`${property_name}`] =  `${property_value}`;}

//calling Functions 
addTeaProperty(teaNumberFive, "color", "red");
deleteTeaProperty(teaNumberFive, "color");
changeTeaProperty(teaNumberFive, "price", 2300);
console.log(teaNumberFive);

//array/massive
tea_types = [teaNumberOne, teaNumberTwo, teaNumberThree, teaNumberThree, teaNumberFour, teaNumberFive];

const findTea = (neededTeaType) => tea_types.filter(function(tea) { return tea.name ===  neededTeaType });
console.log(findTea("Green tea"))

const newmaker = () => tea_types.map((tea) => `new ${tea}`)