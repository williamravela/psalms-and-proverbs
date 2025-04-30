document.addEventListener("DOMContentLoaded", function() {
  loadPsalms();
  loadProverbs();
});

function loadPsalms() {
  const psalmsContent = document.getElementById("psalms-content");
  fetch("https://www.biblestudytools.com/psalms/")
    .then(response => response.text())
    .then(data => {
      psalmsContent.innerHTML = data;
    })
    .catch(error => {
      psalmsContent.innerHTML = "<p>Failed to load Psalms content.</p>";
    });
}

function loadProverbs() {
  const proverbsContent = document.getElementById("proverbs-content");
  fetch("https://www.biblestudytools.com/proverbs/")
    .then(response => response.text())
    .then(data => {
      proverbsContent.innerHTML = data;
    })
    .catch(error => {
      proverbsContent.innerHTML = "<p>Failed to load Proverbs content.</p>";
    });
}
