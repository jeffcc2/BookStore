import { browser, logging } from 'protractor';

import { AppPage } from './app.po';
import { AboutPage } from './about.po';
import { ReviewPage } from './review.po';

describe('Review Page', () => {
    let appPage: AppPage;
    let aboutPage: AboutPage;
    let reviewPage: ReviewPage;

    beforeEach(() => {
        appPage = new AppPage();
        aboutPage = new AboutPage();
        reviewPage = new ReviewPage();
    });

});