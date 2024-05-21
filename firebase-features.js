import {
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js"

let renan = {
  nome: "Renan"
};

let alunA = {
  nome: "a",
  ra: "12345",
  dtaNasc: 2000,
};

let alunB = {
  nome: "b",
  ra: "12345",
  dtaNasc: 2000,
};

let Curso = {
  nome: "DS",
  coordenador: "Renan",
  alunos: [alunA, alunB],
};


let fbAddDocCbFn = (docRef) => {
  console.log("Document written with ID: ", docRef.id);
};

async function fbAddDoc(fbDb, js0bj, strCollectionName, fbAddDocCbFn) {
  try {
    const docRef = await addDoc(collection(fbDb, strCollectionName), js0bj);
    fbAddDocCbFn(docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}