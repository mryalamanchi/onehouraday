
* [Team Values](https://github.com/hjconehour/onehouraday/wiki/Team-Values)
* [What’s the current status of the project and our current mission?](https://github.com/hjconehour/onehouraday/wiki/What%E2%80%99s-the-current-status-of-the-project-and-our-current-mission%3F)
* [What it is expected from collaborators?](https://github.com/hjconehour/onehouraday/wiki/What-it-is-expected-from-collaborators%3F)
* [How do I start?](https://github.com/hjconehour/onehouraday/wiki/How-do-I-start%3F)
* [How people get communicated?](https://github.com/hjconehour/onehouraday/wiki/How-people-get-communicated%3F)
* [How the work is organised?](https://github.com/hjconehour/onehouraday/wiki/How-the-work-is-organised%3F)
* [How to start collaborating](https://github.com/hjconehour/onehouraday/wiki/How-to-start-collaborating)
* [Kanban board](https://github.com/hjconehour/onehouraday/projects/1)
* [Overall roadmap](https://github.com/hjconehour/onehouraday/wiki/Overall-roadmap)


# Our Vision
A fair world. (Simple, but that’s how we see the future)

# Our Mission
Maximise social initiatives impact by making social collaboration an habit on people’s life.

# About 1 Hour a Day
1hour1day.com is a Social Platform that enables people to learn by helping on social innitiatives. 
We want to reduce the barriers present on "Social impact work" and encourage more people to *use their strengths to serve others.*

# What problems we want to solve

1hourAday enables a new ecosystem that enables win-win relations

###  For social projects:  Power up social projects through soft volunteer

If we can just spend a few hours helping a social cause, all together we can do a huge impact.

* This platform aims to remove all the barriers that now prevents people to spend a few time helping on a social project.
* We want to reinforce the "Get a Task Done" volunteer experience 
* We want people to use the stregths to help others 
* We want experts from everyone collaborating with social projects 

###  For people: Enable new environments that lets poeple improve their skills with real impact work

We have seen people frustrated about the following situations:

* Getting blocked and not being able to keep develop their profesional career
* Gaining experience for a new role is hard  (without real experience) 
* Entering the job market is hard.  (Entry requirements are too high and people don't have experience)
* Learning is limited to who you interact and you need to switch jobs to learn from other environment. 

![Homepage](https://user-images.githubusercontent.com/3884690/35480044-712f6ccc-0406-11e8-85b7-fafaaed22600.png)


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
* Before installing, [ download and install Node.js](https://nodejs.org/en/), Node.js 0.10 or higher is required.
* how to [create new branch](https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches) in github from command line
* Mongo DB

### installing 
* clone the project
```
git clone https://github.com/hjconehour/onehouraday.git <targetDirPath>
```
* open <targetDir> from command prompt
```
cd <targetDirPath>
```
* install packages
```
npm install
```
* install nodemon 
```
npm install -g nodemon
```
* install mongoose
```
npm install mongoose
```
* install body-parser
```
npm install body-parser
```

* run project
```
nodemon server.js
```

* Developed backend code for publish project.As frontend is not developed tested backend code using postman client.
Method type:POST
URL : http://localhost:5000/createproject
In postman client go in body tab and select raw and data format as JSON(application/json) and post the following data:
{
	"name": "project1",
	"description": "test project1",
	"type": "health",
	"contact_detail": {
		"contact_type": "1",
		"contact_info": "2",
		"contact_name": "3"
	}
}
