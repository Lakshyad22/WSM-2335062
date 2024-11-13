// Function to display the article in the modal
function showArticle(title, content) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalContent').innerText = content;
    document.getElementById('articleModal').style.display = 'block';
  }
  
  // Function to close the modal
  function closeModal() {
    document.getElementById('articleModal').style.display = 'none';
  }
  
  // Close modal when clicking outside the modal content
  window.onclick = function(event) {
    if (event.target == document.getElementById('articleModal')) {
      closeModal();
    }
  };
  