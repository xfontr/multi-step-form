import type { Page } from "@playwright/test";
import { ROUTES } from "../configs/routes";
import { MOCK_BREED } from "../mocks/mockBreed";
import SELECTORS from "../selectors/landing";

function timeout(ms: number) {
    return new Promise<boolean>((resolve) => setTimeout(resolve, ms, false));
}

async function completeLandingFlow(page: Page) {
    await page.goto(ROUTES.home, { waitUntil: "domcontentloaded" });

    const dropdown = page.locator(SELECTORS.dropdown);
    const dropdownButton = page.locator(SELECTORS.dropdownButton);
    const cta = page.locator(SELECTORS.cta);

    for (let i = 0; i < 5; i++) {
        await dropdown.click();
        await dropdown.clear();
        await dropdown.type(MOCK_BREED, { delay: 50 });

        await dropdownButton.click();

        const item = page.locator(SELECTORS.dropdownItem);

        const clicked = await Promise.race([
            item.click().then(() => true),
            timeout(600),
        ]);

        if (!clicked) continue;

        await cta.click();
        break;
    }
}

export default completeLandingFlow;
