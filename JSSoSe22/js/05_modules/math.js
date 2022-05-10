// named export - beliebig viele pro datei
export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

// default export - genau einer pro datei
export default function sub(a, b) {
  return a - b;
}

export const pi = Math.PI;
