    // Create a new div element
    let div = document.createElement("div");

    // Loop to create 100 paragraphs
    for (let i = 1; i <= 100; i++) {
        // Create a new paragraph element
        let newElement = document.createElement("p");
        
        // Set the text content of the paragraph
        newElement.textContent = "This is paragraph " + i;
        
        // Append the paragraph to the div
        div.appendChild(newElement);
    }

    // Append the div to the body of the HTML page
    document.body.appendChild(div);
    // document.body.style.backgroundColor="red"

