document.addEventListener('DOMContentLoaded', function () {

  // VIDEO

  let video = document.querySelector('.video-block__video')
  document.querySelector('.btn--play').addEventListener('click', () => {
    document.querySelector('.btn--play').classList.toggle('btn--play-none')
    document.querySelector('.video-block__video').classList.toggle('video-block__video--active')
    video.setAttribute('src', 'https://www.youtube.com/embed/KvUgaHTNit4?autoplay=1')
  });

  // SIDEBAR

  document.querySelector('.sidebar__btn-wrap--mob').addEventListener('click', () => {
    document.querySelector('.sidebar--mob').classList.toggle('sidebar--mob--active')
    document.querySelector('.sidebar__btn--mob').classList.toggle('sidebar__btn--mob--active')
    document.querySelector('body').classList.toggle('body--scroll-none')
  });

  document.querySelector('.sidebar--mob').addEventListener('click', function () {
    this.classList.remove('sidebar--mob--active')
    document.querySelector('.sidebar__btn--mob').classList.toggle('sidebar__btn--mob--active')
    document.querySelector('body').classList.remove('body--scroll-none')
  });

  document.querySelector('.sidebar-wrap--mob').addEventListener('click', function (e) {
    e.stopPropagation();
  });

  // REVIEW_SLIDER

  new Swiper('.review__slider', {
    initialSlide: 2,
    slidesPerView: 1,
    pagination: {
      el: '.review-people',
      clickable: true,
      renderBullet: function (index, className) {
        return '<div class="' + 'background-bullet background-bullet' + (index + 1) + ' ' + className + '">' + '</div>';
      },
    },
  })
});