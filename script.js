document.addEventListener("DOMContentLoaded", (event) => {


document.getElementById("feedbackForm").addEventListener("submit", (event)=>{
    event.preventDefault()

    const firstName = document.getElementById("firstName").value
    const lastName = document.getElementById("lastName").value
    const rating = document.getElementById("rating").value
    const comments = document.getElementById("comments").value

    document.getElementById("feedbackSubmission").innerHTML = `<h3>Feedback Submitted!</h3>
    <b>First Name:</b> ${firstName} <br>
    <b>Last Name:</b> ${lastName} <br>
    <b>Rating (1-5):</b> ${rating} <br>
    <b>Comments:</b><br>${comments}
    `
})
})