export const profileImageSources = [
  "./assets/images/Profile/carlston_1.png",
  "./assets/images/Profile/carlston_2.png",
  "./assets/images/Profile/carlston_3.png",
  "./assets/images/Profile/carlston_4.png",
];

// export const projects = [
//   {
//     id: 1,
//     title: "3D Modelling",
//     descrip:
//       "I know how to 3D model. I learn't Autodesk Maya in University and I am now using Blender.",
//     thumbnail: "./assets/images/raygun_model.png",
//     github_link: null,
//     website_link: null,
//     other_link: " https://sites.google.com/view/carlstons-portfolio/home",
//   },
//   {
//     id: 2,
//     title: "Invite Cards Project",
//     descrip:
//       "This Project is an invite Cards creation website. I created it to work on my JavaScript skills and knowledge, also learning new things. Like changing the background from an Input Selection and also Uploading your own Images.",
//     thumbnail: "./assets/images/invite_cards_website.png",
//     github_link: "https://github.com/Carlston325/invites",
//     website_link: "https://carlston325.github.io/invites/",
//     other_link: null,
//   },
//   {
//     id: 3,
//     title: "Top Ten",
//     descrip:
//       "This Project is a website that gives the user the latest information on certain topics. For example, movies. I created this website through simple HTML & CSS.",
//     thumbnail: "./assets/images/top_ten_website.png",
//     github_link: "https://github.com/Carlston325/TopTen",
//     website_link: "https://carlston325.github.io/TopTen/",
//     other_link: null,
//   },
//   {
//     id: 4,
//     title: "Gallery Project",
//     descrip:
//       "This Project is a Gallery page where you can input images & Videos. I created it to work on my jQuery skills and gain new knowledge of JavaScript. For example, inputting videos (& images) onto a webpage and being able to input more than 1 image or video to create a Gallery.",
//     thumbnail: "./assets/images/gallery_website.png",
//     github_link: "https://github.com/Carlston325/gallery",
//     website_link: "https://carlston325.github.io/gallery/",
//     other_link: null,
//   },
//   {
//     id: 5,
//     title: "Drone Shop",
//     descrip:
//       "Built with React.js, this is an eCommerce store that sells drones.",
//     thumbnail: "./assets/images/drone_x-268.png",
//     github_link: "https://github.com/Carlston325/techproduct",
//     website_link: "https://carlston325.github.io/techproduct/",
//     other_link: null,
//   },
//   {
//     id: 6,
//     title: "JavaCoats Project",
//     descrip:
//       "This is an eCommerce Products Website Project, I created in React.js.",
//     thumbnail: "./assets/images/javacoats_web_app.png",
//     github_link: "https://github.com/Carlston325/eCommerce",
//     website_link: "https://carlston325.github.io/eCommerce/",
//     other_link: null,
//   },
//   {
//     id: 7,
//     title: "Weather Web App",
//     descrip:
//       "Built with React.js and databases, this Web App offers personalised weather updates. Users select locations to receive accurate and current weather information in a user-friendly interface.",
//     thumbnail: "./assets/images/weather_web_app.png",
//     github_link: "https://github.com/Carlston325/weather_react",
//     website_link: "https://carlston325.github.io/weather_react/",
//     other_link: null,
//   },
//   {
//     id: 8,
//     title: "The Emporium",
//     descrip:
//       "This is an eCommerce Shop to sell things for men, women & kids, this project was created in React.js.",
//     thumbnail: "./assets/images/the_emporium_web_app.png",
//     github_link: "https://github.com/Carlston325/the_emporium_react",
//     website_link: null,
//     other_link: null,
//   },
//   {
//     id: 9,
//     title: "Carlston's Coffee",
//     descrip: "This is a Coffee Shop website built with modern technology.",
//     thumbnail: "./assets/images/carlstons_coffee_full_stack_web_app.jpg",
//     github_link: "https://github.com/Carlston325/carlstons-coffee",
//     website_link: "https://carlston325.github.io/carlstons-coffee/",
//     other_link: null,
//   },
//   {
//     id: 10,
//     title: "Journey of Results",
//     descrip:
//       "I worked for Journey of Results Ltd to build their consulting firm website. I was part of a team and my task was to add functionality to the website. I also learnt SEO & some web design through this experience.",
//     thumbnail: "./assets/images/jor_website.png",
//     github_link: null,
//     website_link: null,
//     other_link: "https://oli7760.wixstudio.com/journeyofresults",
//   },
// ];

import dotenv from "dotenv";
import pg from "pg";

dotenv.config();
const { Pool } = pg;

const user = process.env.DB_USER;
const host = process.env.DB_HOST;
const database = process.env.DB_DATABASE;
const password = process.env.DB_PASS;
const port = process.env.DB_PORT;

const pool = new Pool({
  connectionString: `postgresql://${user}:${password}@${host}.frankfurt-postgres.render.com/${database}`,
  ssl: {
    rejectUnauthorized: false, // For Render's SSL requirements
  },
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
});

export default pool;

// const pool = new Pool({
//   user: user,
//   host: host,
//   database: database,
//   password: password,
//   port: port,
// });
