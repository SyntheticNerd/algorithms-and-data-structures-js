class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
//! Its better to not use recursion in JS
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert = (value, parent = this.root) => {
    const node = new Node(value);
    if (this.root === null) {
      this.root = node;
    } else if (parent.value < value) {
      if (parent.right === null) {
        parent.right = node;
      } else {
        this.insert(value, parent.right);
      }
    } else if (parent.value > value) {
      if (parent.left === null) {
        parent.left = node;
      } else {
        this.insert(value, parent.left);
      }
    } else if (parent.value === value) {
    } else {
      console.log("HOW'D YOU GET HERE");
    }
  };

  search = (value) => {
    let current = this.root;
    let found = false;
    while (current !== null && !found) {
      if (current.value === null) {
        current = null;
      } else if (current.value === value) {
        found = true;
      } else if (value < current.value) {
        if (current.left !== null) {
          current = current.left;
        } else {
          current = null;
        }
      } else if (value > current.value) {
        if (current.right !== null) {
          current = current.right;
        } else {
          current = null;
        }
      } else {
        current = null;
      }
    }
    if (found) {
      return current;
    } else {
      return undefined;
    }
  };

  deleteAll = () => {
    let current = this.root;
    let error = false;
    const stack = [];
    while (current !== null && !error) {
      if (current.left !== null) {
        stack.push(current);
        current = current.left;
      } else if (current.right !== null) {
        stack.push(current);
        current = current.right;
      } else {
        console.log("Delete", current.value);
        if (stack.length > 0) {
          if (current.value < stack[stack.length - 1].value) {
            current = stack.pop();
            current.left = null;
          } else {
            current = stack.pop();
            current.right = null;
          }
        } else {
          console.log("stack", stack);
          console.log("everything is deleted");
          current = null;
          this.root = current;
        }
      }
    }
  };
}

var tree = new BinarySearchTree();

tree.insert(6);
tree.insert(4);
tree.insert(2);
tree.insert(5);
tree.insert(8);
tree.insert(11);
tree.insert(10);

console.log(tree.search(10));
console.log(tree.search(50));
// console.log(tree);
tree.deleteAll();
console.log(tree);

//!Recursive search method
//search = (value, parent = this.root) => {
//    //? I cant decide if I like having the second parameter as the parent
//    //? I do it because I am trying to call the method recursively
//    //? I could use a while loop, not sure which is better
//
//    if (parent.value === null) {
//      return false;
//    } else if (parent.value === value) {
//      return true;
//    } else if (parent.value < value) {
//      if (parent.right !== null) {
//        //don't forget to return this search
//        //if you don't you will get undefined we need the return to cascade
//        return this.search(value, parent.right);
//      } else {
//        return false;
//      }
//    } else if (parent.value > value) {
//      if (parent.left !== null) {
//        return this.search(value, parent.left);
//      } else {
//        return false;
//      }
//    } else {
//      return false;
//    }
//  };

// We will add a method called insert that will figure out where it goes for us
