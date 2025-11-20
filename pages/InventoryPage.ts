import { expect, type Page, type Locator } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly pageTitle: Locator;
    readonly cartBadge: Locator;
    readonly cartLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageTitle = page.locator('.title');
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.cartLink = page.locator('.shopping_cart_link');
    }

    async addItemToCart(itemId: string) {
        await this.page.click(`[data-test="add-to-cart-${itemId}"]`);
    }

    async goToCart() {
        await this.cartLink.click();
    }

    async validateTitle(title: string) {
        await expect(this.pageTitle).toHaveText(title);
    }
}
