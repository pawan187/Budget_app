import * as firebase from 'firebase';
var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket:process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };
  firebase.initializeApp(firebaseConfig);
  export default firebase.database();
  const googleProvide  = new firebase.auth.GoogleAuthProvider()
  export  {firebase , googleProvide } ;
  // database.ref('expense')
  // .on('value',
  //   (snapshot)=>{
  //   const expense = []
  //   snapshot.forEach((element)=>{
  //     expense.push({ ...element.val() , id : element.key })
  //   })
  //   console.log(expense)
  // })

  // database.ref('expense')
  // .on('child_changed',(snapshot)=>{
  //   console.log(snapshot.key , snapshot.val())
  // })

  // database.ref('expense').on('child_removed' , (snapshot)=>{
  //   console.log(snapshot.key , snapshot.val())
  // })  
  
  // database.ref('expense')
  // .on('child_added',(snapshot)=>{
  //   console.log(snapshot.key , snapshot.val())
  // })

  // firebase.database().ref('expense').push({
  //   description : 'gas bill',
  //   note : 'gas boll',
  //   amount : '800',
  //   createdAt : 4546554
  // }).then(()=>{
  //   console.log('data saved!')
  // },(error)=>{
  //   console.log('error')
  // })

  // database.ref('expense/-M492FNV0NV5vnc-bvOH').update({
  //   amount : 800
  // },()=>{
  //   console.log("updated")
  // })

  // firebase.database().ref('expense/-M4926Z3IMHW8RVOMZrh').remove()
  // .then(()=>{
  //   console.log('removed' )
  // },(error)=>{
  //   console.log(error)
  // })

 