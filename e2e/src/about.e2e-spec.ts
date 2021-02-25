import { browser, logging } from 'protractor';

import { AppPage } from './app.po';
import { AboutPage } from './about.po';

describe('About Page', () => {
    let appPage: AppPage;
    let aboutPage: AboutPage;

    beforeEach(() => {
        appPage = new AppPage();
        aboutPage = new AboutPage();
    });

    it('should navigate to about page', () => {
        appPage.navigateTo();
        appPage.getAboutLink().click();
        expect(aboutPage.getAboutText()).toContain('This is the Angles on Books application');
    });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE,
        } as logging.Entry));
    });
})