import View from './view.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');
  _curPage = 1;

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }

  _generateMarkup() {
    this._curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page 1, and there are other pages
    if (this._curPage === 1 && numPages > 1) {
      return `<span class="pages-info">page ${
        this._curPage
      } of ${numPages}</span> ${this._generateMarkupButton('next')}`;
    }

    // Last page
    if (this._curPage === numPages && numPages > 1) {
      return `${this._generateMarkupButton(
        'prev'
      )}<span class="pages-info">page ${this._curPage} of ${numPages}</span>`;
    }

    // Other page
    if (this._curPage < numPages) {
      return `${this._generateMarkupButton(
        'prev'
      )}<span class="pages-info">page ${
        this._curPage
      } of ${numPages}</span> ${this._generateMarkupButton('next')}`;
    }

    // Page 1, and there are no other pages
    return ``;
  }

  _generateMarkupButton(btn) {
    if (btn === 'next')
      return `  
      <button data-goto="${
        this._curPage + 1
      }" class="btn--inline pagination__btn--next">
          <span>Page ${this._curPage + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
      </button>`;

    if (btn === 'prev')
      return `  
       <button data-goto="${
         this._curPage - 1
       }" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${this._curPage - 1}</span>
       </button>`;
  }
}

export default new PaginationView();
