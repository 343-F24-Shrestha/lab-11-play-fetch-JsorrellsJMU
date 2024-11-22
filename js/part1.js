const output = document.getElementById("output");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");

document.getElementById("get-btn").addEventListener("click", async () => {
    // This function should send a GET request to the echo endpoint and output the result
    // The two input fields should be included in the request URL as **query parameters**

    // TODO
    try {
        // Retrieve values from part1.html, from input fields
        const name = nameInput.value;
        const age = ageInput.value;

        const params = new URLSearchParams({ name, age });

        const response = await fetch(`https://echo.zuplo.io/api?${params.toString()}`);

        // Parse the response into a json format
        const data = await response.json();

        // Display formatted JSON content into the output field.
        output.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        // Display any errors in the output element
        output.textContent = `Error: ${error.message}`;
    }
});

document.getElementById("post-json-btn").addEventListener("click", async () => {
    // This function should send a POST request to the echo endpoint with the input data as JSON
    // The two input fields should be included in the request body as **JSON data**

    // TODO
    try {
        // Retrieve values from input fields
        const name = nameInput.value;
        const age = ageInput.value;

        // Create options for the POST request
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, age }), // Send name and age as JSON
        };

        // Make the POST request
        const response = await fetch("https://echo.zuplo.io/api", options);

        // Parse the response as JSON
        const data = await response.json();

        // Display formatted JSON content in the output element
        output.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        // Display any errors in the output element
        output.textContent = `Error: ${error.message}`;
    }
});

document.getElementById("post-form-btn").addEventListener("click", async () => {
    // This function sends a POST request with URL-encoded form data
    try {
        // Retrieve values from input fields
        const name = nameInput.value;
        const age = ageInput.value;

        // Create options for the POST request
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({ name, age }).toString(), // URL-encoded form data
        };

        // Make the POST request
        const response = await fetch("https://echo.zuplo.io/api", options);

        // Parse the response as JSON
        const data = await response.json();

        // Display formatted JSON content in the output element
        output.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        // Display any errors in the output element
        output.textContent = `Error: ${error.message}`;
    }
});
