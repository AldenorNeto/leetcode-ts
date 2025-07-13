### **1. Autômatos Finitos (DFA/NFA)**
**Arquivos**: `DFA_1.ts`, `DFA_2.ts`, `DFA_3.ts`, `NFA.ts`  
**Objetivo**: Implementar máquinas de estado para reconhecimento de padrões em strings.

- **`DFA_1.ts`**:
  - Reconhece strings que terminam com "ab"
  - Estados: `q0` (inicial), `q1` (recebeu 'a'), `q2` (aceitação - recebeu 'b' após 'a')
  - Exemplo válido: "aab", "cab"

- **`DFA_2.ts`**:
  - Reconhece exatamente a string "ab"
  - Estados: `q0` (inicial), `q1` (recebeu 'a'), `q2` (aceitação), `q3` (rejeição)
  - Rejeita caracteres diferentes de 'a'/'b' ou sequências incorretas

- **`DFA_3.ts`**:
  - Reconhece strings binárias terminadas em "00" (regex: `(0|1)*00`)
  - Estados: `q0` (inicial), `q1` (recebeu '0'), `q2` (aceitação - recebeu outro '0')

- **`NFA.ts`**:
  - Reconhece strings que começam com 'a' e terminam com 'b'
  - Implementação recursiva com backtracking
  - Estados: `q0` (inicial), `q1` (leu 'a'), `q2` (aceitação)

---

### **2. Geração de Tokens (JWT)**
**Arquivo**: `examp1.ts`  
**Objetivo**: Gerar tokens JWT assinados com HMAC-SHA256.

- Codifica header/payload em Base64URL
- Gera assinatura usando chave secreta
- Formato final: `header.payload.assinatura`
- Dependência: módulo `crypto` do Node.js

---

### **3. Máquina de Turing**
**Arquivo**: `sumTape.ts`  
**Objetivo**: Simular uma máquina de Turing para somar números em unário.

- **Funcionamento**:
  1. Entrada: Sequências de '1's separadas por '0' (ex: `["1","0","1","_"]` = 1+1)
  2. Remove o '0' e concatena as sequências
  3. Estados: 
     - `find0`: Localiza o separador '0'
     - `shift`: Desloca símbolos para preencher o espaço
     - `halt`: Termina o processamento
- Saída: Sequência contínua de '1's (ex: `["1","1","_","_"]`)

---

### **4. Estruturas de Dados**
**Arquivos**: `binaryTree.ts`, `binaryTreeAVL.ts`, `binaryHeap.ts`

- **Árvore Binária** (`binaryTree.ts`):
  - Inserção clássica BST
  - Travessia em-ordem (in-order traversal)
  - Função para inverter a árvore (`invertTree`)

- **Árvore AVL** (`binaryTreeAVL.ts`):
  - Auto-balanceamento com rotações (leftRotate/rightRotate)
  - Cálculo de altura e fator de balanceamento
  - Suporta inserções complexas mantendo balanceamento

- **Heap Binário** (`binaryHeap.ts`):
  - Implementação mínima (esqueleto)

---

### **5. Utilitários**
**Arquivos**: `input.ts`, `writeLog.ts`, `*.json`

- **`input.ts`**:
  - Interface para leitura de input no terminal
  - Funções: `perguntar()` (prompt assíncrono) e `fecharInput()`

- **`writeLog.ts`**:
  - Salva dados em arquivos JSON
  - Uso: `escreveLog(dados, "nome-arquivo")`

- **Arquivos JSON**:
  - `invertido.json`/`nome.json`: Exemplos de árvores binárias serializadas

---

### **6. Núcleo do Projeto**
**Arquivo**: `index.ts`  
**Objetivo**: Ponto de entrada principal.

- Importa todos os módulos
- Inicializa interface de input (não utilizado atualmente)
- **Para testar módulos específicos**:
  ```ts
  console.log(automatonsDFA1("aab")) // Testa DFA_1
  console.log(binaryTree.inOrderTraversal()) // Exibe árvore
  ```

---

### **7. Configurações e Scripts**
- **`concat-files.ps1`**: Script PowerShell para concatenação de arquivos
- **`index.html`**: Exemplo de implementação de árvore binária em JavaScript
- **Configurações TypeScript** (`tsconfig.json`):
  - Target: ES2020
  - Módulos: CommonJS
  - Strict mode habilitado

---

### **Fluxo de Interação Típico**
1. Edite/execute arquivos específicos para testar funcionalidades
2. Para autômatos:
   ```ts
   import { dfa_1 } from './automatons/DFA_1'
   console.log(dfa_1("teste")) // true/false
   ```
3. Para estruturas de dados:
   ```ts
   const tree = new BinaryTree()
   tree.insert(42)
   tree.inOrderTraversal()
   ```
4. Para gerar tokens:
   ```ts
   import { generateJWT } from './generateJWT/examp1'
   // (implemente exportação no arquivo)
   ```
