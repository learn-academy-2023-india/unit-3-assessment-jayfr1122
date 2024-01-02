# Assessment for Unit 3

Being a developer requires an acute attention to detail. The expectation of this assessment is that all instructions are read carefully and followed completely.

A good developer will ask clarifying questions when a task is unclear and use all the resources at their disposal.

The step-by-step instructions [here](https://github.com/LEARNAcademy/Syllabus/blob/main/github/assessments.md) breakdown the git and GitHub process for this assessment.

Assessment should be accessed through the GitHub Classroom link provided to you in Slack.

PRs should be posted _before_ class begins on Tuesday, January 2, 2024.

#### Process

- Accept the assignment via GitHub Classroom link shared with you in Slack
- `cd` into an appropriate location on your local, we recommend the Desktop
- Clone the assessment repository
- `cd` into the assessment
- Create a branch with the unit and your name, e.g `unit-3-sarah-proctor`
- Run $ `yarn` to install the React dependencies
- Run $ `yarn start` to start the server
- Complete all assessment tasks
- Git add files, commit, push to your branch
- Create a pull request and leave the branch open for review!

---

### React Challenge

1. React Debugging: The Card Draw React application has three (3) errors that need to be fixed. Use the console and error messages to guide you to the solution.

2. React Feature: Add functionality to the `Return Cards and Shuffle Deck` button using the `shuffle` function to reset the Card Draw application to its original state.

3. React Concepts: Add comments to the sever (7) notations in the `drawCard` function describing in detail the functionality of the following line of code.

4. STRETCH (optional): Add stylings of your choice to the application. Ensure the styling does not interfere with the card draw functionality.

### Interview Practice Questions

1. What are three (3) syntax difference between HTML and JSX?
<!-- 
HTML use class while JSX uses className.
HTML uses style as an attribute as a string or list of CSS styles while JSX uses style attribute with an object where property names are written camelCase.
HTML allows attribute values to be specified with quotes while JSX has attribute values in curly brackets when they are dynamic.
 -->

2. What is yarn? What file(s) are modified when you run the command yarn in your terminal? 
<!-- 
yarn is an alternative to npm that manages project dependencies, versions, and helps with installing packages.
yarn.lock , package.json, and node_modules are created/modified.
 -->

3. What is the difference between state values and props in React?
<!-- Both are used to manage and use data in React.
State: 
- is updated using setState
- used for dynamic data
- is mutable
- in React components can re render as state changes
- state acts as source of truth for a component. Changes cause a rerender of the component
- manages internal component state, user interactions, storing dynamic data that changes over time
Props: 
- unidirectional from parent to child component
- values passed to child are read only and can not be changed
- parent values must change in order for child values to change
- source of truth for the parent component. Changes to parent cause changes to the child component
- passes data from parent to child components and help make components reusable and configurable
-->


4. STRETCH (optional): What is the difference between a div tag and a span tag?
<!-- 
- div stands for division, marks a block of code that can take in multiple lines of code as a block 
- div utilized mainly for stucturing and layout purposes
- span is utilized in-line andly takes in a line at a time
- span is utilized mainly for styling purposes
 -->

### Looking Ahead: Terms for Next Unit

1. Object-oriented programming: Organizes code into objects as classes a sa way of modeling code as real world entities.
- class = a blueprint for creating objects. Defines a set of attributes/properties and methods/functions that the objects created from the classes will have.
- object = an instance of a class. self contained unit that combines data/attributes and behavior/methods. represent real world entities.
- encapsulation = bundling of data/attributes and methods that operate on data into a single unit/class. only shows pertinent information not how the objects itself works.
- inheritance = allows a class to inherit the properties and methods of anothe class. reuses code and establishes a relationship betwen classes.
- polymorphism = allows objects of different classes to be treated as objects of a common base class.
- abstraction = simplifies complex systems bymodeling classes based on essential properties and behaviors. creating an abstract class that defines a common baseline without providing how it is implemented.

2. Ruby: a dynamic reflective object oriented programming language designs by "Matz"
Ruby is known to for these characterizations:
-object oriented -dynamic typing -interpreted language -garbage collection -expressive syntax -metaprogramming -ecosystem -cross platform

3. Ruby Hashes: data structures that allow you to organize and retrieve data using key value pairs. ie : associative array, dictionary, map

---

### Assessment Review Process

When an instructor reviews a student's assessment the instructor is evaluating the work through the lens of the Dreyfus model of skill acquisition. The Dreyfus model describes how individuals progress through various levels in their learning process of new skills in the following levels: novice, advanced beginner, competent, proficient, expert. For this course students will be evaluated as novice, advanced beginner, or competent skill levels. Skill levels are not grades! Skill levels measure current understanding of a set of topics covered in class.

Assessments are expected to be completed on time. In the event of an emergency, a professional developer will communicate to the instructor and reestablish a deadline suitable to both parties. Assessments turned in late without communication will be evaluated at a lower level of skill acquisition.

### Incomplete

An assessment that is considered incomplete is one that did not meet the requirements of a valid attempt on every question. Incomplete assessments will not be reviewed and will be returned to the student for completion. Students with incomplete assessments will not be able access the next assessment until the current one is complete. An assessment will be considered incomplete due to the following:

- questions with no answer (excluding STRETCH options)
- no pseudo code when requested
- non-working code with no accompanying explanation

### Complete

An assessment that is considered complete is one that met the bare minimum requirements of a valid attempt on every question. An assessment that is considered complete did not display enough effort to reach the novice level of skill acquisition.

### Novice

The novice stage is the first level of skill acquisition. In the novice level, the student is just beginning to understand the skill and requires a step-by-step "recipe" to produce an output. An assessment that is considered at the novice level of skill acquisition is one that met the requirements of a valid attempt on every question while closely following process notes from class to produce:

- basic pseudo code
- code that will output content in the terminal
- "your answers" written in the student's own words
- researched answers written in the student's own words that provides additional context

### Advanced Beginner

The advanced beginner stage is the second level of skill acquisition. In the advanced beginner level, the student can begin to troubleshoot problems on their own and can decide if the "recipe" will be able to produce a particular outcome. An assessment that is considered at the advanced beginner level of skill acquisition is one that met the requirements of a valid attempt on every question while adapting process notes from class to produce:

- pseudo code with proper vocabulary terms
- code that will output correct content in the terminal
- "your answers" written in complete sentences the student's own words that provide partially correct comments
- researched answers written in complete sentences in the student's own words that provides additional context

### Competent

The competent stage is the third level of skill acquisition. In the competent level, the student can decide what information is relevant to solve the problem and can begin to create their own "recipe" to produce a particular outcome. An assessment that is considered at the competent level of skill acquisition is one that met the requirements of a valid attempt on every question while adapting process notes from class as well as from other resources to produce:

- detailed pseudo code with proper vocabulary terms
- code that will output correct content in the terminal following best practices
- "your answers" written in complete sentences the student's own words that provide correct answers
- well researched and detailed answers written in complete sentences in the student's own words that provides additional context
