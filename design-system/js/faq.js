document.addEventListener('DOMContentLoaded', function() {
    var faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(function(question) {
        question.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default anchor behavior

            // Find the closest parent li element to target the specific answer related to the clicked question
            var parentLi = this.closest('li');
            var answer = parentLi.querySelector('.faq-answer');

            // Check if another answer is already open, if so, close it
            var currentlyOpen = document.querySelector('.faq-answer.active');
            if (currentlyOpen && currentlyOpen !== answer) {
                currentlyOpen.style.display = 'none';
                currentlyOpen.classList.remove('active');
            }

            // Toggle the display of the clicked question's answer
            if (answer.classList.contains('active')) {
                answer.style.display = 'none';
                answer.classList.remove('active');
            } else {
                answer.style.display = 'block';
                answer.classList.add('active');
            }
        });
    });
});
