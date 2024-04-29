$(document).ready(function() {
    // Task 1: Log message when DOM is ready
    console.log("Let’s get ready to party with jQuery!");
  
    // Task 2: Add class to images inside article
    $('article img').addClass('image-center');
  
    // Task 3: Remove last paragraph in article
    $('article p:last-child').remove();
  
    // Task 4: Set random font size for title
    $('#title').css('font-size', Math.random() * 100);
  
    // Task 5: Add item to list
    $('aside ol').append('<li>New item added to the list!</li>');
  
    // Task 6: Empty aside and add apology paragraph
    $('aside').empty().append('<p>Sorry for the silly list!</p>');
  
    // Task 7: Change background color based on input values
    $('#redInput, #blueInput, #greenInput').on('input', function() {
      const red = $('#redInput').val();
      const blue = $('#blueInput').val();
      const green = $('#greenInput').val();
      $('body').css('background-color', `rgb(${red}, ${green}, ${blue})`);
    });
  
    // Task 8: Remove image when clicked
    $('article img').on('click', function() {
      $(this).remove();
    });
  });
  