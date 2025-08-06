/* To monitor list events */

document.addEventListener('DOMContentLoaded', function() {
  const showMoreBtn = document.getElementById('showMoreBtn');
  const showLessBtn = document.getElementById('showLessBtn');
  const listItems = document.querySelectorAll('#myList li');
  const increment = 4;
  let visibleItems = 4;

  function updateVisibility() {
    listItems.forEach((item, index) => {
      item.style.display = (index < visibleItems) ? 'flex' : 'none'; // 使用flex而不是list-item
    });
    
    showMoreBtn.style.display = (visibleItems >= listItems.length) ? 'none' : 'inline-block';
    showLessBtn.style.display = (visibleItems > 4) ? 'inline-block' : 'none';
  }

  showMoreBtn.addEventListener('click', function() {
    visibleItems = Math.min(visibleItems + increment, listItems.length);
    updateVisibility();
  });

  showLessBtn.addEventListener('click', function() {
    visibleItems = Math.max(visibleItems - increment, 4);
    updateVisibility();
  });

  updateVisibility();
});