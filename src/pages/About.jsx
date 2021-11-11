import React from "react";
import Layout from "../components/Layout";

function About() {
  return (
    <Layout>
      <div className="bg-warning rounded-3 mx-4 px-3 py-3 shadow-lg">
        <h3 className="text-center">React Project 1</h3>
        <br />
        <ul>
          <li>
            This is a small project that covers the first half of the course.
          </li>
          <li>
            It is a SPA displaying a Header with a title, a navbar with four
            buttons, a main section divided into a user add form to the left and
            a content to the right and a footer on the bottom off course.{" "}
          </li>
          <li>The buttons on the navbar have different functionality. </li>
          <li>
            The first two are color input buttons that change the background
            color of the main window and the text color of the page and the
            other two decide what is shown in the content section, either the
            list of users or the list of posts.{" "}
          </li>
          <li>
            The list of users / posts shown is set to 3 elements 
          </li>
          <li>
            The user add for adds users to the user list that is fetched and
            displayed onload.
          </li>
          <li>
            The form has data validation, the name cannot be empty, and the
            email must have correct format. Also, it has a gold client checkbox.
          </li>
          <li>
            The content section displays a list of users that comes from the
            given API or a list of posts from the API. It is a list of users or
            posts that individually have a delete button that will delete the
            certain user or post from the current displayed list.
          </li>
          <li>
            The Footer section displays info for the Project and the developer.
          </li>
        </ul>
      </div>
    </Layout>
  );
}

export default About;
