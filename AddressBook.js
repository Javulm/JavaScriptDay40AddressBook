class Contact {
    firstName
    lastName
    address
    city
    state
    zipCode
    email
    phoneNumber

    constructor(firstName, lastName, address, city, state, zipCode, email, phoneNumber) {
        this.firstName = firstName
        this.lastName = lastName
        this.address = address
        this.city = city
        this.state = state
        this.zipCode = zipCode
        this.email = email
        this.phoneNumber = phoneNumber
    }
}

var addressBook = new Array();

function contactDetails(firstName, lastName, address, city, state, zipCode, email, phoneNumber) {

    addressBook.filter(contact => contact.firstName == firstName)
        .reduce(() => count++, count = 0);
    if (count > 0) {
        console.log("Contact With Name " + firstName + " Already Present")
    } else {
        const firstNamePattern = RegExp("[A-Z][a-zA-Z]{2,}");
        let firstName_Check = firstNamePattern.test(firstName);

        const lastNamePattern = RegExp("[A-Z][a-zA-Z]{2,}");
        let lastName_Check = lastNamePattern.test(lastName);

        const addressPattern = RegExp("[a-zA-Z]{3,}");
        let address_Check = addressPattern.test(address);

        const cityPattern = RegExp("[a-zA-Z]{3,}");
        let city_Check = cityPattern.test(city);

        const statePattern = RegExp("[a-zA-Z]{3,}");
        let state_Check = statePattern.test(state);

        const zipCodePattern = RegExp("^[1-9][0-9]{2}[\\s]?[0-9]{2}[0-9]$");
        let zipCode_Check = zipCodePattern.test(zipCode);

        const emailPattern = RegExp("^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$");
        let email_Check = emailPattern.test(email);

        const phoneNumberPattern = RegExp("^[7-9][0-9]{4}[\\s]?[0-9]{4}[0-9]$");
        let phoneNumber_Check = phoneNumberPattern.test(phoneNumber);

        if (firstName_Check == true && lastName_Check == true && address_Check == true && city_Check == true && state_Check == true
            && zipCode_Check == true && email_Check == true && phoneNumber_Check == true) {

            let newContact = new Contact(firstName, lastName, address, city, state, zipCode, email, phoneNumber);
            console.log("Contact Added Successfully");

            addressBook.push(newContact);

        } else {
            throw 'Contact Details Are Invalid';
        }
    }
}

function editContact(findName, editedVariable, variableNewValue) {
    if (addressBook.length == null) {
        console.log("Add Contact In Address Book");
    } else {
        addressBook.forEach(newContact => {
            if (newContact.firstName == findName) {
                switch (editedVariable) {
                    case "firstName":
                        newContact.firstName = variableNewValue;
                        break;
                    case "lastName":
                        newContact.lastName = variableNewValue;
                        break;
                    case "address":
                        newContact.address = variableNewValue;
                        break;
                    case "city":
                        newContact.city = variableNewValue;
                        break;
                    case "state":
                        newContact.state = variableNewValue;
                        break;
                    case "zipCode":
                        newContact.zipCode = variableNewValue;
                        break;
                    case "firstName":
                        newContact.firstName = variableNewValue;
                        break;
                    case "lastName":
                        newContact.lastName = variableNewValue;
                        break;
                }
            }
        })
    }
}

function deleteContact(first_Name) {
    if (addressBook.length == null) {
        console.log("Add Contact In Address Book");
    } else {
        for (let i = 0; i < addressBook.length; i++) {
            if (addressBook[i].firstName == first_Name) {
                addressBook.splice(i, 1);
                console.log("Contact Deleted Successfully");
            }
        }
    }
}

function countContact() {
    addressBook.reduce(() => {
        count++;
    }, count = 0);
    console.log("\nTotal Contacts In Address Book Are: " + count + "\n");
}

