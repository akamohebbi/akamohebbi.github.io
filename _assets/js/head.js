function randomPosts(count) {
    $.getJSON('/posts.json', function(data) {
        if (data.length == 0) {
            console.log('ERROR: posts count is 0');
            return false;
        }

        var posts = [];
        posts.push(data[randomIntGenerator(0, data.length)]);

        var counter = 1;
        do {
            if (counter >= count)
                break;
            var post = data[randomIntGenerator(0, data.length-1)];
            if (posts.includes(post)) continue;
            posts.push(post);
            counter++;
        } while (true);

        setTimeout(() => {
            for (var i = 0; i < posts.length; i++) {
                $("#randomPostsFirst").after(
                    $("<li></li>").html(
                        $("<a></a>").attr("href", posts[i].url).text(posts[i].title)
                    )
                );
            }
        }, 750);
    });
};

function generateRandomPostsList(post) {
    console.log(post);
}