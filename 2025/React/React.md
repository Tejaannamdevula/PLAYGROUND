# Event Handling

- **Passing a Function as a Prop**:  
  Handle events by passing a function as a prop to an element like `<button>`.

- **Pass, Don't Call**:  
  Event handlers must be passed, not called! Example:  
  `onClick={handleClick}`, not `onClick={handleClick()}`.

- **Defining Event Handlers**:  
  You can define an event handler function separately or inline.

- **Access Props Inside Handlers**:  
  Event handlers are defined inside a component, so they can access props.

- **Parent to Child Handlers**:  
  Declare an event handler in a parent and pass it as a prop to a child.

- **Custom Handler Props**:  
  Define your own event handler props with application-specific names.

- **Event Propagation**:  
  Events propagate upwards. Call `e.stopPropagation()` on the first argument to prevent that.

- **Prevent Default Behavior**:  
  Call `e.preventDefault()` to stop unwanted default browser behavior.

- **Explicitly Calling Handlers from Children**:  
  Explicitly calling an event handler prop from a child handler is a good alternative to propagation.

#### Resources

- [React Docs: Responding to Events](https://react.dev/learn/responding-to-events)

---

# Use Ref

- **Referencing a value with a ref**
- **Manipulating the DOM with a ref**
- **Avoiding recreating the ref contents**

#### Resources

- [React Docs: Responding to Events](https://react.dev/learn/responding-to-events)

---
