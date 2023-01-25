class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

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
  search = (value, parent = this.root) => {
    //? I cant decide if I like having the second parameter as the parent
    //? I do it because I am trying to call the method recursively
    //? I could use a while loop, not sure which is better

    if (parent.value === null) {
      return false;
    } else if (parent.value === value) {
      return true;
    } else if (parent.value < value) {
      if (parent.right !== null) {
        //don't forget to return this search
        //if you don't you will get undefined we need the return to cascade
        return this.search(value, parent.right);
      } else {
        return false;
      }
    } else if (parent.value > value) {
      if (parent.left !== null) {
        return this.search(value, parent.left);
      } else {
        return false;
      }
    } else {
      return false;
    }
  };
}

var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);

tree.insert(20);
tree.insert(20);
tree.insert(1);

console.log(tree.search(10));
console.log(tree.search(80));
console.log(tree.search(20));
// We will add a method called insert that will figure out where it goes for us
