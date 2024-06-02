// U63166005

document.addEventListener("DOMContentLoaded", (event) => {  // This prevents the script from running before the DOM has loaded, preventing erros

    document.getElementById("feedbackForm").addEventListener("submit", (event)=>{
        event.preventDefault()  // Stops default form submission

        const firstName = document.getElementById("firstName").value 
        const lastName = document.getElementById("lastName").value
        const rating = document.getElementById("rating").value
        const comments = document.getElementById("comments").value  // Creates variables to receive inputs from form submission

        document.getElementById("feedbackSubmission").innerHTML = `<h3>Feedback Submitted!</h3> 
            <b>First Name:</b> ${firstName} <br>
            <b>Last Name:</b> ${lastName} <br>
            <b>Rating (1-5):</b> ${rating} <br>
            <b>Comments:</b><br>${comments}
            ` // Displays inputs in HTML 
        document.getElementById("feedbackForm").reset()}) // Clears values in the form so that new values can be entered easily
})
