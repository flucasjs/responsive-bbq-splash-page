let emailCollectorForm = document.querySelector(".email-collector");

emailCollectorForm.addEventListener("submit", event => {

    event.preventDefault();

    let webinarForm = new FormData(event.target);

    let userFirstName = webinarForm.get("firstName");
    let userEmailAddress = webinarForm.get("emailAddress");

    // Consider adding some padding between these typography elements.
    let updatedMainContent = `
        <h2>
            Congratulations, ${sanitizeHTML(userFirstName)}!
        </h2>
        <p>
            You're on your way to becoming a BBQ Master!
            </p>
        <p class="fine-print">
            You will get weekly BBQ tips sent to: 
            ${sanitizeHTML(userEmailAddress)}
        </p>
    `;

    let ourMainContent = document.querySelector(".main-content");

    ourMainContent.innerHTML = updatedMainContent;

})

let sanitizeHTML = function (str) {
    var temp = document.createElement("div");
    temp.textContent = str;
    return temp.innerHTML;
};