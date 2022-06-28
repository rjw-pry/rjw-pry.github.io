$(() => {
  let active = false;
  $(".envelope-wrapper .heart").on('click', () => {
    active = true;
    $('.envelope-wrapper').addClass('flap')
  });

  $(".envelope-wrapper .close-icon").on('click', () => {
    active = false;
    $('.envelope-wrapper').removeClass('flap')
    $('.running-btn-wrapper').css({ transform: 'none' })
  });


  const pickRandomPosition = function () {
    if (active) {
      const btn = $(this);
      const horizontalRange = window.innerWidth * 0.5;
      const vertialRange = window.innerHeight * 0.5;
      const left = Math.floor(Math.random() * horizontalRange - horizontalRange / 2.0);
      const top = Math.floor(Math.random() * vertialRange - vertialRange / 2.0);
      $(btn).css({ transform: `translate(${left}px, ${top}px)` });
    }
  }
  $('.running-btn-wrapper').on('click', pickRandomPosition)
  $('.running-btn-wrapper').on('mouseover', pickRandomPosition)

});

$(() => {
  $(".agree-btn-wrapper").on('mouseenter', () => {
    $('.squirrel-wrapper').addClass('active')
    $('.flower-wrapper .flower').addClass('switch')
  });

  $(".agree-btn-wrapper").on('mouseleave', () => {
    $('.squirrel-wrapper').removeClass('active')
    $('.flower-wrapper .flower').removeClass('switch')
  });

  $(".agree-btn").on('click', () => {
    $('.squirrel-wrapper').addClass('active')
    $('.flower-wrapper .flower').addClass('switch')
    setTimeout(() => {
      $('.bg-wrapper').fadeOut('slow', () => {
        $('.secondary-scene').css({ opacity: '1.0' });
      });
    }, 1000)
  })
})

$(() => {
  const baseLine = new Date('2022-06-26 22:00:00');
  const updateTimer = () => {
    const timeOffset = Date.now() - baseLine.valueOf();
    const day = Math.floor(timeOffset / (3600 * 1000 * 24));
    const timeInDay = timeOffset % (3600 * 1000 * 24);
    const hour = Math.floor(timeInDay / (3600 * 1000));
    const timeInHour = timeInDay % (3600 * 1000);
    const minute = Math.floor(timeInHour / (60 * 1000));
    const timeInMinute = timeInDay % (60 * 1000);
    const second = Math.floor(timeInMinute / 1000);

    $('#timer').text(`${day} days`)
  }
  setInterval(updateTimer, 1000);
  updateTimer();
})