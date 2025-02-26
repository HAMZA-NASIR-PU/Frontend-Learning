# Frontend Mastery Learning

- Best Article on CSS Position -> `https://blog.webdevsimplified.com/2022-01/css-position/`

# 📏 How Block-Level Elements Inherit Width and Height

Here's how block-level elements inherit width and height from their parent elements in CSS:

**Default Behavior**

* **Width:** By default, a block-level element will expand horizontally to fill the entire width available to it within its parent container. This means it will stretch to the left and right edges of the parent.
* **Height:** The height of a block-level element is determined by the content within it. If the content is short, the element's height will be small. If the content is long, the element's height will grow to fit the content.

**How Inheritance Works**

* **No Explicit Values:** If you don't set specific `width` or `height` values on a block-level element, it will follow the default behavior described above.
* **Percentage Values:** If you set the `width` or `height` of a block-level element to a percentage, that percentage is calculated relative to the parent element's width or height. For example, `width: 50%` means the element will be half the width of its parent.
* **`inherit` Keyword:** You can use the `inherit` keyword to explicitly tell a block-level element to inherit the `width` or `height` of its parent. For example: `width: inherit;`

**Important Notes**

* **Parent's Dimensions:** For percentage-based widths and heights to work, the parent element needs to have a defined width or height itself. If the parent's dimensions are not explicitly set, the child's percentage values might not behave as expected.
* **Content Overflow:** If the content within a block-level element exceeds its height, it will overflow. You can control this overflow using the `overflow` property in CSS.
* **Box Model:** Remember that padding, borders, and margins also affect the overall size of a block-level element. These are added to the content's width and height to determine the total space the element occupies.

**Example**

```html
<div class="parent">
  <div class="child">This is some text inside the child element.</div>
</div>
```

```css
.parent {
  width: 400px;
  height: 200px;
  background-color: lightgray;
}

.child {
  width: 50%; /* 50% of the parent's width */
  background-color: yellow;
}
```

In this example, the `.child` element will be 200px wide (50% of the parent's 400px width) and its height will be determined by the amount of text within it.

---

### **1. Width Inheritance**
- By default, block-level elements take up the **full width of their parent container** unless a width is explicitly defined.

#### **Default Behavior**
```html
<div style="width: 500px; background-color: lightgray;">
  <div style="background-color: coral;">Child Div</div>
</div>
```
In this example, the child `<div>` will automatically inherit 100% of the parent's width (500px).

#### **Explicit Width Example**
If a specific width is set, the child element will not inherit it directly unless `width: inherit;` is used.
```html
<div style="width: 500px;">
  <div style="width: inherit; background-color: coral;">Child Div</div>
</div>
```
The child div explicitly inherits the parent width of 500px.

---

### **2. Height Inheritance**
Unlike width, **block-level elements do not naturally inherit the height of their parent** unless specific CSS rules are applied.

#### **Height Inheritance with Flexbox or CSS Grid**
If you want child elements to fill the parent's height, Flexbox or CSS Grid techniques can help:
```html
<div style="height: 200px; display: flex;">
  <div style="background-color: coral; flex: 1;">Child Div</div>
</div>
```

#### **Using `inherit` for Height**
```html
<div style="height: 300px;">
  <div style="height: inherit; background-color: coral;">Child Div</div>
</div>
```
The child element explicitly inherits the height of 300px from its parent.

---

### **Key Properties for Inheritance**
1. `inherit`: Directly inherits the parent element's value for width or height.
2. `auto`: Default value for height and width, where height typically depends on content, and width fills the container.
3. `100%`: Ensures the child element exactly matches the parent's dimension when `inherit` isn't working as expected.

---

### **Conclusion**
- **Width:** Block elements naturally inherit the full width unless restricted.
- **Height:** Doesn't naturally inherit and often requires `inherit`, `100%`, or layout techniques like Flexbox/Grid for predictable results.