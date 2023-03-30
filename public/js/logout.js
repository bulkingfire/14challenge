const getout = async () => {
    const calback1234 = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (calback1234.ok) {
      document.location.replace('/');
    } else {
      alert(calback1234.statusText);
    }
  };
  
  document.querySelector('#logout').addEventListener('click', getout);
  