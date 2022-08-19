import { apiUrl } from '../env';

export const add = async (book) => {
  const createdBook = { book: [] };
  await fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(() => {
    const {
      item_id: id, title, author, category,
    } = book;
    createdBook.book = [id, [{ title, author, category }]];
  });
  return createdBook;
};
export const remove = async (id) => {
  await fetch(`${apiUrl}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return { id };
};
export const load = async () => {
  let result = [];
  await fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      result = [...Object.entries(data)];
    });
  return { book: result };
};
