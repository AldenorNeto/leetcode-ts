class AVLNode {
  value: number;
  left: AVLNode | null = null;
  right: AVLNode | null = null;
  height: number = 1;

  constructor(value: number) {
    this.value = value;
  }
}

class AVLTree {
  root: AVLNode | null = null;

  // Retorna a altura de um nó ou 0 se o nó for nulo.
  private height(node: AVLNode | null): number {
    return node ? node.height : 0;
  }

  // Calcula o fator de balanceamento do nó.
  // É a diferença entre a altura da subárvore esquerda e a altura da subárvore direita.
  private getBalance(node: AVLNode | null): number {
    return node ? this.height(node.left) - this.height(node.right) : 0;
  }

  // Rotação simples à direita.
  private rightRotate(y: AVLNode): AVLNode {
    const x = y.left!;
    const T2 = x.right;

    // Realiza a rotação
    x.right = y;
    y.left = T2;

    // Atualiza as alturas
    y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
    x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;

    // Retorna o novo nó raiz após a rotação
    return x;
  }

  // Rotação simples à esquerda.
  private leftRotate(x: AVLNode): AVLNode {
    const y = x.right!;
    const T2 = y.left;

    // Realiza a rotação
    y.left = x;
    x.right = T2;

    // Atualiza as alturas
    x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
    y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;

    // Retorna o novo nó raiz após a rotação
    return y;
  }

  // Função pública de inserção.
  insert(value: number): void {
    this.root = this._insert(this.root, value);
  }

  // Função de inserção recursiva que balanceia a árvore AVL.
  private _insert(node: AVLNode | null, value: number): AVLNode {
    // Inserção padrão na BST
    if (!node) return new AVLNode(value);

    if (value < node.value) {
      node.left = this._insert(node.left, value);
    } else {
      node.right = this._insert(node.right, value);
    }

    // Atualiza a altura deste nó
    node.height = 1 + Math.max(this.height(node.left), this.height(node.right));

    // Calcula o fator de balanceamento para verificar se o nó ficou desbalanceado
    const balance = this.getBalance(node);

    // Caso Left Left: desbalanceado à esquerda e o novo valor foi inserido na subárvore esquerda
    if (balance > 1 && value < node.left!.value) {
      return this.rightRotate(node);
    }

    // Caso Right Right: desbalanceado à direita e o novo valor foi inserido na subárvore direita
    if (balance < -1 && value > node.right!.value) {
      return this.leftRotate(node);
    }

    // Caso Left Right: desbalanceado à esquerda e o novo valor foi inserido na subárvore direita do filho esquerdo
    if (balance > 1 && value > node.left!.value) {
      node.left = this.leftRotate(node.left!);
      return this.rightRotate(node);
    }

    // Caso Right Left: desbalanceado à direita e o novo valor foi inserido na subárvore esquerda do filho direito
    if (balance < -1 && value < node.right!.value) {
      node.right = this.rightRotate(node.right!);
      return this.leftRotate(node);
    }

    // Retorna o nó (inalterado, se balanceado)
    return node;
  }

  // Percurso inOrder que retorna os valores de forma ordenada.
  inOrderTraversal(node: AVLNode | null = this.root): number[] {
    if (!node) return [];
    return [
      ...this.inOrderTraversal(node.left),
      node.value,
      ...this.inOrderTraversal(node.right),
    ];
  }
}

// Exemplo de uso:
const avl = new AVLTree();
avl.insert(10);
avl.insert(5);
avl.insert(15);
avl.insert(12);
avl.insert(18);
avl.insert(22);
avl.insert(3);
avl.insert(1);
avl.insert(13);

// console.log(avl.inOrderTraversal());
