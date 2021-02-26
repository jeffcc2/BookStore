import { browser, logging } from 'protractor';

import { AppPage } from './app.po';
import { ReviewPage } from './review.po';
import { AboutPage } from './about.po';


describe('Review Page', () => {
    let appPage: AppPage;
    let reviewPage: ReviewPage;
    let aboutPage: AboutPage;

    beforeEach(() => {
        appPage = new AppPage();
        reviewPage = new ReviewPage();
        aboutPage = new AboutPage();
    });

    it('should navigate to review page', () => {
        appPage.navigateTo();
        appPage.getReviewLink().click()
        expect(reviewPage.getReviewText()).toContain('Reviews for Book');
    });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE,
        } as logging.Entry));
    });
});