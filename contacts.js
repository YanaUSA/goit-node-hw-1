const path = require("path");
const fs = require("fs").promises;

const contactsPath = path.resolve("db/contacts.json");

const getParsedPath = async (filePath) => {
  const readFile = await fs.readFile(filePath);
  return JSON.parse(readFile);
};

/**
 * Reads contact list
 *@returns {Promise<void>}
 */
async function listContacts() {
  try {
    const readContactsData = await getParsedPath(contactsPath);

    console.table(readContactsData);

    return readContactsData;
  } catch (error) {
    console.log(error.message);
  }
}
/////////////////////////////////////////////////////
/**
 * Finds contact by ID
 * @param {<string>}
 *  *@returns {Promise<void>}
 */
async function getContactById(contactId) {
  try {
    const contacts = await getParsedPath(contactsPath);

    const resultById = contacts.find((el) => el.id === contactId);

    console.table(resultById);
  } catch (error) {
    console.log(error.message);
  }
}
///////////////////////////////////////////////////
/**
 * Removes contact by ID
 * @param {<string>}
 *  *@returns {Promise<void>}
 */
async function removeContact(contactId) {
  try {
    const contacts = await getParsedPath(contactsPath);

    const deletedContact = contacts.filter((el) => el.id !== contactId);

    const resultOnRemove = await fs.writeFile(
      contactsPath,
      JSON.stringify(deletedContact)
    );

    console.table(deletedContact);

    return resultOnRemove;
  } catch (error) {
    console.log(error.message);
  }
}
///////////////////////////////////////////////////
/**
 * Adds new contact
 * @param {<string>}
 *  *@returns {Promise<void>}
 */
async function addContact(name, email, phone) {
  try {
    const contacts = await getParsedPath(contactsPath);

    const newContact = {
      id: `${contacts.length + 1}`,
      name,
      email,
      phone,
    };

    const newData = [...contacts, newContact];

    const addedContacts = await fs.writeFile(
      contactsPath,
      JSON.stringify(newData)
    );

    console.table(newData);

    return addedContacts;
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = { listContacts, getContactById, removeContact, addContact };
