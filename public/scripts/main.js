import Modal from "./modal.js"

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')



// Get all the existing buttons with the class 'check'.
const checkButtons = document.querySelectorAll(".actions a.check");

checkButtons.forEach(button => {
    // Add the event listener.
    button.addEventListener("click", handleClick)

})

const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event , check = true) {

    // Make the tag 'a' unable to work as a link.
    event.preventDefault()

    const slug = check ? "check" : "delete"
    const roomID = document.querySelector("#room-id").dataset.id
    const questionID = event.target.dataset.id

    const form = document.querySelector(".modal form")

    // Change the content of action to the given value.
    form.setAttribute("action", `/question/${roomID}/${questionID}/${slug}`)

    modalTitle.innerHTML = check ? "Mark as read" : "Delete question"
    modalDescription.innerHTML = check ? "Are you sure you want to mark this question as read?" : "Are you sure you want to delete this question?"
    modalButton.innerHTML = check ? "Yes, mark" : "Yes, delete"
    check? modalButton.classList.remove("red") : modalButton.classList.add("red")
    modal.open()
}






