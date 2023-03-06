const path = require("path");
const fs = require("fs").promises;

const contactsPath = path.resolve("db/contacts.json");

/**
 * Reads contact list
 *@returns {Promise<void>}
 */
async function listContacts() {
  try {
    const readContacts = await fs.readFile(contactsPath);

    const parsedData = JSON.parse(readContacts);

    console.table(parsedData);

    return parsedData;
  } catch (error) {
    console.log(error.message);
  }
}

/**
 * Finds contact by ID
 * @param {<string>}
 *  *@returns {Promise<void>}
 */
async function getContactById(contactId) {
  try {
    const contacts = await listContacts();

    const resultById = await contacts.find((el) => el.id === contactId);

    console.table(resultById);

    return resultById;
  } catch (error) {
    console.log(error.message);
  }
}

/**
 * Removes contact by ID
 * @param {<string>}
 *  *@returns {Promise<void>}
 */
async function removeContact(contactId) {
  try {
    const contacts = await listContacts();

    const deletedContact = await contacts.filter((el) => el.id !== contactId);

    const newContactArray = await fs.writeFile(
      contactsPath,
      JSON.stringify(deletedContact)
    );

    console.table(newContactArray);

    return newContactArray;
  } catch (error) {
    console.log(error.message);
  }
}

/**
 * Adds new contact
 * @param {<string>}
 *  *@returns {Promise<void>}
 */
async function addContact(name, email, phone) {
  try {
    const contacts = await listContacts();

    const newContact = {
      id: `${contacts.length + 1}`,
      name,
      email,
      phone,
    };

    const newData = [...contacts, newContact];

    const removeResult = await fs.writeFile(
      contactsPath,
      JSON.stringify(newData)
    );

    console.table(removeResult);

    return removeResult;
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = { listContacts, getContactById, removeContact, addContact };
