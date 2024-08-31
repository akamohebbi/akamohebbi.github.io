---
layout: none
---

$(document).ready(function() {});




/*
    random post list
*/

function getRandomPostList(count) {
    var posts = [];
    $.getJSON('/posts.json', function(data) {
        posts.push(data[randomIntFromInterval(0, data.length)]);    

        var counter = 1;
        var flag = true;
        do {
            if (counter >= count) {
                flag = false;
                break;
            }

            var t = data[randomIntFromInterval(0, data.length)];
            if (posts.includes(t)) {
                console.log('thid post was repeted')
                continue;
            }
            else {
                console.log('added')
                posts.push(t);
                counter++;    
            } 
        } while (flag);
    });

    console.log(posts);
}




/*
    generate random posts
*/

function generateRandomPosts(count) {
    var posts = getRandomPostList(count);
    console.log(posts);
}




























// random posts
function getRandomPosts(count) {
    var posts = [];
    {% for post in site.posts %}
        posts.push({
            title: '{{ post.title }}',
            url: '{{ post.url }}'
        });
    {% endfor %}
    var randomPosts = [];
    
    var randomNumber = 0;
    var counter = 0;
    do {
        randomNumber = randomIntFromInterval(0, posts.length);
        if (randomNumber.indexOf(randomNumber) > 0)
            continue;
        randomPosts.push(posts[randomNumber]);
        counter++;
        if (counter >= count) break;
    } while (true);

    console.log(randomPosts);
}
