# Playwright Web Testing Framework

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://jenkins.example.com)
[![Playwright Version](https://img.shields.io/badge/playwright-1.49.0-blue)](https://playwright.dev/)

A robust and scalable web automation testing framework built with [Playwright](https://playwright.dev/) and TypeScript, following the **Page Object Model (POM)** design pattern. This project is designed to provide a solid foundation for end-to-end testing of web applications.

## 🚀 Key Features

- **Page Object Model:** Clean separation between test logic and UI elements.
- **Custom Fixtures:** Simplified test setup and improved readability.
- **Cross-Browser Testing:** Support for Chromium, Firefox, and WebKit.
- **CI/CD Ready:** Integrated with Jenkins for automated test execution.
- **Detailed Reporting:** Generates HTML reports and JUnit XML for test results.

## 📁 Project Structure

```text
pw-test-web/
├── Jenkinsfile             # CI/CD pipeline definition
├── README.md               # Project documentation
├── playwrightWebApp/       # Core testing project
│   ├── playwright.config.ts # Playwright configuration
│   ├── package.json        # Dependencies and scripts
│   └── src/                # Source code
│       ├── data/           # Test data (e.g., users, constants)
│       ├── fixture/        # Custom Playwright fixtures
│       ├── pages/          # Page Object classes (organized by module)
│       └── tests/          # Test specifications (.spec.ts)
└── test-results/           # (Ignored) Local test execution results
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
| `npx playwright test` | Run all tests in headless mode. |
| `npx playwright test --ui` | Run tests in the interactive UI mode. |
| `npx playwright test --project=chromium` | Run tests only on Chromium. |
| `npx playwright test src/tests/auth/` | Run all tests in the auth module. |
| `npx playwright show-report` | View the latest HTML test report. |

## 🏗️ Page Object Model (POM) Guidelines

We follow strict POM guidelines to ensure maintainability:

1. **Encapsulation:** Locators are kept private or internal to the Page Object. Expose actions via methods (e.g., `login(user, pass)` instead of exposing `usernameInput`).
2. **Assertions:** Keep assertions in `.spec.ts` files. Page Objects should only provide actions and state.
3. **Chainable Actions:** Methods that navigate to a new page should return an instance of that Page Object.
4. **Fixtures:** Use `src/fixture/page-fixture.ts` to inject Page Objects directly into tests for cleaner setup.

### Example Usage in Test

```typescript
import { test } from '../fixture/page-fixture';

test('User should be able to login successfully', async ({ loginPage, inventoryPage }) => {
  await loginPage.navigateTo();
  await loginPage.login('standard_user', 'secret_sauce');
  await inventoryPage.expectToBeVisible();
});
```

## 🤖 CI/CD Integration

This project includes a `Jenkinsfile` for automated testing. The pipeline is configured to:
1. Install dependencies.
2. Run tests across all configured browsers.
3. Publish HTML reports and JUnit results.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.