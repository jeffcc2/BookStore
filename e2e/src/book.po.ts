import { by, element } from 'protractor';

export class BookPage {
    bookExists(title: string) {
        return element(by.linkText(title)).isPresent();
    }

    getInputControl(id: string) {
        return element(by.css(`app-book form input#${id}`));
    }
    
    getTitleControl() {
        return element(by.css('app-book-form input#title'));
        // return this.getInputControl('title');
    }
    
    getAuthorControl() {
        return element(by.css('app-book-form input#author'));
        // return this.getInputControl('author');
    }

    clickAddBook() {
        return element(by.buttonText('Add Book')).click();
    }

    addBook(title: string, author: string) {
        this.getTitleControl().sendKeys(title);
        this.getAuthorControl().sendKeys(author);
        this.clickAddBook();
    }
}