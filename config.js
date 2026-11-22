/* ការកំណត់ប្រព័ន្ធគណនី (កែតែឯកសារនេះ)
   - បើទុក firebase: null កម្មវិធីបើកចំហ ប្រើបានដោយគ្មានគណនី (ដូចមុន)។
   - បន្ទាប់ពីបង្កើតគម្រោង Firebase សូមចម្លងតម្លៃមកដាក់ក្នុង firebase: { ... } ហើយដាក់អ៊ីមែល Admin ។ */
window.APP_CONFIG = {
  firebase: null,
  /* ឧទាហរណ៍៖
  firebase: {
    apiKey: "AIza...",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project",
    appId: "1:1234567890:web:abcdef"
  }, */

  /* អ៊ីមែលរបស់ Admin (អក្សរតូចទាំងអស់) — ត្រូវដូចគ្នានឹងក្នុង firestore.rules */
  adminEmails: ["admin@example.com"],

  /* លេខសម្ងាត់សម្រាប់បើកផ្ទាំង «សំណើ» (កម្រិតបន្ថែម ការពារពេលអ្នកផ្សេងប្រើកុំព្យូទ័ររបស់អ្នក) */
  adminPin: "1201",

  /* ទំនាក់ទំនងបង្ហាញលើផ្ទាំងចុះឈ្មោះ */
  telegram: { phone: "012292604", link: "https://t.me/+85512292604" }
};
