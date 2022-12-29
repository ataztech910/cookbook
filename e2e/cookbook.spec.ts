import { test, expect, Page } from '@playwright/test';
import { Configuration, expectations } from './configuration';

test.beforeEach(async ({ page }) => {
    await page.goto(Configuration.HOST + '/login');
    await page.locator('#login').fill(expectations.auth.login);
    await page.locator('#password').fill(expectations.auth.password);
    await page.locator('#submit-login').click();
});

test.describe('Cookbook pages should work correctly', () => {
    test('Main page should have title', async ({ page }) => {
        await page.goto(Configuration.HOST);
        await expect(page.locator('h1')).toHaveText([
            expectations.mainPage.header
        ]);
    });
    test('Articles list should show data',async ({page}) => {
        await page.goto(Configuration.HOST + '/articles');
        await expect(page.locator('h1')).toHaveText([
            expectations.articles.header
        ]);
        await expect(page.locator('button').first()).toHaveText([
            expectations.articles.add
        ]);
    })
    test('Articles item should show data',async ({page}) => {
        await page.goto(Configuration.HOST + expectations.articles.itemUrl);
        await expect(page.locator('h1')).toHaveText([
            expectations.articles.itemHeader
        ]);
    })
    test('Add article should open the modal',async ({page}) => {
        await page.goto(Configuration.HOST + '/articles');
        const buttons = await page.locator('button').first();
        buttons.first().click();
        await expect(page.locator('id=edit').first()).not.toBeHidden();
    })
    test('Edit button should open the modal',async ({page}) => {
        await page.goto(Configuration.HOST + '/articles');
        const editButtons = await page.locator('role=checkbox');
        console.log(editButtons);
        editButtons.first().click();
        await expect(page.locator('id=edit').first()).not.toBeHidden();
    })
    test('Article page should render the page',async ({page}) => {
        await page.goto(Configuration.HOST + '/articles');
        const editButtons = await page.locator('role=checkbox');
        editButtons.first().click();
        await expect(page.locator('id=edit').first()).not.toBeHidden();
    })
})