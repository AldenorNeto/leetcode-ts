class NoTree {
  value: number;
  left: NoTree | null = null;
  right: NoTree | null = null;

  constructor(value: number) {
    this.value = value;
  }
}

class BinaryTree {
  root: NoTree | null = null;

  insert(value: number): void {
    const newNode = new NoTree(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  inOrderTraversal(node: NoTree | null = this.root): number[] {
    if (!node) return [];
    return [
      ...this.inOrderTraversal(node.left),
      node.value,
      ...this.inOrderTraversal(node.right),
    ];
  }

  checkGross(): NoTree | null {
    return this.root;
  }

  invertTree(node: NoTree | null = this.root): NoTree | null {
    if (!node) return null;

    const temp = node.left;
    node.left = node.right;
    node.right = temp;

    this.invertTree(node.left);
    this.invertTree(node.right);

    return node;
  }
}

const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(12);
tree.insert(18);
tree.insert(22);
tree.insert(3);
tree.insert(1);
tree.insert(13);

// console.log(tree.inOrderTraversal());
