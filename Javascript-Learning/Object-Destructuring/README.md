# **Senior-Level Interview Questions on Object Destructuring in JavaScript**  

### Core Concepts and Syntax
1. **How does object destructuring handle missing properties in the object being destructured?**
2. **What is the default value assignment in object destructuring? Can you provide examples?**
3. **How can you rename variables while destructuring an object? Why is this feature useful in certain cases?**

### Nested and Complex Destructuring
4. **How do you destructure nested objects in JavaScript? Provide a practical example.**
5. **What happens if a nested property does not exist during destructuring, and how can you handle it gracefully?**
6. **Can you destructure an object within an array while iterating it with `for...of`? Provide an example.**

### Usage in Functions
7. **How would you use object destructuring to handle function parameters efficiently?**
8. **What are the pros and cons of using object destructuring in function arguments over positional arguments?**
9. **How do default values work when destructuring function arguments?**

### Edge Cases and Advanced Usage
10. **What will happen if you try to destructure a non-iterable value (like `null` or `undefined`)? How can you handle this scenario?**
11. **What are the best practices when destructuring objects with deeply nested properties to avoid runtime errors?**
12. **How would you merge destructured properties with additional default properties without using external libraries like Lodash?**

### Performance and Best Practices
13. **Does destructuring impact performance compared to traditional property access? Explain with examples.**
14. **How do you handle scenarios where destructuring might lead to unintended side effects or poor readability?**

### Real-World Scenarios
15. **How can object destructuring be leveraged to improve readability in React or Vue components? Provide code examples.**
16. **How would you use object destructuring to extract only relevant properties from a large API response object?**
17. **Describe a situation where destructuring helped you debug or simplify complex code logic in a real project.**
   
   
## **Q1: How does object destructuring handle missing properties in the object being destructured?**  
*Date: February 3, 2025*

When you destructure an object in JavaScript and attempt to extract a property that doesn't exist in the object, the result is `undefined`.

### Example:
```javascript
const person = {
  name: "John",
  age: 30
};

const { name, gender } = person;
console.log(name);    // Output: "John"
console.log(gender);  // Output: undefined
```

In the example above, `gender` does not exist in the `person` object, so it defaults to `undefined`.

### Handling Missing Properties
To handle missing properties gracefully, you can provide **default values** during destructuring.

#### Example with Default Values:
```javascript
const person = {
  name: "John",
  age: 30
};

const { name, gender = "Not specified" } = person;
console.log(name);    // Output: "John"
console.log(gender);  // Output: "Not specified"
```

By specifying `gender = "Not specified"`, the code ensures that `gender` will never be `undefined` even if it doesn't exist in the object.

Let me know if you'd like more examples or edge cases related to this question.


## **Q2: What is the default value assignment in object destructuring? Can you provide examples?**  
*Date: February 3, 2025*

In JavaScript, **default value assignment** during object destructuring allows you to provide fallback values when a property being destructured is either missing or explicitly `undefined`.

### **How Default Value Assignment Works**
If the property is `undefined` or does not exist in the object, the default value is used. However, if the property is `null`, the default value is **not** applied because `null` is a defined value.

---

### **Example 1: Missing Property with Default Value**
```javascript
const person = { name: "John" };

const { name, age = 25 } = person;
console.log(name); // Output: "John"
console.log(age);  // Output: 25
```

Since `age` doesn't exist in the `person` object, the default value `25` is assigned.

---

### **Example 2: Property Explicitly Set to `undefined`**
```javascript
const person = { name: "John", age: undefined };

const { name, age = 25 } = person;
console.log(name); // Output: "John"
console.log(age);  // Output: 25
```

Because `age` is explicitly `undefined`, the default value `25` is used.

---

### **Example 3: Property Explicitly Set to `null`**
```javascript
const person = { name: "John", age: null };

const { name, age = 25 } = person;
console.log(name); // Output: "John"
console.log(age);  // Output: null
```

Since `null` is a defined value, the default value `25` is **not** applied, and `age` remains `null`.

---

### **Example 4: Using Functions as Default Values**
You can also use functions as default values for more dynamic fallback logic.

```javascript
const person = { name: "John" };

const { name, age = (() => new Date().getFullYear() - 1990)() } = person;
console.log(name); // Output: "John"
console.log(age);  // Output: (current year - 1990)
```

---

### **Key Takeaways**
1. Default values are applied only when the property is missing or `undefined`.
2. Default values are **not applied** when the property is `null`.
3. Functions can be used for more dynamic default value assignments.
