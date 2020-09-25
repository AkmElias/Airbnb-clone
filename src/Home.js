import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";
function Home() {
  return (
    <div classNmae="home">
      <Banner />
      <div className="home__section">
        <Card
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1O1loDhdQamMzrv4x0wSl-uuVl3aCCnV3Jg&usqp=CAU"
          title="Online experiences"
          description="Unique activities we can do together, led by a world of hosts"
          price=""
        />
        <Card
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2zVc5alQnmPCYxpz2kmlaY6raeVbALxKOaQ&usqp=CAU"
          title="Entire homes"
          description="Cofortable private places, with room for friends and family"
          price=""
        />

        <Card
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKgq0p7G0Sg6NtyA9s6twXCtD-uCP3GOBnqQ&usqp=CAU"
          title="Luxury Hotels"
          description="Cofortable private places, with room for friends and family"
          price=""
        />
      </div>
      <div className="home__section">
        <Card
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCHqxYqfcqUqjwTTrj5pYladH56VmMz17XHw&usqp=CAU"
          title="Online experiences3 Bedroom Flat in Bournemooth"
          description="Superhot with a stunning view of the beachside in Sunny Bournemooth"
          price=""
        />
        <Card
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8eIhvlzqtrppOVWLt8bNc8852c8KLTqcG8Q&usqp=CAU"
          title="Penthouse in London"
          description="Enjoy the amazing sights of London with this stunning penthouse"
          price=""
        />

        <Card
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKgq0p7G0Sg6NtyA9s6twXCtD-uCP3GOBnqQ&usqp=CAU"
          title="Luxury Hotels"
          description="Cofortable private places, with room for friends and family"
          price=""
        />
      </div>
    </div>
  );
}

export default Home;
