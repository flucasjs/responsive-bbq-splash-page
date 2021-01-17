let emailCollectorForm = document.querySelector(".email-collector");

emailCollectorForm.addEventListener("submit", event => {

    event.preventDefault();

    let webinarForm = new FormData(event.target);

    let userFirstName = webinarForm.get("firstName");
    let userEmailAddress = webinarForm.get("emailAddress");

    let updatedMainContent = `
        <h2 class="confirmation-text">
            We can't wait to see you,       
            <span class="name">${sanitizeHTML(userFirstName)}</span>!
        </h2>
        <p>
            Tell your friends!
        </p>
        <p class="fine-print">
            Updates to the event will be sent to: 
            ${sanitizeHTML(userEmailAddress)}
        </p>
    `;

    let mainContentContainer = document.querySelector(".main-container");

    mainContentContainer .innerHTML = updatedMainContent;

})

let sanitizeHTML = function (str) {
    var temp = document.createElement("div");
    temp.textContent = str;
    return temp.innerHTML;
};