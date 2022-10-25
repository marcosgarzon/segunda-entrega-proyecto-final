import mongoose from "mongoose";



mongoose.connect("mongodb+srv://marcosgarzonmdq:lapapa10.@cluster0.tmathxe.mongodb.net/?retryWrites=true&w=majority", (err) => {
  if (err) {
    console.log("❌ Error al conectarse a MongoDB");
  } else {
    console.log("🔥 Conectados a MongoDB");
  }
});

export default mongoose; 