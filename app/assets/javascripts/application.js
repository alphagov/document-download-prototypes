/* global $ */
/* global GOVUK */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  // Use GOV.UK shim-links-with-button-role.js to trigger a link styled to look like a button,
  // with role="button" when the space key is pressed.
  GOVUK.shimLinksWithButtonRole.init()

  // Show and hide toggled content
  // Where .multiple-choice uses the data-target attribute
  // to toggle hidden content
  var showHideContent = new GOVUK.ShowHideContent()
  showHideContent.init()

  var now = new Date();
  now.setDate(now.getDate()+7);

  day = now.getDay();
  calendarDate = now.getDate();
  month = now.getMonth();

  var dayName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  var dayName = dayName[day];

  var monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  var monthName = monthName[month];

  var oneWeeksTime = dayName + " " + calendarDate + " " + monthName + " 2017"

  $( "span.document-expiry-date" ).replaceWith( oneWeeksTime );
})

$(function (){

    $(".oneTimeDownload").click(function() {
        window.location.href = "/zj4R1c51Fk4f/downloaded"
    });

})

$(function (){

    $(".oneOfTwoDownload").click(function() {
        window.location.href = "/m7UcKjB70WLa/downloaded-1st-time"
    });

})

$(function (){

    $(".twoOfTwoDownload").click(function() {
        window.location.href = "/m7UcKjB70WLa/downloaded-2nd-time"
    });

})


$(function (){

    $("downloadLink").click(function() {
        window.location.href = "/zj4R1c51Fk4f/downloaded"
    });

})
