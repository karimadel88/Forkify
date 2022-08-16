import icons from "url:../../img/icons.svg";
import View from "./view";

class ResultsView extends View {
  _parent = document.querySelector(".results");
  _errorMessage = "No recipes found for your query! Please try again ;)";
  _message = "";

  _generteHtmlMarkup() {
    return `
    ${this._data
      .map((rec) => {
        return `
        <li class="preview">
            <a class="preview__link preview__link--active" href="#${rec.id}">
                <figure class="preview__fig">
                <img src="${rec.image}" alt="${rec.title}" />
                </figure>
                <div class="preview__data">
                <h4 class="preview__title">${rec.title}</h4>
                <p class="preview__publisher">${rec.publisher}</p>
                </div>
                <!--<div class="preview__user-generated">
                    <svg>
                    <use href="${icons}#icon-user"></use>
                    </svg>
                </div>
                </div>
                -->
            </a>
        </li>
    `;
      })
      .join("")}
`;
  }
}

export default new ResultsView();
