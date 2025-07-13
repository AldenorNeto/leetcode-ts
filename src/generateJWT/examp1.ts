const crypto = require("crypto");

const secretKey = "Chave secreta para assinatura";

// Função para codificar em Base64URL
export function base64url(input: string) {
  return Buffer.from(input)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");
}

// 1. Header e Payload
const header = { alg: "HS256", typ: "JWT" };
const payload = { sub: "123", name: "João", exp: 1735689600 };

// 2. Codificar em Base64URL
const headerBase64 = base64url(JSON.stringify(header));
const payloadBase64 = base64url(JSON.stringify(payload));

// 3. Concatenar e assinar
const headerPayload = `${headerBase64}.${payloadBase64}`;
const signature = crypto
  .createHmac("sha256", secretKey)
  .update(headerPayload)
  .digest("base64url");

// 4. JWT final
const jwt = `${headerPayload}.${signature}`;
console.log(jwt);
