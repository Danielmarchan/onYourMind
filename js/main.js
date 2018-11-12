var counter = 0;
var thoughtDiv = document.getElementById("thoughts-display");

/*Display a thought*/
function displayThought() {
    counter++;

    /*Get input values*/
    var subject = document.getElementById("subject").value;
    var dateTime = new Date().toLocaleString();
    var thought = document.getElementById("thought").value;

    /*Thought div*/
    var d_div = document.createElement("div");
    d_div.className = "mb-5";

    /*Thougtt elements*/
    var d_Subject = document.createElement("h3");
    var d_dateTime = document.createElement("h6");
    var d_thought = document.createElement("p");

    /*Element content*/
    d_Subject.textContent = subject;
    d_dateTime.textContent = dateTime;
    d_thought.textContent = thought;

    /*Delete button*/
    var deleteButton = document.createElement("button");
    deleteButton.type ="button";
    deleteButton.className = "btn btn-danger btn-sm my-2";
    deleteButton.textContent = "Delete thought";
    deleteButton.onclick = function() {
        thoughtDiv.removeChild(d_div);
    }
    console.log(deleteButton);

    /*Append to div*/
    d_div.appendChild(d_Subject);
    d_div.appendChild(d_dateTime);
    d_div.appendChild(d_thought);
    d_div.appendChild(deleteButton);

    /*Append to document*/
    thoughtDiv.appendChild(d_div);

    /*Reset form*/
    document.getElementById("thought-form").reset();
}