document.addEventListener("DOMContentLoaded", function() {
    // Get all files in the directory
    const files = [
      "exptest.html", // Replace these with actual filenames
      "explore.html",
      "expedition.html",
      // Add other filenames as needed
    ];
  
    // Filter files that start with 'exp'
    const expFiles = files.filter(file => file.startsWith('exp'));
  
    // Get the UL element to append the links
    const expLinks = document.getElementById("expLinks");
  
    // Generate and add links to the UL element
    expFiles.forEach(file => {
      const listItem = document.createElement("li");
      const link = document.createElement("a");
      link.href = file;
      link.textContent = file;
      listItem.appendChild(link);
      expLinks.appendChild(listItem);
    });
  });
  