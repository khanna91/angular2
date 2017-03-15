import {FsassPage} from './app.po';

describe('fsass App', () => {
    let page: FsassPage;

    beforeEach(() => {
        page = new FsassPage();
    });

    it('should display message saying app works', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('app works!');
    });
});
