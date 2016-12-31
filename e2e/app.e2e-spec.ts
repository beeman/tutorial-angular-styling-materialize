import { TutorialAngularStylingMaterializePage } from './app.po';

describe('tutorial-angular-styling-materialize App', function() {
  let page: TutorialAngularStylingMaterializePage;

  beforeEach(() => {
    page = new TutorialAngularStylingMaterializePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
