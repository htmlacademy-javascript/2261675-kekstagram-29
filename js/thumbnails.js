const thumbnailTemplate = document.querySelector('#picture').content.querySelector('picture');
const container = document.querySelector('.pictures');

const creatThumbnail = ({ comments, description, likes, url }) => {
  const thubnail = thumbnailTemplate.cloneNode(true);

  thubnail.querySelector('.picture__img').src = url;
  thubnail.querySelector('.picture__img').alt = description;
  thubnail.querySelector('.picture__likes').textContent = likes;
  thubnail.querySelector('.picture__comments').textContent = comments.length;

  return thubnail;
};

const renderThubnails = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = creatThumbnail(picture);
    fragment.append(thumbnail);
  });

  container.append(fragment);
};

export {renderThubnails};

