# Floating Comment System
This example allows a user to highlight text, click a button, and add a floating comment box.

#### **How it works:**
1. The user selects some text.
2. A comment box appears near the selection.
3. The user enters a comment, and it is saved for that selection.

### **Why is this interesting?**
- It enhances user interaction dynamically.
- Uses `document.createElement` to create UI components on the fly.
- Demonstrates `getSelection()` and `getBoundingClientRect()` for precise positioning.
- Shows real-world applications of JavaScript without needing frameworks.

### My Notes

#### **Selection interface**

A `Selection` object represents the range of text selected by the user or the current position of the caret. Each document is associated with a unique selection object, which can be retrieved by document.getSelection() or window.getSelection() and then be examined and modified.

A user may make a selection from left to right (in document order) or right to left (reverse of document order). The anchor is where the user began the selection and the focus is where the user ends the selection. If you make a selection with a desktop mouse, the anchor is placed where you pressed the mouse button, and the focus is placed where you released the mouse button.

- TO get the selected text: window.getSelection.toString()

#### **Range interface**

The `Range` interface represents a fragment of a document that can contain nodes and parts of text nodes.

#### **Element: getBoundingClientRect() method**

The `Element.getBoundingClientRect()` method returns a `DOMRect` object providing information about the size of an element and its position relative to the `viewport`.

#### **Element interface**

Element is the most general base class from which all element objects (i.e. objects that represent elements) in a Document inherit. It only has methods and properties common to all kinds of elements. More specific classes inherit from Element.

For example, the HTMLElement interface is the base interface for HTML elements. Similarly, the SVGElement interface is the basis for all SVG elements, and the MathMLElement interface is the base interface for MathML elements. Most functionality is specified further down the class hierarchy.

Languages outside the realm of the Web platform, like XUL through the XULElement interface, also implement Element.