function searchByCity_State(choice, name) {
    if (choice == "city") {
        person = addressBook.filter(contact => contact.city == name)
            .map(contact => contact.firstName);
        console.log("Contact Found Who Is From " + name);
        console.log(person);
    } else if (choice == "state") {
        person = addressBook.filter(contact => contact.state == name)
            .map(contact => contact.firstName);
        console.log("Contact Found Who Is From " + name);
        console.log(person);
    } else {
        console.log("Provide Right City or State Name");
    }
}

function viewByCityOrState(choice, name) {
    if (choice == "city") {
        person = addressBook.filter(contact => contact.city == name)
        console.log("Contact Found Who Is From " + name);
        console.log(person);
    } else if (choice == "state") {
        person = addressBook.filter(contact => contact.state == name)
        console.log("Contact Found Who Is From " + name);
        console.log(person);
    } else {
        console.log("Provide Right City or State Name");
    }
}

function countContactInCity_State(choice, name) {
    if (choice == "city") {
        person = addressBook.filter(contact => contact.city == name)
            .reduce(() => { count++; }, count = 0);
        console.log("Total Number Of Contact Found Who Is From " + name + " Are " + count);
    } else if (choice == "state") {
        person = addressBook.filter(contact => contact.state == name)
            .reduce(() => { count++; }, count = 0);
        console.log("Total Number Of Contact Found Who Is From " + name + " Are " + count);
    } else {
        console.log("Provide Right City or State Name");
    }
}

function sortContact(choice) {
    console.log(addressBook.sort((newContact1, newContact2) => {
        switch (choice) {
            case "firstName":
                one = newContact1.firstName;
                two = newContact2.firstName;
                break;
            case "city":
                one = newContact1.city;
                two = newContact2.city;
                break;
            case "state":
                one = newContact1.state;
                two = newContact2.state;
                break;
            case "zipCode":
                one = newContact1.zipCode;
                two = newContact2.zipCode;
                break;
            default:
                console.log("Provide Valid Input firstName or city or state or zipCode")
        }

        if (one < two) {
            return -1;
        } else if (one == two) {
            return 0;
        } else {
            return 1;
        }
    }));
}

function selectFunction(select) {
    switch (select) {
        case "contactDetails":

            contactDetails("Javul", "Mulla", "Raibag", "Belgaum", "Karnataka", "123 456", "javulmulla1@gmail.com", "91 1234567890");

            contactDetails("Thilak", "M", "nelamangala", "Bangalore", "Karnataka", "658 974", "thilakm2@gmail.com", "919876543210");

            // add contact for duplicate entry

            contactDetails("Javul", "Mulla", "Raibag", "Belgaum", "Karnataka", "123456", "javulmulla1@gmail.com", "91 1234567890");

            contactDetails("Syed", "Khadhri", "banavar", "Bangalore", "karnataka", "321654", "syedkhadhri@gmail.com", "91 7894562310");

            console.log(addressBook);
            break;
        case "editContact":
            editContact("Almas", "city", "Harihar");
            console.log(addressBook);
            break;
        case "deleteContact":
            deleteContact("Adinath");
            console.log(addressBook);
            break;
        case "countContact":
            countContact();
            break;
        case "searchByCity_State":
            searchByCity_State("state", "Karnataka");
            break;
        case "viewByCityOrState":
            viewByCityOrState("state", "Maharashtra");
            break;
        case "countContactInCity_State":
            countContactInCity_State("state", "Maharashtra");
            countContactInCity_State("city", "Pune");
            break;
        case "sortContact":
            sortContact("firstName");
            break;
    }
}

selectFunction("contactDetails");
selectFunction("countContact");
selectFunction("searchByCity_State");
selectFunction("editContact");
selectFunction("deleteContact");
selectFunction("countContact");
selectFunction("searchByCity_State");
selectFunction("viewByCityOrState");
selectFunction("countContactInCity_State");
selectFunction("sortContact");