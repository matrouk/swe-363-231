var posts = [
    {
        src: "https://media.kingston.com/kingston/opengraph/ktc-opengraph-solutions-gaming-time-to-upgrade-your-pc-build.png",
        title: "Choosing the Right CPU for Your PC Build",
        brief: "Learn how to select the best CPU for your PC build based on your specific needs and budget. Explore the latest processor options and their performance characteristics.",
        link: "#",
        tags: ["PC Building", "CPU", "Hardware"]
    },
    {
        src:"https://www.ebuyer.com/blog/wp-content/uploads/2023/02/shutterstock_660436630.jpg",
        title: "Graphics Card Selection Guide for Gaming PCs",
        brief: "Discover the key factors to consider when choosing a graphics card for your gaming PC. Explore GPU options, VRAM, and performance benchmarks.",
        link: "#",
        tags: ["PC Building", "Graphics Card", "Gaming"]
    },
    {
        src:"https://www.gamersnexus.net/media/k2/items/cache/9bbd3f71f22b22e28cde46f538994c67_XL.jpg",
        title: "Motherboard Compatibility and Features",
        brief: "Understand how to pick the right motherboard for your PC build. Learn about socket types, form factors, and the features that suit your needs.",
        link: "#",
        tags: ["PC Building", "Motherboard", "Compatibility"]
    },
    {
        src:"https://i.ytimg.com/vi/v7MYOpFONCU/maxresdefault.jpg",
        title: "Storage Solutions: HDD vs. SSD vs. NVMe",
        brief: "Compare different storage options for your PC, including HDDs, SSDs, and NVMe drives. Learn about their speed, capacity, and cost considerations.",
        link: "#",
        tags: ["PC Building", "Storage", "HDD", "SSD", "NVMe"]
    },
    {
        src:"https://www.shareus.com/img/computer/how-to-build-a-pc-from-scratch-pc-build-guide/how-to-build-a-pc-from-scratch-pc-build-guide.webp",
        title: "RAM Selection and Installation Guide",
        brief: "Get insights into selecting and installing RAM (memory) for optimal performance in your PC. Understand RAM types, capacities, and configurations.",
        link: "#",
        tags: ["PC Building", "RAM", "Memory"]
    }

  ];


  function addPostsToContainer() {
    var postContainer = document.getElementById("postContainer");

 
    posts.forEach(function (post) {
      var postElement = document.createElement("div");
      postElement.classList.add("post");

 
      var postTitle = document.createElement("h2");
      postTitle.textContent = post.title;

      var postImage = document.createElement("img");
      postImage.src = post.src;
      postImage.alt = post.title;

      var postBrief = document.createElement("p");
      postBrief.textContent = post.brief;

      var postLink = document.createElement("a");
      postLink.href = post.link;
      postLink.textContent = "Read More";

      // Append the elements to the post container
      postElement.appendChild(postTitle);
      postElement.appendChild(postImage);
      postElement.appendChild(postBrief);
      postElement.appendChild(postLink);

      postContainer.appendChild(postElement);
    });
  }


  window.addEventListener("load", addPostsToContainer);

  function fetchJoke() {
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const jokeOutputDiv = document.getElementById('jokeOutput');
            jokeOutputDiv.innerHTML = `
                <h3>${data.setup}</h3>
                <p>${data.punchline}</p>
            `;
        })
        .catch(error => {
            console.error('There was an error fetching the joke:', error);
        });
  }