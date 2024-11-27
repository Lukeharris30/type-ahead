import './style.css'

import { setupTypeAhead } from './typeahead.ts'
const typeaheadList = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape', 'honeydew', 'kiwi', 'lemon', 'mango', 'nectarine', 'orange', 'pear', 'quince', 'raspberry', 'strawberry', 'tangerine', 'ugli', 'vanilla', 'watermelon', 'ximenia', 'yellow', 'zucchini', 
  'apple-sauce'
]

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/`
<div class="typeahead-container">

  <input type="search" id="search" autocomplete="off"/>

  <div id="list-options">
  </div>

</div>
`

setupTypeAhead(document.querySelector<HTMLInputElement>('#search')!, typeaheadList, document.querySelector<HTMLDivElement>('#list-options')!)
