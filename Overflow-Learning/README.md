# Understanding the Overflow Property in CSS: Horizontal and Vertical Overflow (See `index.html` code)

The reason the paragraph content doesn't overflow out of the width side in your example is because **the default behavior of block-level elements like `<div>`** is to take up the full width of their container unless otherwise specified.

Here’s why the content doesn't overflow horizontally:

### 1. **Width of the Container (20%)**
Your container `<div>` has a **width of 20%**. This means that the element will take up 20% of the width of its parent container (the body in this case). The content inside it (the paragraph) will also try to fit within that width.

### 2. **Overflow Behavior**
You have **`overflow: hidden;`** applied, which will clip any content that overflows the container’s dimensions **vertically**, but **not horizontally** unless you specifically set the width of the container to be smaller than the content inside.

### 3. **How Text Behaves Inside Block-Level Elements**
In your case, the content (the paragraph) is inside a block-level element (`<div>`), and by default, block-level elements will expand to fit the width of their parent container. The text inside the block will wrap automatically to fit within the width of the container (unless you prevent it with CSS).

### To Make the Text Overflow Horizontally:
If you want the text to overflow horizontally and see the effect, you would need to set a fixed width for the container that is smaller than the content, or you could prevent the text from wrapping by using **`white-space: nowrap;`**. Here's an updated example:

### Example with Horizontal Overflow:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Overflow Example</title>
    <style>
        .container {
            background-color: red;
            width: 20%;         /* Width of the container */
            height: 10px;       /* Height of the container */
            overflow: hidden;   /* Hide overflowing content */
            white-space: nowrap; /* Prevent text from wrapping */
        }
    </style>
</head>

<body>
    <div class="container">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos ipsam ea natus, non itaque delectus
        voluptatum optio sequi aliquid rem? Ullam, similique non. Rerum eligendi ut error doloremque quisquam voluptates
        enim vel in voluptatem, necessitatibus, eaque quibusdam tempora ducimus quia ipsum. Nisi provident facere, eos
        ab aut id, reprehenderit harum unde culpa quas voluptas odio maxime iste. Enim, reiciendis rem id corrupti
        magnam quia expedita neque voluptate cum amet eveniet suscipit, veritatis ad nesciunt veniam sint doloribus
        deleniti asperiores facilis placeat odit distinctio quas? Voluptate neque provident, minima voluptatibus nam ad!
        Quos ea neque ex et corrupti. Ipsum, id totam.
    </div>
</body>

</html>
```

### Explanation:
- **`white-space: nowrap;`** is added to prevent the text from wrapping to the next line. 
- Now, the text will **overflow horizontally** because the content is too wide to fit inside the container’s 20% width. Since you've also used **`overflow: hidden;`**, the overflowing part of the text will be clipped and won't be visible beyond the container.

### What Happens:
- **Without `white-space: nowrap;`**: The text would wrap and fit within the 20% width, so no horizontal overflow would happen.
- **With `white-space: nowrap;`**: The text will continue on a single line, and since it's too long for the container, it will overflow horizontally and get clipped (because of **`overflow: hidden;`**).

### To Enable Horizontal Scrolling:
If you want to see the horizontal overflow and allow users to scroll through it, you could use **`overflow-x: auto;`**:

```css
.container {
    background-color: red;
    width: 20%;         /* Width of the container */
    height: 10px;       /* Height of the container */
    overflow-x: auto;   /* Enable horizontal scrolling */
    white-space: nowrap; /* Prevent text from wrapping */
}
```

Now, the content will overflow horizontally, and a horizontal scrollbar will appear for the user to scroll through the text.