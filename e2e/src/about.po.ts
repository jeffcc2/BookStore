import { by, element } from 'protractor';

export class AboutPage {
    getAboutText() {
        return element(by.css('app-about-page p')).getText();
    }
}