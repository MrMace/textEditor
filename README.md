# Simple Text Editor

This is a basic, client-side text editor that automatically saves your content directly in the browser's local storage. It requires no backend server or database, making it a simple and effective tool for quick notes.

---

### Features

-   **Automatic Saving:** The text is automatically saved every second to your browser's local storage.
-   **No Backend Required:** The application runs entirely within your web browser, so you can use it offline.
-   **Persistent Data:** Your notes will remain saved even if you close and reopen the browser tab.

---

### Technologies Used

-   **HTML:** For the structure of the document.
-   **JavaScript:** For the logic of saving and loading the text.

---

### Live Demo

You can test the editor and see the automatic saving in action by visiting the live demo here:

https://mrmace.github.io/textEditor/

---

### How to Use

1.  **Create your HTML file:** Create a new HTML file (e.g., `index.html`) and add a `div` element for the heading with `id="heading"` and another for the content with `id="content"`. Make sure both are set to `contenteditable="true"` so you can type in them.

    ```html
    <h1 id="heading" contenteditable="true">Type Something</h1>
    <div id="content" contenteditable="true">The text saves automatically every second.</div>
    ```

2.  **Add the JavaScript code:** Place the provided JavaScript code in a `<script>` tag within your HTML file or in a separate file linked to the HTML.

3.  **Open in a browser:** Simply open the HTML file in your preferred web browser. You can now type in the heading and content area, and your text will be saved automatically.

---

### The Code

```javascript
document.getElementById("heading").innerHTML = localStorage["title"] || "Type Something"; //default text
document.getElementById("content").innerHTML = localStorage["text"]|| "The text saves automatically every second."; //default text

setInterval(function() {
    //function that saves the innerHTML of the div.
    localStorage["title"] = document.getElementById("heading").innerHTML; //heading div
    localStorage["text"] = document.getElementById("content").innerHTML; //content div
}, 1000);
```
