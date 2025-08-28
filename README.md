# Difference between getElementById, getElementsByClassName and querySelector/querySelectorAll:
## getElementById: Selects only one item named by its ID.
## getElementByClassName: Selects items that have similar class name.
## querySelector: Selects the first item that matches with the name of searching.
## querySelectorAll: Selects all the items with the name of searching.
# Creating element into DOM:
## const newItem = document.createElement('div');
## newItem.textContent = "I am Niloy Chakma";
# Inserting element into DOM:
## document.body.appendChild(newItem);
# Event Bubbling 
## It's the process of returning to its parent node.
## It strats from when a button is triggered and bubbles up to its upper node from where it belongs.
# Event Delegation
## It is adding only one event listener to the parent node instead of adding to every child nodes individually.
## It's important as it reduces the time needed to add event listener to all child nodes.
# Difference between preventDefault() and stopPropagation() methods:
## preventDefault(): It prevents the event that can happen by default.
## stopPropagation(): It stops the process of bubbling to root node.
