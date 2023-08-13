const DELETE_SPEED = 750;

async function removeListItem(start, count) {
	const list = document.querySelector('#contents.style-scope.ytd-playlist-video-list-renderer.ytd-playlist-video-list-renderer');
	const children = Array.from(list.childNodes).slice(start);

  children[0].querySelector('button').click();
  await timeWait();
  document.querySelector('ytd-menu-service-item-renderer.style-scope:nth-child(3) > tp-yt-paper-item:nth-child(1)').click();

  if (count > 1) {
    removeListItem(start, count - 1);
  }
}

function timeWait() {
  return new Promise((resolve) => { setTimeout(() => resolve(), DELETE_SPEED) });
}

function listSize() {
  const list = document.querySelector('#contents.style-scope.ytd-playlist-video-list-renderer.ytd-playlist-video-list-renderer');
	const children = list.childNodes;
  return children.length;
}