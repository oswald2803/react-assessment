# Kodea Front-end React Coding Assessment

## Overview

To complete this assessment, you will need to write a simple [React](https://facebook.github.io/react/) web app, and provide us the source files to be built.

The purpose of this assessment is to assess your **skills and approach to composing a simple web app** given an API feed. We will also assess the **generated HTML, CSS, and JS** output.

This assessment is expected to take about 2-4 hours.

## What to do?

Your goal is to implement a simple React application, where users will be able to view a job candidate's video responses, comment on the responses & save the data. The application should use Typescript and Next.js. It has to follow the following mock ups:

- https://www.figma.com/design/pwYNuO5HBsBllVtm4kaVBG/FRONTEND-TEST?node-id=0-1&t=e4hDoBVHaSE6GlyM-1

Although its a very basic exercise, we will be looking for simple, well-designed, well-commented and reliable code in the submission.

Please include a `README` with setup instructions, and any other documentation you created as part of your solution.

Also, add very short info for the following to your `README`:

- Are there any improvements you could make to your submission?
- What would you do differently if you were allocated more time?

## Tasks

**REST API**

- Fetch flight results from the provided flights API.

**Itineraries List**

- Create a screen to LIST all of the itineraries with the required filters.

**Itinerary Detail**

- Create a screen to LIST the legs that are part of a selected itinerary

## Flight results

The provided API will return two collections of different items:

- **Itineraries** - These are the containers for your trips, tying together **Legs**, and **prices**. Prices are offered by an **agent** - an airline or travel agent.

- **Legs** - These are journeys (outbound, return) with **duration**, **stops** and **airlines**.

## Submission Guidelines

- A fork of this repository should be submitted to antonio@kodealabs.com with the implemented tasks in no less than 6h of the start of the assesment. However, the assesment is expected to take less than 4h. The amount of time you take to take the assesment has no effect in the results.

## Evaluation Criteria

- Your implementation works as described in the [task](#task).
- Quality of the implemented code
- Design decisions (models, UI design, relationships between entities, etc)
- Videocall or in-person interview to explain the implemented code to the Kodea team and answer further questions

## Requirements

- You can use whatever libraries, frameworks, task runners and build processes you like. React is the only requirement.

## API Usage

API can be launched using npm start. You will need to run npm install once you start working on the project to install dependencies.

| Endpoint                       | Result                                                |
| ------------------------------ | ----------------------------------------------------- |
| /itineraries                   | Lists all available itineraries                       |
| /legs                          | Lists all available legs                              |
| ------------------------------ | ----------------------------------------------------- |

More info about API usage can be found at the [json-server repo](https://github.com/typicode/json-server).

---
