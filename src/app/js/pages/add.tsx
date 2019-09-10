import * as React from 'react';

/**
 *
 * @constructor
 */
export default function AddModal(): JSX.Element {
  return (
    <>
      <div
        className='modal-background'
        onClick={ () => { goToPage('/'); } }
      >
      </div>
      <section
        role='dialog'
        aria-labelledby='add-modal-title'
        aria-describedby='add-modal-description'
      >
        <h2 id='add-modal-title' className='visually-hidden'>Add a place or category</h2>
        <form onSubmit={ saveCategory }>
          <h3>Add a new place</h3>
          <label htmlFor="placeName">Place name:</label>
          <input type="text" name="placeName" id="placeName"/>
          <input type="submit" value="Add place" />
        </form>
        <form onSubmit={ saveCategory }>
          <h3>Add a new category</h3>
          <label htmlFor="categoryName">Category name:</label>
          <input type="text" name="categoryName" id="categoryName"/>
          <input type="submit" value="Add Category" />
        </form>
      </section>
    </>
  );
}

/**
 *
 * @param event
 */
function savePlace(event: Event): false {
  event.preventDefault();

  // save place

  return false;
}

/**
 *
 * @param event
 */
function saveCategory(event: Event): false {
  event.preventDefault();

  // save category

  return false;
}

/**
 *
 * @param url
 */
function goToPage(url: string): void {
  history.pushState({}, '', url);
}
