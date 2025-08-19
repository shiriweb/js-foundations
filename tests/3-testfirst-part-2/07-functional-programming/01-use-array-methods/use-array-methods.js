/* eslint-disable no-unused-vars */
const capitalize = (string) => string.toUpperCase();

const swapCase = (string) => {
  return string
    .split(" ")
    .map((word, index) => {
      if (index % 2 === 0) return capitalize(word);
      return word;
    })
    .join(" ");
};

const extensionSearch = (extension, array) => {
  return array.filter((file) => file.includes(extension));
};

const getPopulation = (array, countries) => {
  return array.reduce((accumulator, country) => {
    if (countries.includes(country.name) || countries.length === 0) {
      return accumulator + country.population;
    }
    return accumulator;
  }, 0);
};

const keyifyArrayOfObjects = (key, array) => {
  return array.reduce((accumulator, superheroObj) => {
    accumulator[superheroObj[key]] = superheroObj;
    return accumulator;
  }, {});
};

const powerLevelAverage = (array) => {
  return Math.round(
    array.reduce((accumulator, superheroObj) => {
      return accumulator + superheroObj.powerLevel;
    }, 0) / array.length
  );
};

const mapReduce = (array, iteratorFunc) => {
  return array.reduce((accumulator, val) => {
    accumulator.push(iteratorFunc(val));
    return accumulator;
  }, []);
};

const filterReduce = (array, iteratorFunc) => {
  return array.reduce((accumulator, val) => {
    if (iteratorFunc(val)) accumulator.push(val);
    return accumulator;
  }, []);
};

const inYourBudget = (val, array) => {
  return array.filter((item) => item.price < val).map((item) => item.item);
};

const separateAndReturnNames = (array, property, lengthOfName) => {
  return array
    .map((superhero) => {
      const [firstName, lastName] = superhero.name.split(" ");
      superhero.firstName = firstName;
      superhero.lastName = lastName;
      return superhero;
    })
    .filter((superhero) => superhero[property].length <= lengthOfName)
    .map((superhero) => superhero[property]);
};

const priorityTodoDuration = (todoList) => {
  return todoList
    .filter((todo) => todo.priority === "high")
    .reduce((accumulator, todo) => {
      return accumulator + todo.duration;
    }, 0);
};
