var thoughtDiv = document.getElementById("thoughts-display");

/*Display a thought*/
function displayThought() {
    /*Get input values*/
    var subject = document.getElementById("subject").value;
    var dateTime = new Date().toLocaleString();
    var thought = document.getElementById("thought").value;
    

    /*Thought div*/
    var d_div = document.createElement("div");
    d_div.className = "mb-5";

    /*Thougt elements*/
    var d_Subject = document.createElement("h3");
    var d_dateTime = document.createElement("h6");
    var d_thought = document.createElement("p");
    var editInput = document.createElement("textarea");
    var state_div = document.createElement("div");

    /*Element content*/
    d_Subject.textContent = subject;
    d_dateTime.textContent = dateTime;
    d_thought.textContent = thought;
    d_thought.style.whiteSpace = "pre";
    d_thought.id = "thought-text";
    editInput.rows = 3;
    editInput.className = "form-control";
    editInput.style.whiteSpace = "pre-wrap";
    editInput.style.display = "none";
    
    
    state_div.appendChild(d_thought);
    state_div.appendChild(editInput);
            
    /*Delete button*/
    var deleteButton = document.createElement("button");
    deleteButton.type ="button";
    deleteButton.className = "btn btn-danger btn-sm my-2";
    deleteButton.textContent = "Delete thought";
    function deleteB() {
        thoughtDiv.removeChild(event.target.parentElement);
    }
    deleteButton.onclick = function() {
        deleteB();
    };
    
    /*Edit Button*/
    var editButton = document.createElement("button");
    editButton.type ="button";
    editButton.className = "btn btn-info btn-sm my-2 mr-2";
    editButton.textContent = "Edit thought";
    editButton.setAttribute("state", "display")
    
    function editB() {
        console.log(event.target);
        if (event.target.getAttribute("state") == "display") {
            /*Hide text*/
            d_thought.style.display = "none";
            
            /*Assign value*/
            editInput.value = d_thought.textContent;
            
            /*Display input*/
            editInput.style = "initial";
            
            /*Button text*/
            event.target.textContent = "Update";
            
            /*Switch state*/
            event.target.setAttribute("state", "input");
        }
        else {
            /*Hide input*/
            editInput.style.display = "none";
            
            /*Assign value*/
            d_thought.textContent = editInput.value;
            
            /*Display text*/
            d_thought.style = "initial";
            d_thought.style.whiteSpace = "pre";
            
            /*Button text*/
            event.target.textContent = "Edit thought";
            
            /*Switch state*/
            event.target.setAttribute("state", "display");
        }
    }
    editButton.onclick = function() {
        editB();
    };

    /*Append to div*/
    d_div.appendChild(d_Subject);
    d_div.appendChild(d_dateTime);
    d_div.appendChild(state_div);
    d_div.appendChild(editButton);
    d_div.appendChild(deleteButton);

    /*Append to document*/
    thoughtDiv.appendChild(d_div);

    /*Reset form*/
    document.getElementById("thought-form").reset();
}