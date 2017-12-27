# onehouraday
Community that expose social projects and people can spend one hour to help a social cause

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
* Before installing, [ download and install Node.js](https://nodejs.org/en/), Node.js 0.10 or higher is required.
* how to [create new barnch](https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches) in github from command line

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
