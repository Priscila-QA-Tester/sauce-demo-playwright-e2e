# 🐛 Bug Report Template (Manual QA)

Use this template every time you find a bug. This follows the international standard used by European and American companies.

---

## 📋 The Template (Copy and paste this into your ticket/Jira)

**Title:** [A short and clear summary of the bug]
**Environment:** [e.g., Windows 11, Google Chrome Version 115]

**Steps to Reproduce:**
1. Navigate to 'https://www.saucedemo.com/'
2. Enter username '...' and password '...'
3. Click on 'Login' button
4. [Add the exact steps you did until the bug happened]

**Expected Result:** 
[What should happen if the system worked perfectly?]

**Actual Result:** 
[What is the wrong thing that actually happened?]

**Severity:** [Critical / High / Medium / Low]

---

## 💡 Severity Guide

* **Critical:** The system is completely broken. The user cannot purchase, cannot log in, or the site crashes. (e.g., the checkout button does not work).
* **High:** An important feature is broken, but there is a workaround available.
* **Medium:** Secondary features are not working properly, but the main purchase flow still works.
* **Low:** Visual errors, typos, wrong colours that do not prevent the user from doing anything. (e.g., a product image is wrong).

---

## 📚 Example of a Completed Bug Report:

**Title:** Login button is not working for standard user
**Environment:** Windows 11, Chrome
**Steps to Reproduce:**
1. Navigate to 'https://www.saucedemo.com/'
2. Enter username 'standard_user'
3. Enter password 'secret_sauce'
4. Click the 'Login' button
**Expected Result:** The user should be redirected to the Products inventory page.
**Actual Result:** The page freezes and nothing happens. No error message is displayed.
**Severity:** Critical

---

## 🐛 MY BUG REPORT: Performance Issue

**Title:** Slow performance when accessing the site after login
**Environment:** Windows 11, Chrome

**Steps to Reproduce:**
1. Navigate to 'https://www.saucedemo.com/'
2. Enter username 'performance_glitch_user'
3. Enter password 'secret_sauce'
4. Click the 'Login' button

**Expected Result:** The user should be redirected to the products page immediately after clicking the login button.

**Actual Result:** After clicking the login button, the system takes almost 5 seconds to load the next page.

**Severity:** High

---

## 🐛 MY BUG REPORT: Checkout Form & Finish Button Error

**Title:** Unable to fill the "Last Name" field and click the "Finish" button
**Environment:** Windows 11, Google Chrome

**Steps to Reproduce:**
1. Navigate to 'https://www.saucedemo.com/'
2. Enter username 'error_user' and password 'secret_sauce'
3. Click the 'Login' button
4. Add an item to the cart and click 'Checkout'
5. Try to type in the "Last Name" field
6. Try to click the "Finish" button on the final page

**Expected Result:** The user should be able to type in the First Name, Last Name, and Zip Code fields. After that, the user should be able to click the "Finish" button to successfully complete the purchase.

**Actual Result:** The "Last Name" field does not accept any input (while First Name and Zip Code work normally). Additionally, on the final checkout page, clicking the "Finish" button does nothing, preventing the user from completing the purchase.

**Severity:** Critical

---

## 🐛 MY BUG REPORT: