// Define the Post class
class Post {
    constructor(src, title, brief, link, tags) {
        this.src = src;
        this.title = title;
        this.brief = brief;
        this.link = link;
        this.tags = tags;
    }
}


var posts = [
    new Post(
        "https://media.kingston.com/kingston/opengraph/ktc-opengraph-solutions-gaming-time-to-upgrade-your-pc-build.png",
        "Choosing the Right CPU for Your PC Build",
        "Learn how to select the best CPU for your PC build based on your specific needs and budget. Explore the latest processor options and their performance characteristics.",
        "#",
        ["PC Building", "CPU", "Hardware"]
    ),
    new Post(
        "https://www.ebuyer.com/blog/wp-content/uploads/2023/02/shutterstock_660436630.jpg",
        "Graphics Card Selection Guide for Gaming PCs",
        "Discover the key factors to consider when choosing a graphics card for your gaming PC. Explore GPU options, VRAM, and performance benchmarks.",
        "#",
        ["PC Building", "Graphics Card", "Gaming"]
    ),
    new Post(
        "https://www.gamersnexus.net/media/k2/items/cache/9bbd3f71f22b22e28cde46f538994c67_XL.jpg",
        "Motherboard Compatibility and Features",
        "Understand how to pick the right motherboard for your PC build. Learn about socket types, form factors, and the features that suit your needs.",
        "#",
        ["PC Building", "Motherboard", "Compatibility"]
    ),
    new Post(
        "https://i.ytimg.com/vi/v7MYOpFONCU/maxresdefault.jpg",
        "Storage Solutions: HDD vs. SSD vs. NVMe",
        "Compare different storage options for your PC, including HDDs, SSDs, and NVMe drives. Learn about their speed, capacity, and cost considerations.",
        "#",
        ["PC Building", "Storage", "HDD", "SSD", "NVMe"]
    ),
    new Post(
        "https://www.shareus.com/img/computer/how-to-build-a-pc-from-scratch-pc-build-guide/how-to-build-a-pc-from-scratch-pc-build-guide.webp",
        "RAM Selection and Installation Guide",
        "Get insights into selecting and installing RAM (memory) for optimal performance in your PC. Understand RAM types, capacities, and configurations.",
        "#",
        ["PC Building", "RAM", "Memory"]
    ),
   
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

// Event listener to run the addPostsToContainer function on page load
window.addEventListener("load", addPostsToContainer);

// Function to fetch a joke
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
