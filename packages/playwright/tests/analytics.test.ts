import test, { expect } from "@playwright/test";
import completeLandingFlow from "../flows/completeLandingFlow";
import SELECTORS from "../selectors/register";
import { sleep } from "../utils/sleep";

test("analytics group assigning", async ({ browser }) => {
    const loops = 10;
    let groupACount = 0;
    let groupBCount = 0;

    for (let i = 0; i < loops; i++) {
        const context = await browser.newContext();
        const page = await context.newPage();

        await completeLandingFlow(page);

        const steps = page.locator(SELECTORS.steps);
        await sleep(100);
        const count = await steps.count();

        if (count === 5) groupACount += 1;
        if (count === 6) groupBCount += 1;

        await page.close();
    }

    expect(groupACount).not.toBeFalsy();
    expect(groupBCount).not.toBeFalsy();

    // eslint-disable-next-line no-console
    console.table({ groupACount, groupBCount });
});
