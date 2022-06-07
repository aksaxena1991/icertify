
      (function () {
        // INITIALIZATION OF COUNTDOWN
        // =======================================================
        const oneYearFromNow = new Date()

        document.querySelectorAll('.js-countdown').forEach(item => {
          const days = item.querySelector('.js-cd-days'),
            hours = item.querySelector('.js-cd-hours'),
            minutes = item.querySelector('.js-cd-minutes'),
            seconds = item.querySelector('.js-cd-seconds')

          countdown(oneYearFromNow.setFullYear(
            oneYearFromNow.getFullYear() + 1),
            ts => {
              days.innerHTML = ts.days
              hours.innerHTML = ts.hours
              minutes.innerHTML = ts.minutes
              seconds.innerHTML = ts.seconds
            },
            countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS
          )
        })
      })()

      function toggleFullscreen(elem) {
      elem = elem || document.documentElement;
      if (!document.fullscreenElement && !document.mozFullScreenElement &&
      !document.webkitFullscreenElement && !document.msFullscreenElement) {
      if (elem.requestFullscreen) {
      elem.requestFullscreen();
      } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
      } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
      } else {
      if (document.exitFullscreen) {
      document.exitFullscreen();
      } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
      }
      }
      }

      document.getElementById('btnFullscreen').addEventListener('click', function() {
      toggleFullscreen();
      });


    $('.btn-xs').click(function() {
      $('.current-question').removeClass('current-question');
      $(this).addClass('current-question');
    });
        


    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://icertify-tech-1.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();

    $("#showAnswer").click(function(){
      $("#explanationCont").slideToggle(500);
    });
