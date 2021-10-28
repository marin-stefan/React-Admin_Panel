# JavaScript Advanced - REACT - Proiectul 1

## Contains

#### 1. Header

#### 2. Nav-Bar

#### 3. User-Add-form

#### 4. Content

#### 5. Footer

## Description

This is a small project that covers the first half of the course.It is a SPA displaying a Header with a title,a navbar with four buttons, a main section devided into a user add form to the left and a content to the right and a footer on the bottom offcourse.
The buttons on the navbar have different functionality. The first two are color input buttons that change the background color of the main window and the text color of the page and the other two decide what is shown in the content section, either the list of users or the list of posts.
The user add for adds users to the user list that is fetced and displayed onload. The for has data validation,the name can not be empty and the email must have correct format. Also it has a Gold client checkbox.
The content section displays a list of users that comes from the given API or a list of posts from the API.
It is a list of users or posts that individually have a delete button that will delete the certain user or post from the current displayed list.
The Footer section displays info for the Project and the developer 



## Requirements were :


1. Start by creating a basic React Project.

2. Add a user-add-form with name,email and a checkbox for Gold client.

3. Add a color input button to change the background color of the window,set the initial background to white.

4. Add another color input button that changes text color for the whole app. Choose a default color.

5. Create two new components UserList and UserItem. UserList will be a list of UserItem components.In UserList each UserItem component will have data taken from the url https://jsonplaceholder.typicode.com/users.

6. Create two new components PostList and PostItem. PostList will be a list of PostItem components.In PostList each PostItem component will have data taken from the url https://jsonplaceholder.typicode.com/posts.

7. Create 2 buttons: Show Users and Show posts. Default users will be shown.On click the list shown on the screen must be updated according to the button, showing users for 'Show Users' and showing posts for 'Show Posts'.

8. Add Delete button for every user / post . The buttons will update the displayed list .

9. Add data validation for name and email . No empty names or no incorrect email formats allowed.

10. Add styling for more user-friendly experience , colors,and design 


