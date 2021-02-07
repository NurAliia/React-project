import { v4 as uuidv4 } from 'uuid';

const convertArrayToObject = (array, key) => {
  const initialValue = {};
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item,
    };
  }, initialValue);
};

const createObjectRegistry = (eventName, eventValue) => {
  return {
    id: uuidv4(),
    eventName,
    eventValue,
  }
}

export {
  convertArrayToObject,
  createObjectRegistry
}
