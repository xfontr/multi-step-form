import test, { expect } from "@playwright/test";
import { ROUTES } from "../configs/routes";
import completeLandingFlow from "../flows/completeLandingFlow";
import { MOCK_BREED } from "../mocks/mockBreed";
import SELECTORS from "../selectors/landing";

test("landing view persisted breed value", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await completeLandingFlow(page);

    await page.goto(ROUTES.home);
    await expect(page.locator(SELECTORS.dropdown)).toHaveValue(MOCK_BREED);
});
