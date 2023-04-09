import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="mb-4">
        Welcome to Keyboard Warrior, where two players compete to see who is faster at typing! Our game was developed by four enthusiastic programmers - Owaise, Fahad, Chandra Sekhar, and Sahil - as part of a 48-hour hackathon project. We came up with the idea for this game because we wanted to create a fun and engaging way for people to improve their typing skills.
      </p>
      <p className="mb-4">
        Our game is easy to play, but challenging enough to keep you coming back for more. Start typing away! Our team has put a lot of effort into making this game as enjoyable as possible for our users. We’ve designed it to be intuitive and user-friendly, with sleek graphics and smooth gameplay so everyone can have fun playing our game. We’re proud of what we’ve accomplished in such a short amount of time.
      </p>
      <p className="mb-4">
        We hope that our typing game will help people improve their typing skills while also having fun. So why not give it a try and see how fast you can type? Thank you for visiting our website, and we hope you enjoy playing our game!
      </p>
      <div>
        <img width={200} src='https://gifdb.com/images/file/3d-fast-keyboard-typing-b1m81hlq3dy8k03w.gif' alt="image" />
      </div>
    </div>
  );
};

export default About;
