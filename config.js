/* ការកំណត់ប្រព័ន្ធគណនី (កែតែឯកសារនេះ)
   - បើទុក firebase: null កម្មវិធីបើកចំហ ប្រើបានដោយគ្មានគណនី (ដូចមុន)។
   - បន្ទាប់ពីបង្កើតគម្រោង Firebase សូមចម្លងតម្លៃមកដាក់ក្នុង firebase: { ... } ហើយដាក់អ៊ីមែល Admin ។ */
window.APP_CONFIG = {
const firebaseConfig = {
  apiKey: "AIzaSyB_gqjPRRgXSRXHmdgUxq2GWp8gz-Ia4gs",
  authDomain: "timetable-six.firebaseapp.com",
  projectId: "timetable-six",
  storageBucket: "timetable-six.firebasestorage.app",
  messagingSenderId: "445764110601",
  appId: "1:445764110601:web:670665fa7ca1c6c546abd8",
  measurementId: "G-3H29M3HE0Z"
};
  /* អ៊ីមែលរបស់ Admin (អក្សរតូចទាំងអស់) — ត្រូវដូចគ្នានឹងក្នុង firestore.rules */
  adminEmails: ["sngoeundevith@gmail.com"],

  /* លេខសម្ងាត់សម្រាប់បើកផ្ទាំង «សំណើ» (កម្រិតបន្ថែម ការពារពេលអ្នកផ្សេងប្រើកុំព្យូទ័ររបស់អ្នក) */
  adminPin: "1201",

  /* ទំនាក់ទំនងបង្ហាញលើផ្ទាំងចុះឈ្មោះ */
  telegram: { phone: "012292604", link: "https://t.me/+85512292604" }
};
