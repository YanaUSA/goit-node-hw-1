// const argv = require("yargs").argv;

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts.js");

// listContacts();

// getContactById("3");

// removeContact("1");

// addContact("Ann Dane", "ann@mail.com", "(097) 555-22-22");

// console.log("||=================>");
// console.log(listContacts());
// console.log("<=================||");

// // TODO: рефакторить
// function invokeAction({ action, id, name, email, phone }) {
//   switch (action) {
//     case "list":
//       // ...
//       break;

//     case "get":
//       // ... id
//       break;

//     case "add":
//       // ... name email phone
//       break;

//     case "remove":
//       // ... id
//       break;

//     default:
// console.warn("\x1B[31m Unknown action type!");
//   }
// }

// invokeAction(argv);

// console.log("||=================>");
// console.log("first");
// console.log("<=================||");
