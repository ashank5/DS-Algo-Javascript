class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
    insert(value) {
      const newNode = new Node(value);
      if (this.root === null) {
        this.root = newNode;
      } else {
        let currentNode = this.root;
        while (true) {
          if (value < currentNode.value) {
            //Left
            if (!currentNode.left) {
              currentNode.left = newNode;
              return this;
            }
            currentNode = currentNode.left;
          } else {
            //Right
            if (!currentNode.right) {
              currentNode.right = newNode;
              return this;
            }
            currentNode = currentNode.right;
          }
        }
      }
    }
    lookup(value) {
      if (this.root === null) {
        return false;
      }
      else {
        let currentNOde = this.root;
        while (currentNOde) {
          if (value < currentNOde.value) {
            currentNOde = currentNOde.left;
          } else if (value > currentNOde.value) {
            currentNOde = currentNOde.right;
          } else if (value === currentNOde.value) {
            return currentNOde;
          }
  
        }
        return false;
      }
    }
  }
  
  
  (function() {
    const bst = new BinarySearchTree();
    bst.insert(9);
    bst.insert(4);
    bst.insert(6);
    bst.insert(20);
    bst.insert(170);
    bst.insert(15);
    bst.insert(1);
    console.log(bst.lookup(9));
    //console.log(JSON.stringify(traverse(bst.root)));
    console.log("done");
  })();