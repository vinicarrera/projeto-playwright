import { expect, type Page, type Locator } from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly pageTitle: Locator;
    readonly checkoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageTitle = page.locator('.title');
        this.checkoutButton = page.locator('[data-test="checkout"]');
    }

    async validateItemInCart(itemName: string) {
        await expect(this.page.locator('.inventory_item_name')).toHaveText(itemName);
    }

    async goToCheckout() {
        await this.checkoutButton.click();
    }
}
