import { by, element } from 'protractor';

export class ReviewPage {
    getReviewText() {
        return element(by.css('app-review-page p')).getText();
    }
}