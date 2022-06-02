/**
 * It takes an object with the properties' id, firstName, lastName, picture, and title,
 * and returns a string that represents a table row with those properties
 * @returns A string of HTML that represents a table row.
 */

// We used object destructing in the prams instead of sending over the
    // whole item we are only capturing the field we are going to use here.
export const mapUserToRecord = ({id, firstName, lastName, picture, title}) => {
        return `<tr data-id="${id}" >
                       <td>
                            <img src="${picture}">
                       </td>
                       <td data-id="${id}" class="user-record">${title}. ${firstName} ${lastName}</td>

                       <td>
                            <button class="delete" value="${id}">X</button>
                            <button class="edit" value="${id}">Edit</button>
                       </td>
                   </tr>`
    };

export const mapUserToUpdate = (name = "update", data) => {

    return createForm(name, data)

}

export const mapUserCreateForm = (name = "create") => {

    const formDefaults = {
        title: "",
        rating: ""
    }
    return createForm(name, formDefaults);
}

export const createForm = (name, {title, rating}) => {
    if (typeof title !== "string" && typeof rating !== "number") {
        alert("Input is invalid")

    }

    return `
        <form name="${name}">
        <label for="field1">Title</label><input type="text" name="title" value="${title.toUpperCase()}" id="field1">
        <label for="field2">Rating</label><input type="text" name="rating" value="${rating}" id="field2">
       
    </form>
    `
}

export const mapButtonsForUpdate = (id, type = 'update') => {
    return ` <form>
          <button class="confirm ${type}" value="${id}">Confirm</button>
          <button class="cancel">Cancel</button>
            </form>`
}

export const mapUserToDelete = (id) => {
    return `<form>
          <button class="confirm delete" value="${id}">Confirm</button>
          <button class="cancel">Cancel</button>
    </form>
  
    `
}