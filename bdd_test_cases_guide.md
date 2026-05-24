# 🥒 BDD and Gherkin Guide (Test Cases)

Writing Test Cases using BDD (Behavior-Driven Development) is the gold standard for QA Analysts worldwide.

The language used to write these is called **Gherkin**. It is so simple that anyone (even non-technical people) can read and understand it.

---

## 🏗️ The Magic Structure (Given / When / Then)

Every test in Gherkin tells a story and must follow three mandatory steps:

* **GIVEN:** What is the initial context? Where is the user? What is the pre-condition?
* **WHEN:** What action did the user perform? What did they click? What did they type?
* **THEN:** What is the expected result of that action? What should the system show?

*(We also have **AND**, which we use when we need more than one action or validation.)*

---

## 🚨 The Golden Rule (Never Get Lost Again!)

Ask this question for every line you write:

> **"Who is doing this?"**
> - If it's the **user** → use `When` or `And`
> - If it's the **system** → use `Then` or `And`

| Keyword | Who acts | What it describes |
|---|---|---|
| **Given** | — | Initial situation / where the user is |
| **When** | 👤 User | First user action |
| **And** | 👤 User | Additional user actions |
| **Then** | 💻 System | What the system shows/does |
| **And** | 💻 System | Additional system results |

**Quick example:**
```gherkin
When the user clicks 'Finish'         ← 👤 user clicked (action)
Then the system displays "Thank you"  ← 💻 system responded (result)
```

## 📚 Example 1: Successful Login (The Happy Path)

**Feature:** User Authentication on SauceDemo

**Scenario:** Login with a valid user
**Given** the user navigates to the SauceDemo login page ('https://www.saucedemo.com/')
**When** the user fills the username field with 'standard_user'
**And** the user fills the password field with 'secret_sauce'
**And** the user clicks the 'Login' button
**Then** the user should be redirected to the 'Products' page
**And** the shopping cart icon should be displayed

---

## 📚 Example 2: Failed Login (Incorrect Password)

**Feature:** User Authentication on SauceDemo

**Scenario:** Login with an invalid password
**Given** the user navigates to the SauceDemo login page
**When** the user fills the username with 'standard_user'
**And** the user fills the password with 'wrong_password_123'
**And** the user clicks the 'Login' button
**Then** the system should not allow access
**And** the system should display the error message "Epic sadface: Username and password do not match"

---

## 🏋️‍♀️ Practice Exercises:

Here are two examples of correctly written scenarios, breaking down each action step by step:

**Scenario:** Successfully add a backpack to the cart
**Given** I am logged in as 'standard_user' and I am on the Products page
**When** I click on the 'Add to cart' button for the 'Sauce Labs Backpack'
**Then** the shopping cart badge should display the number '1'
**And** the backpack should be visible when I open the cart page

---

**Scenario:** Successfully complete the checkout for a backpack (Full E2E Flow)
**Given** I am logged in as 'standard_user' and I am on the Products page
**When** I click on the 'Add to cart' button for the 'Sauce Labs Backpack'
**And** I click on the shopping cart icon
**And** I click on the 'Checkout' button
**And** I fill in my 'First Name', 'Last Name', and 'Zip/Postal Code'
**And** I click on the 'Continue' button
**And** I click on the 'Finish' button
**Then** the system should display the success message "Thank you for your order!"

---

## 🏋️‍♀️ Training Test Cases:

### 💡 Key concepts learned:
- **Negative Assertion:** Validate what the system should **NOT** show (using `should NOT`)
- **Comments with #:** Add observations and flag possible bugs
- **Given always answers:** *"Where is the user and what is the initial situation?"*

---

### 📝 Challenge 1: Login without filling any fields

# ⚠️ Observation: The system validates one field at a time, prioritising Username.
# When both fields are empty, only "Username is required" is displayed.
# Possible UX improvement: display both error messages simultaneously.

**Scenario:** Login attempt with empty username and password fields
**Given** the user is on the SauceDemo login page
**When** the user clicks the 'Login' button without filling any fields
**Then** the system should display the error message "Epic sadface: Username is required"
**And** the error message "Password is required" should NOT be displayed

---

### 📝 Challenge 2: Login with username filled but empty password

**Scenario:** Login attempt with empty password field
**Given** the user is on the SauceDemo login page
**When** the user fills the username with 'standard_user'
**And** the user clicks the 'Login' button without filling the password
**Then** the system should display "Epic sadface: Password is required"
**And** the error message "Username is required" should NOT be displayed

---

## ⚙️ Setting Up Playwright + BDD (playwright-bdd)

### 💡 What is Boilerplate?
**Boilerplate** = standard configuration code that everyone copies and pastes to set up a project.
> Even senior developers with 10 years of experience copy and paste this! You do NOT need to memorise it — just understand what each part does.

---

### 📁 Project Structure with BDD:
```
test-alone/
├── features/
│   ├── login.feature          ← Write your Gherkin here
│   └── steps/
│       └── login.steps.js     ← JavaScript code that runs each step
├── playwright.config.js       ← Project configuration
└── package.json
```

---

### 🔧 playwright.config.js explained:
```js
// 1. Import Playwright
const { defineConfig } = require('@playwright/test');

// 2. Import playwright-bdd
const { defineBddConfig } = require('playwright-bdd');

// 3. Tell Playwright WHERE the .feature files and steps are
const testDir = defineBddConfig({
  features: 'features/**/*.feature', // ← folder for .feature files
  steps: 'features/steps/**/*.js',   // ← folder for step definitions
});

// 4. General Playwright settings
module.exports = defineConfig({
  testDir,
  use: {
    headless: false,                          // ← opens the browser visibly
    baseURL: 'https://www.saucedemo.com',     // ← base URL of the site
  },
});
```

### 📌 What you need to remember:

| What | Where |
|---|---|
| `.feature` files (Gherkin) | `features/` folder |
| Step definitions (JavaScript) | `features/steps/` folder |
| Project settings | `playwright.config.js` |

### 🔗 How Gherkin connects to JavaScript:
Every Gherkin line must have a matching JavaScript step:
```gherkin
# login.feature
When the user clicks the 'Login' button
```
```js
// login.steps.js
When("the user clicks the 'Login' button", async () => {
  await page.locator('#login-button').click(); // ← the actual action!
});
```

---

### 🌐 Understanding baseURL:
The `baseURL` setting saves you from typing the full website address in every test.

```js
use: {
  baseURL: 'https://www.saucedemo.com', // ← change this to whatever site you are testing!
},
```

**How it changes your tests:**

Without baseURL:
```js
await page.goto('https://www.saucedemo.com/');
```

With baseURL configured:
```js
await page.goto('/'); // ← Just a slash takes you to the correct site!
```

> The baseURL makes your tests cleaner and much easier to update if the website address changes (e.g., from a test environment to production).
