# Task Management App

This project is about developing a task management app that provides functionality to manage tasks and contacts.

## User stories

In the project directory, you can run:

### User Story 1: View and Manage Todos

As a user,I want to view all my todos in one place,so that I can keep track of my tasks.

- Acceptance Criteria:

  - When I navigate to the "/todos" page, I see a list of all my current todos.
  - Each todo should display its completion status, with completed todos visually distinguished (e.g., strike-through).
  - There should be options to filter todos by "All", "Completed", and "Incomplete".

### User Story 2: Add New Todos

As a user,I want to add new todos to my list,so that I can keep track of new tasks I need to accomplish.

- Acceptance Criteria:

  - On the "/todos" page, there should be a form with a text input and an "Add Todo" button.
  - When I enter a new task and click "Add Todo", the new task should immediately appear in the todo list.
  - The form should clear after adding a todo, ready for the next entry.

### User Story 3: Toggle Todo Completion

As a user,I want to mark todos as completed or incomplete,so that I can track my progress on tasks.

- Acceptance Criteria:

  - Each todo item should have a checkbox or similar interaction method to toggle its completion status.
  - When I mark a todo as complete, it should visually indicate this (e.g., with a strike-through or color change).
  - The change in status should be reflected immediately in the UI.

### User Story 4: Remove Todos

As a user,I want to remove todos from my list,so that I can clean up my task list of completed or unnecessary tasks.

- Acceptance Criteria:

  - Each todo item should have a delete option (button or icon).
  - When I choose to delete a todo, it should be immediately removed from the list without any confirmation (for simplicity; in a production app, you might want a confirmation dialog).

### User Story 5: Contact Us Feature

As a user,I want to have a way to contact the developers or provide feedback,so that I can report issues, suggest improvements, or get support.

- Acceptance Criteria:

  - There should be a "/contact" page accessible from the navigation bar.
  - The page should contain a form with fields for First Name, Last Name, Email, and Comments.
  - The form should update as I type (controlled components), showing that my input is being captured.
  - When I submit the form, there should be some feedback (like a message saying "Thank you for your feedback!"), although in a real scenario, this might involve actual email submission.

### User Story 6: Navigation Between Pages

As a user,I want to easily navigate between different sections of the app,so that I can switch between managing my tasks and contacting support effortlessly.

- Acceptance Criteria:

  - A horizontal navigation bar should be present at the top of both pages.
  - Links should be clearly labeled as "Todos" and "Contact".
  - Clicking on these links should change the URL and load the appropriate page content without reloading the entire app.
