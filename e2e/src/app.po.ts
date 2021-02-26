import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }
  
  getAboutLink() {
    return element(by.cssContainingText('app-root a', 'About'));
  }

  getReviewLink() {
    return element(by.cssContainingText('app-root app-book-page app-book-list a', 'Design Patterns'));
  }
}
