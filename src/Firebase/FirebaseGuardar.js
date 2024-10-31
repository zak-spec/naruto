// FirebaseGuardar.js
import { collection, addDoc } from "firebase/firestore";
import { db } from './firebaseConfig'; // Asegúrate de que la ruta sea correcta

const FirebaseGuardar = async (name, image,id) => {
  try {
    const docRef = await addDoc(collection(db, "favorites"), {
      name: name,
      image: image,
      id:id,
      addedAt: new Date()
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export { FirebaseGuardar };
