import type { Page } from "@playwright/test";
import { expect, test } from "@playwright/test";
import completeLandingFlow from "../flows/completeLandingFlow";
import SELECTORS from "../selectors/register";

function clickBackButton(page: Page, index: number) {
    return page.locator(SELECTORS.back).nth(index).click();
}

function clickSubmitButton(page: Page, index: number) {
    return page.locator(SELECTORS.submit).nth(index).click();
}

test("register completes a full flow", async ({ page }) => {
    await completeLandingFlow(page);

    const nameInput = page.locator(SELECTORS.name.input);

    await nameInput.fill("Text");
    await clickSubmitButton(page, 0);
    await expect(page).toHaveURL(/step=1/);

    await clickBackButton(page, 1);

    expect(await nameInput.inputValue()).toBe("Text");
    await expect(page).toHaveURL(/step=0/);

    await clickSubmitButton(page, 0);

    const genderInput = page.locator(SELECTORS.gender.input).nth(0);

    await genderInput.click();
    await clickSubmitButton(page, 1);

    await expect(page).toHaveURL(/step=2/);

    const ageInput = page.locator(SELECTORS.age.input).nth(0);

    await ageInput.fill("3");
    await ageInput.press("Enter");
    await expect(page).toHaveURL(/step=3/);

    const weightInput = page.locator(SELECTORS.weight.input).nth(1);

    await weightInput.fill("4");
    await weightInput.press("Enter");

    await expect(page).toHaveURL(/step=4/);
});
