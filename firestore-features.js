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
  ra: "54321",
  dtaNasc: 2000,
};

let Curso = {
  nome: "DS",
  coordenador: renan,
  alunos: [alunA, alunB],
};

let fbListDocsCbFn = (doc) => {
  console.log("Document ID:", doc.id);
  console.log("Document data:", doc.data());
};
let fbListDocs = async (fbDb, colectionName, fbListDocsCbFn) => {
  const querySnapshot = await getDocs(collection(fbDb, colectionName));
  querySnapshot.forEach((doc) => {
      console.log(doc);
  });
};

fbListDocs(window.fbDb,"professores");