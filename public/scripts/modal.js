export default function Modal() {

    const modalWrapper = document.querySelector('.modal-wrapper')
    const cancelButton = document.querySelector('.button.cancel')

    cancelButton.addEventListener("click", close)
    
    
    function open() {
        // Functionality to add the class 'active' to the modal.
        modalWrapper.classList.add("active")
    }
    
    function close() {
        // Functionality to remove the class 'active' to the modal.
        modalWrapper.classList.remove("active")
    }

    return{
        open,
        close
    }
}