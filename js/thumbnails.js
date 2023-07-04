const thumbnailsTemplate = document.querySelector('#picture').content.querySelector('picture');
const container = document.querySelector('.picture');

const creatTabnails = ({comments, description, likes, url }) => {
  const thubnail = thumbnailsTemplate.cloneNode(true);

  thubnail.querySelector('.picture__img').src = url;
  thubnail.querySelector('.picture__img').alt = description;
  thubnail.querySelector('.picture__likes').textContent = likes;
  thubnail.querySelector('.picture__comments').textContent = comments.length;

  return thubnail;
};

const renderThubnails = (picture) => {
  const fragment = document.createDocumentFragment();
  picture.forEach((picture) => {
    const thubnail = creatTabnails(picture);
    fragment.append(thubnail);
  });

  container.append(fragment);
};

export {renderThubnails};
