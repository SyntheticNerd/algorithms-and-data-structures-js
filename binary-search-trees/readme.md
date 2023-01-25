# Notes

In a binary tree every parent can only have at max two children

Binary Search trees are sorted binary trees
    - every parent node has at most two children
    - Every node to the left of a parent node is always less than the parent
    - Every node to the right of a parent nide is always greater than the parent
    - Search for a binary tree is O(log(n))

## Psudo Code

### Inserting a node

- Create a new node
- Start at the root
  - Check if there is a root, if not the root now becomes that new node!
  - If there is a root, check if the value of the node is greater than of less than the value of the root
  - If it is greater
    - Check to see if there is a node to the right
      - If there is, move to that node and repeat these steps
      - if there is not, add that node as the right property
  - If it is less
    - Check to see if there is a node to the left
      - If there is, move to that node and repeat these steps
      - If there is not, add that node as the left property

### Finding a Node

- starting at the root
  - Check if there is a root, if not - we're done searching
- If there is a root, check if the value if greater than the value of the root
  - If not, check to see if there value is greater than or less than the value of the root
  - If it is greater
    - Check to see if there is a node to the right
      - if there isl, move to that node and repeat these steps
      - if there is not, we're done searching
  - If it is less
    - Check to see if there is a node to the left
      - If there is move to that node and repeat these steps
      - if there is not we're done searching