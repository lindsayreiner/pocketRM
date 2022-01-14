export const getSavedContactIds = () => {
    const savedContactIds = localStorage.getItem('saved_contacts')
        ? JSON.parse(localStorage.getItem('saved_contacts'))
        : [];

    return savedContactIds;
};

export const saveContactIds = (contactIdArr) => {
    if (contactIdArr.length) {
        localStorage.setItem('saved_contacts', JSON.stringify(contactIdArr));
    } else {
        localStorage.removeItem('saved_contacts');
    }
};

export const removeContactId = (contactId) => {
    const savedContactIds = localStorage.getItem('saved_contacts')
        ? JSON.parse(localStorage.getItem('saved_contacts'))
        : null;

    if (!savedContactIds) {
        return false;
    }

    const updatedSavedContactIds = savedContactIds?.filter((savedContactId) => savedContactId !== contactId);
    localStorage.setItem('saved_contacts', JSON.stringify(updatedSavedContactIds));

    return true;
};
