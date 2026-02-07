# Playwright Web Application Testing Project

This project utilizes Playwright for web application testing, following the Page Object Model (POM) pattern for maintainability and scalability.

## Project Setup

To set up the project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/pw-test-web.git
    cd pw-test-web
    ```

2.  **Navigate to the Playwright project directory:**
    ```bash
    cd playwrightWebApp
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

## Running Tests

Tests can be run using the Playwright Test Runner.

*   **Run all tests:**
    ```bash
    npx playwright test
    ```

*   **Run tests in UI mode:**
    ```bash
    npx playwright test --ui
    ```

*   **Run a specific test file:**
    ```bash
    npx playwright test tests/auth/LoginSuccess.spec.ts
    ```

*   **Run tests with a specific project (e.g., Chromium):**
    ```bash
    npx playwright test --project=chromium
    ```

*   **Generate a test report:**
    After running tests, you can view the HTML report:
    ```bash
    npx playwright show-report
    ```

## Page Object Model (POM) Guidelines

The Page Object Model (POM) is a design pattern used in test automation to create an object repository for UI elements within web applications. This improves test maintenance and reduces code duplication.

### Structure

*   Page objects are located in the `pages/` directory, organized by functional areas (e.g., `auth`, `cart`, `inventory`).
*   Each `.ts` file within `pages/` represents a single page or a significant component of a page.

### Best Practices

1.  **Encapsulation:** Each Page Object should encapsulate the services offered by the page, meaning it should expose methods that represent user interactions with that page, rather than exposing the raw locators.
    ```typescript
    // Bad
    await page.locator('#username').fill('testuser');

    // Good
    await loginPage.login('testuser', 'password');
    ```

2.  **Locators:**
    *   Use robust, resilient locators. Prefer roles, text, or test IDs over fragile CSS or XPath selectors that might change frequently.
    *   Locators should be defined as properties within the Page Object class.

3.  **Methods:**
    *   Page Object methods should return other Page Objects when a user action results in navigating to a new page.
    *   Methods should ideally represent a user action and not expose the internal implementation details of the page.
    *   Avoid assertions within Page Objects. Assertions belong in the test files (`.spec.ts`).

4.  **No Test Logic:** Page Objects should not contain test-specific assertions or test logic. Their sole responsibility is to interact with the web page and return the state or navigate to another page.

### Example (LoginPage.ts)

```typescript
import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async navigateTo(): Promise<void> {
    await this.page.goto('/');
  }

  async login(username: string, password_val: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password_val);
    await this.loginButton.click();
  }

  async getErrorMessage(): Promise<string | null> {
    return this.errorMessage.textContent();
  }
}
```

This `README.md` serves as a central guide for anyone working on the Playwright test automation project.