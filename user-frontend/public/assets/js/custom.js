    //
    // $(document).ready(function(){
    //  $.typeahead({
    //       input: '.courseSearch',
    //       order: "asc",
    //       source: {
    //           data: [
    //                "AZ-900 : Microsoft Azure Fundamentals",
    //               "AZ-104 : Microsoft Azure Administratior",
    //               "Google ACE", "AWS Cloud Practitioner",
    //               "AZ-304 : Microsoft Architect Design",
    //               "AZ-500 : Microsoft Azure Security",
    //               "AZ-303 : Microsoft System Design",
    //               "Google Professionl Cloud Engineer",
    //               "AWS CCP : AWS Certified Cloud Professional"
    //               ]
    //       },
    //       callback: {
    //           onInit: function (node) {
    //               console.log('Typeahead Initiated on ' + node.selector);
    //           }
    //       }
    //     });
    // });


  (function() {
    // INITIALIZATION OF HEADER
    // =======================================================
    new HSHeader('#header').init()

    // const courseSearch = HSCore.components.HSList.init('#courseSearch')

    // INITIALIZATION OF MEGA MENU
    // =======================================================
    new HSMegaMenu('.js-mega-menu', {
        desktop: {
          position: 'left'
        }
      })


    // INITIALIZATION OF SHOW ANIMATIONS
    // =======================================================
    new HSShowAnimation('.js-animation-link')


    // INITIALIZATION OF BOOTSTRAP VALIDATION
    // =======================================================
    // HSBsValidation.init('.js-validate', {
    //   onSubmit: data => {
    //     data.event.preventDefault()
    //     alert('Submited')
    //   }
    // })

    HSCore.components.HSQuill.init('.js-quill')



    // INITIALIZATION OF BOOTSTRAP DROPDOWN
    // =======================================================
    HSBsDropdown.init()


    // INITIALIZATION OF GO TO
    // =======================================================
    new HSGoTo('.js-go-to')

    // INITIALIZATION OF STICKY BLOCKS
    // =======================================================
    // new HSStickyBlock('.js-sticky-block', {
    //   targetSelector: document.getElementById('header').classList.contains('navbar-fixed') ? '#header' : null
    // })

  })()


  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Correct', 'Incorrect', 'Unanswered'],
      datasets: [{
        label: 'Result',
        data: [50, 2, 3],
        backgroundColor: [
          'rgba(102, 187, 106, 1)',
          'rgb(239, 83, 80)',
          'rgb(189, 189, 189)'
        ],
        borderColor: [
          'rgba(102, 187, 106, 1)',
          'rgb(239, 83, 80)',
          'rgb(189, 189, 189)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
        legend: {
            // display: false
     },
    }
  });
