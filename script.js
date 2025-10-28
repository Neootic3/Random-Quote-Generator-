const btn = document.getElementById('btn');
const resultEl = document.getElementById('result');

btn.addEventListener('click', () => {
  $.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v2/quotes',
    headers: { 'X-Api-Key': 'c7FQD93kHmI5aya6jKomiA==NDxsdfOGc16wjlmv' },
    contentType: 'application/json',
    data: { category: 'success' },
    success: function(result) {
      const quote = result[0].quote;
      const author = result[0].author;
      $('#result').text(`"${quote}" — ${author}`);
    },
    error: function(jqXHR) {
      console.error('Error: ', jqXHR.responseText);
    }
  });
});