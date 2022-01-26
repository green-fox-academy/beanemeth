/*
Reuse your BlogPost class
Create a Blog class which can:
-store a list of BlogPosts
and has the following methods:
-add(BlogPost) -> adds a BlogPost to the list
delete(int) -> deletes the BlogPost from the given index
update(int, BlogPost) -> replaces an item at the given index with a new BlogPost*/

'use strict';
import { BlogPost } from "../../week09/blogPost/blogPost";

export class Blog {
    private listOfBlogs: BlogPost[]= [];

    
    //add(BlogPost) -> adds a BlogPost to the list
    add(BlogPost: BlogPost) {
        this.listOfBlogs.push(BlogPost);
    }
    //delete(int) -> deletes the BlogPost from the given index   
    delete(index: number) {
        if (index < this.listOfBlogs.length - 1) {
        this.listOfBlogs.splice(index, 1)
        }
    }
    //update(int, BlogPost) -> replaces an item at the given index with a new BlogPost
    update(index: number, blogPost: BlogPost) {
        this.listOfBlogs.splice(index, 1, blogPost);
    // replaces 1 element at index 4, to be replaced
    }
}

