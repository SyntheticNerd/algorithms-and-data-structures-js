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
}

var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);

tree.insert(20);
tree.insert(20);
tree.insert(1);

// We will add a method called insert that will figure out where it goes for us
