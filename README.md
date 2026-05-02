# Playwright Web Testing Framework

[![Playwright Version](https://img.shields.io/badge/playwright-1.58.2-blue)](https://playwright.dev/)

A robust and scalable web automation testing framework built with [Playwright](https://playwright.dev/) and TypeScript, following the **Page Object Model (POM)** design pattern. This project provides a solid foundation for end-to-end testing of web applications, specifically targeting the [Swag Labs](https://www.saucedemo.com/) demo site.

## 🚀 Key Features

- **Page Object Model:** Clean separation between test logic and UI elements.
- **Custom Fixtures:** Simplified test setup and improved readability using `test.extend`.
- **Cross-Browser Testing:** Support for Chromium, Firefox, and WebKit.
- **Detailed Reporting:** Generates HTML reports and supports trace viewing.
- **Typed Test Data:** Centralized user and test data management.

## 📁 Project Structure

```text
pw-test-web/
├── README.md               # Project documentation
└── playwrightWebApp/       # Core testing project
    ├── playwright.config.ts # Playwright configuration
    ├── package.json        # Dependencies and scripts
    └── src/                # Source code
        ├── data/           # Test data (e.g., users.ts)
        ├── fixture/        # Custom Playwright fixtures and BasePage
        ├── pages/          # Page Object classes (auth, cart, inventory)
        └── tests/          # Test specifications (.spec.ts)
```

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) (v9 or higher)

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/pw-test-web.git
   cd pw-test-web
   ```

2. **Navigate to the web app directory:**
   ```bash
   cd playwrightWebApp
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Install Playwright Browsers:**
   ```bash
   npx playwright install --with-deps
   ```

## 🧪 Running Tests

All commands should be executed from the `playwrightWebApp` directory.

| Command | Description |
| :--- | :--- |
| `npm test` | Run all tests in headless mode. |
| `npm run test:headed` | Run all tests in headed mode. |
| `npx playwright test --ui` | Run tests in the interactive UI mode. |
| `npx playwright test --project=chromium` | Run tests only on Chromium. |
| `npx playwright test src/tests/auth/` | Run all tests in the auth module. |
| `npx playwright show-report` | View the latest HTML test report. |

## 🏗️ Page Object Model (POM) Guidelines

We follow strict POM guidelines to ensure maintainability:

1. **Encapsulation:** Locators are kept private or internal to the Page Object. Expose actions via methods (e.g., `login(user, pass)` instead of exposing `usernameInput`).
2. **Assertions:** Keep assertions in `.spec.ts` files when possible, using Playwright's `expect`.
3. **BasePage:** All page objects extend `BasePage` to share common methods like `navigate()`.
4. **Fixtures:** Use `src/fixture/page-fixture.ts` to inject Page Objects and test data directly into tests.

### Example Usage in Test

```typescript
import { test, expect } from '../../fixture/page-fixture';

test('User should be able to login successfully', async ({ loginPage, users }) => {
  await loginPage.navigate();
  await loginPage.login(users.standard_user.username, users.standard_user.password);
  await expect(loginPage.page).toHaveURL(/inventory.html/);
});
```

## 📊 Reporting

Tests generate an HTML report by default. To view the report after a test run:
```bash
npx playwright show-report
```
Traces are also recorded on first retry for easier debugging of failed tests.
