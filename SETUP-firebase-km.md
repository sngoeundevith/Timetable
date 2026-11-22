# ការដំឡើងប្រព័ន្ធកាលវិភាគ ជាមួយ Firebase (ឥតគិតថ្លៃ)

ឯកសារក្នុងកញ្ចប់នេះ៖
- `index.html` — កម្មវិធីទាំងមូល
- `config.js` — ទីតាំងដាក់ key របស់ Firebase និងអ៊ីមែល Admin (ឯកសារតែមួយដែលអ្នកត្រូវកែ)
- `firestore.rules` — ច្បាប់សុវត្ថិភាពរបស់ Firebase (ត្រូវ paste ចូល Firebase)

ប្រព័ន្ធនេះ **មិនត្រូវការ** ផែនការបង់ប្រាក់ (Blaze) ឬ Cloud Functions ទេ។ ប្រើ Spark (ឥតគិតថ្លៃ) បាន។

---

## ជំហាន ១ — បង្កើត Project ក្នុង Firebase
1. ចូល https://console.firebase.google.com ដោយប្រើគណនី Google របស់អ្នក។
2. ចុច **Create a project** (ឬ Add project) → ដាក់ឈ្មោះ ឧ. `school-timetable` → Continue។
3. បិទ Google Analytics ក៏បាន (មិនចាំបាច់) → **Create project** → រង់ចាំ → Continue។

## ជំហាន ២ — បើកការចុះឈ្មោះដោយ Email/Password
1. ម៉ឺនុយឆ្វេង **Build → Authentication** → ចុច **Get started**។
2. tab **Sign-in method** → ជ្រើស **Email/Password** → បើក **Enable** → **Save**។

## ជំហាន ៣ — បង្កើត Firestore Database
1. ម៉ឺនុយឆ្វេង **Build → Firestore Database** → **Create database**។
2. ជ្រើស Location ឧ. `asia-southeast1` (Singapore) → Next។
3. ជ្រើស **Production mode** → **Create**។

## ជំហាន ៤ — ដាក់ច្បាប់សុវត្ថិភាព (សំខាន់ណាស់)
1. បើកឯកសារ `firestore.rules` ដោយ Notepad។
2. រកបន្ទាត់ `function adminEmails() { return ['admin@example.com']; }`
   ប្តូរ `admin@example.com` ទៅជាអ៊ីមែល Admin របស់អ្នក (**អក្សរតូចទាំងអស់**)។
3. ក្នុង Firebase → Firestore → tab **Rules** → លុបអ្វីដែលមាន → paste ខ្លឹមសារទាំងអស់ → **Publish**។

> បើមិនធ្វើជំហាននេះទេ អ្នកណាក៏អាចយល់ព្រមខ្លួនឯងបាន។ លេខសម្ងាត់ 1201 គ្រាន់តែជាសោបន្ថែមក្នុងកម្មវិធី
> ការការពារពិតប្រាកដគឺ **ច្បាប់ (rules) + អ៊ីមែល Admin** នេះ។

## ជំហាន ៥ — Copy key (firebaseConfig) មកដាក់ក្នុង code
1. ក្នុង Firebase ចុចរូបស្លាបព្រៃ ⚙ ក្បែរ "Project Overview" → **Project settings**។
2. រមូរចុះក្រោម ផ្នែក **Your apps** → ចុចរូប **`</>` (Web)**។
3. ដាក់ឈ្មោះ app ឧ. `timetable` → **Register app** (មិនបាច់ជ្រើស Hosting)។
4. វានឹងបង្ហាញកូដ `const firebaseConfig = { apiKey: "...", authDomain: "...", projectId: "...", storageBucket: "...", messagingSenderId: "...", appId: "..." };`
5. បើកឯកសារ `config.js` ដោយ Notepad ហើយកែដូចខាងក្រោម៖

```js
window.APP_CONFIG = {
  firebase: {
    apiKey: "AIza...ចម្លងពី Firebase...",
    authDomain: "school-timetable.firebaseapp.com",
    projectId: "school-timetable",
    appId: "1:1234567890:web:abcdef"
  },
  adminEmails: ["អ៊ីមែល-admin-របស់អ្នក@gmail.com"],   // អក្សរតូច ត្រូវដូចក្នុង firestore.rules
  adminPin: "1201",
  telegram: { phone: "012292604", link: "https://t.me/+85512292604" }
};
```

> apiKey របស់ Firebase Web **មិនមែនជាសម្ងាត់** ទេ (វាត្រូវបង្ហាញក្នុងគេហទំព័រជានិច្ច)។ សុវត្ថិភាពមកពី rules ក្នុងជំហាន ៤។

## ជំហាន ៦ — Upload ទៅ GitHub Pages
1. ក្នុង GitHub repository របស់អ្នក → **Add file → Upload files**។
2. Upload `index.html` និង `config.js` (ជំនួសឯកសារចាស់) → **Commit changes**។
3. រង់ចាំ ១-២ នាទី។

## ជំហាន ៧ — អនុញ្ញាតដែន (domain) របស់ GitHub Pages
1. Firebase → **Authentication → Settings → Authorized domains** → **Add domain**។
2. ដាក់ `ឈ្មោះអ្នកប្រើ.github.io` (មិនមាន https:// ឬ path) → Add។

## ជំហាន ៨ — ចុះឈ្មោះ Admin មុនគេ (ត្រូវធ្វើមុនគេ!)
1. បើកគេហទំព័ររបស់អ្នក → ចុច **ចុះឈ្មោះ** ដោយប្រើ **អ៊ីមែល Admin** ដែលដាក់ក្នុង config.js។
2. ចូលបានភ្លាម មិនបាច់រង់ចាំការយល់ព្រមទេ → អ្នកនឹងឃើញ tab **សំណើ** នៅខាងក្រោយ "ការកំណត់"។

> ត្រូវចុះឈ្មោះ Admin មុនគេ បើមិនដូច្នោះ អ្នកផ្សេងអាចចុះឈ្មោះដោយប្រើអ៊ីមែលនោះមុនអ្នក។

---

## របៀបគ្រប់គ្រងអ្នកប្រើប្រាស់
tab **សំណើ** → បញ្ចូលលេខសម្ងាត់ **1201** → បង្ហាញបញ្ជី៖
- **កំពុងរង់ចាំ** — ឈ្មោះ, អ៊ីមែល, ថ្ងៃចុះឈ្មោះ → ប៊ូតុង **ទទួលសំណើ** និង **លុប**
- **បានយល់ព្រម** — ប៊ូតុង **ផ្ញើអ៊ីមែលកំណត់លេខសម្ងាត់ឡើងវិញ** និង **លុប**
- **បានលុប** — ប៊ូតុង **ស្ដារ**
- ចុច **លុប** ពីរដង (ដើម្បីបញ្ជាក់)។
- ពេលអ្នកប្រើចុះឈ្មោះ គេឃើញទំព័រ "រង់ចាំការយល់ព្រម" ជាមួយទំនាក់ទង Telegram **012 292 604**។ ពេលអ្នកយល់ព្រម ទំព័រនោះបើកកម្មវិធីដោយស្វ័យប្រវត្តិ។

### ហេតុអ្វីមិនបង្ហាញ Password?
Firebase រក្សាទុកលេខសម្ងាត់ជាទម្រង់អ៊ិនគ្រីប ហើយ **គ្មាននរណាអាចមើលបានទេ** (ទាំងអ្នក ទាំង Google)។ ការរក្សាទុកលេខសម្ងាត់ដើមក៏គ្រោះថ្នាក់ដែរ។
ជំនួសមកវិញ ប្រើប៊ូតុង **ផ្ញើអ៊ីមែលកំណត់លេខសម្ងាត់ឡើងវិញ** សម្រាប់អ្នកដែលភ្លេច។

### "លុប" ធ្វើអ្វី?
ទប់ស្កាត់អ្នកប្រើមិនឱ្យចូល ហើយលុបទិន្នន័យកាលវិភាគរបស់គេ។ គណនី Auth នៅតែមាន (ប៉ុន្តែគ្មានសិទ្ធិអ្វីទាំងអស់)។ បើចង់លុបទាំងស្រុង ទៅ Firebase → Authentication → Users → លុបដោយដៃ។

### ទិន្នន័យ
- អ្នកប្រើម្នាក់ៗមានទិន្នន័យកាលវិភាគផ្ទាល់ខ្លួន (រក្សាទុកក្នុង Firestore ក្រោមគណនីខ្លួន) ចូលពីឧបករណ៍ណាក៏បាន។
- ទំហំទិន្នន័យ ≈ 42 KB (អតិបរមា ≈ 80 KB) តិចជាងដែនកំណត់ 1 MiB ក្នុង ១ document ឆ្ងាយណាស់។
- ការប្រើប្រាស់ឥតគិតថ្លៃ៖ អាន 50,000 / សរសេរ 20,000 ក្នុង ១ ថ្ងៃ គ្រប់គ្រាន់សម្រាប់សាលាមួយ។
- ប៊ូតុង **បម្រុងទុក** ក្នុងការកំណត់ ទាញយកឯកសារ .json ទុកក្នុងកុំព្យូទ័រ (ប្រព័ន្ធរំលឹកក្រោយ ៧ ថ្ងៃ)។

## បើមានបញ្ហា
- ចុះឈ្មោះមិនបាន / "unauthorized-domain" → ពិនិត្យជំហាន ៧។
- "Missing or insufficient permissions" → ពិនិត្យថា Rules ត្រូវបាន Publish ហើយអ៊ីមែល Admin ដូចគ្នាក្នុង config.js និង rules។
- មិនឃើញ tab សំណើ → ត្រូវចូលដោយអ៊ីមែលដែលមានក្នុង `adminEmails`។
