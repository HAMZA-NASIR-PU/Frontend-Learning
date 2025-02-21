# Task

Let's create a dynamic, interactive table with a large number of cells, where each cell can be edited and styled differently. This will be a great exercise for understanding event delegation.

**The Task: Interactive Spreadsheet-like Table**

1.  **Dynamic Table Generation:** Create a table with 100 rows and 50 columns (or even larger if you want to push it).  Don't hardcode the table in HTML; generate it dynamically using JavaScript.  This is important because we'll be adding event listeners *after* the table is created.

2.  **Editable Cells:** Each cell in the table should be editable.  When a cell is clicked, it should transform into an input field where the user can change the content.  When the user presses Enter or clicks outside the input field, the change should be saved, and the cell should revert back to its normal display.

3.  **Styling Options:**  Add controls (buttons or a dropdown) to allow users to change the background color and text color of individual cells.  These styling changes should also be applied to the specific cell that's clicked.

4.  **Data Storage:**  Store the data and styling information for each cell.  A 2D array (or an array of objects) would be suitable for this. This allows you to retain the cell's content and style after editing.

5.  **Event Delegation:**  Crucially, you should **only attach one event listener to the table itself** (or a container element surrounding the table).  Use event delegation to handle clicks on individual cells, edits within the input fields, and styling changes.

**Implementation Hints and Challenges:**

*   **Table Creation:** Use `document.createElement` and related methods to create the table elements dynamically.  This is a good exercise in DOM manipulation.
*   **Event Delegation:** The key is to check `e.target` in your event listener attached to the table.  Based on the `e.target` (which will be the clicked cell, or the input field within the cell), determine the row and column of the cell that was interacted with.
*   **Editing:** When a cell is clicked, create an `<input>` element, position it over the cell, populate it with the cell's content, and focus on it.  Handle the `blur` event of the input to save the changes.
*   **Styling:** When a styling control is used, update the corresponding cell's style in your data storage and apply the style to the cell using JavaScript.
*   **Performance:**  With a large table, performance is important.  Avoid unnecessary DOM manipulations.  Update only the cells that actually change.

**Why this is a good exercise for event delegation:**

*   **Large Number of Elements:**  Attaching individual event listeners to thousands of cells would be extremely inefficient.  Event delegation is the only practical approach.
*   **Dynamic Content:** The table is created dynamically, so you can't attach listeners in your HTML.  Event delegation allows you to handle events for elements that are added to the DOM after the initial page load.
*   **Complex Interactions:** The task involves multiple types of events (clicks, input changes, styling changes) and requires you to identify the specific cell that was interacted with.  This forces you to understand how `e.target` works in different scenarios.

**Bonus Challenges:**

*   **Saving and Loading:** Implement a way to save the table data and styling to local storage or a server, and load it later.
*   **Keyboard Navigation:**  Allow users to navigate the table using the arrow keys.
*   **More Styling Options:** Add more styling controls (font size, bold, italic, etc.).
*   **Data Validation:**  Validate the user input in the cells (e.g., allow only numbers in certain columns).

This project will give you a deep understanding of event delegation and its importance in building interactive web applications. It will also improve your DOM manipulation and JavaScript skills.

# Solution: See index.html file