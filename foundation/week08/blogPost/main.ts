
'use strict';
import { BlogPost } from "./blogPost";
import { Blog } from "../Blog/blog";

let loremIpsum = new BlogPost("John Doe", "Lorem Ipsum", "Lorem ipsum dolor sit amet.", new Date("2000-05-04"));

let waitButWhy = new BlogPost("Tim Urban", "Wait but why", "A popular long-form, stick-figure-illustrated blog about almost everything.", new Date(2010-10-10));

let oneEngineer = new BlogPost("William Turton", "One Engineer Is Trying to Get IBM to Reckon With Trump", "Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.", new Date("2017-03-28"));

// let date: Date = new Date("2019-01-16");  

//let posts= [loremIpsum, waitButWhy, oneEngineer];
let blog = new Blog();
blog.add(loremIpsum)
blog.add(waitButWhy)
blog.add(oneEngineer)
console.log(blog)
blog.delete(1)
console.log(blog)

