import React from "react";
import Layout from "../components/Layout";

function About() {
  return (
    <Layout>
      <div className="container-md bg-warning rounded-3 p-3 shadow-lg">
        <h3 className="text-center">React Project 1</h3>
        <br />
        <ul>
          <li>
            <p>
              This is a small project that covers the first half of the course.
            </p>
          </li>
          <li>
            <p>
              It is a SPA displaying a Header with a title, a navbar with four
              buttons, a main section divided into a user add form to the left
              and a content to the right and a footer on the bottom off course.
            </p>
          </li>
          <li>
            <p>The buttons on the navbar have different functionality.</p>
          </li>
          <li>
            <p>
              The first two are color input buttons that change the background
              color of the main window and the text color of the page and the
              other two decide what is shown in the content section, either the
              list of users or the list of posts.
            </p>
          </li>
          <li>
            <p>
              The list of users / posts sis fetched from the Json Placeholder
              free API .
            </p>
          </li>
          <li>
            <p>
              The list of users / posts shown on initial fetch from the API is
              set to maximum 3 elements.
            </p>
          </li>
          <li>
            <p>
              The user add for adds users to the user list that is fetched and
              displayed onload.
            </p>
          </li>
          <li>
            <p>
              The form has data validation, the name cannot be empty, and the
              email must have correct format. Also, it has a gold client
              checkbox.
            </p>
          </li>
          <li>
            <p>
              The content section displays the list of users/posts that came
              from the given API. Each one have a delete button that will delete
              the certain user or post from the current displayed list.
            </p>
          </li>
          <li>
            <p>
              The Footer section displays info for the Project and the
              developer.
            </p>
          </li>
          <li>
            <h6>
              For more information check out the Git Repository &nbsp;
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/marin-stefan/React-Admin_Panel.git"
              >
                here
              </a>
              .
            </h6>
          </li>
        </ul>
      </div>
    </Layout>
  );
}

export default About;
