const container = async (event) => {
    event.preventDefault();
  
    const dictator = document.querySelector('#post-name').value.trim();
    const lists = document.querySelector('#post-desc').value.trim();
  
    if (dictator && lists) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name: dictator, description: lists }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('ERROR');
      }
    }
  };
  
  const removebutton = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/post/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('ERROR');
      }
    }
  };
  
  document
    .querySelector('.new-post-form')
    .addEventListener('submit', container);
  
  document
    .querySelector('.post-list')
    .addEventListener('click', removebutton);
  