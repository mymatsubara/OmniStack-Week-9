## RocketSeat's OmniStack Week 9 app (front-end, back-end and mobile app)

## About the project
In this week, a back-to-back app for dev spaces booking will be made and deployed using Node.js, React and React Navite.

## Setting up the basic environment (Windows)
List of steps required to set up the developmnet envioroment (it will be updated as the project goes on)
### Installing node
First you'll need to install Chocalatey using PowerShell (run as admin):
```bash
Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```
Then you'll need to instal node itself:
```bash
cinst nodejs.install
```
If you want to check how to install node in more details check [here](https://nodejs.org/en/download/package-manager/).
### Installing Yarn
Just run this simple code on your console:
```bash
cinst yarn
```

## Setting up Back-end
It is recommended to create a separeted folder named **backend**, in which you'll install some dependencies running the following codes:
```bash
yarn add express    #to run the backend
yarn add nodemon -d #to restart the server as soon as a change is applied in dev mode
```
In sequence, you'll need to create a folder named **src** to store all the source code which will be:
- **server.js**: Main server code.
- **routes.js**: Where all your backend app routes will be defined.

Don't forget to create an account on MongoAtlas and to create a cluster to host your app. After that it's recommended that you do the following:
1. Set a new Database Access user.
2. Set the Network Access (you can set it to connect from anywhere).
3. Go back to your cluster tab, and click to connect to you cluster.
4. Set to connect via app, and set the driver as node.js.
5. Copy the connection string (you'll use it on your express app, and don't forget to substitute the <password> and <username> for your registered Database Access user password and username).

Installing moongose via yarn/npm:
```bash
yarn add moongose
```
Export mongoose to your main app (server.js) and connect to the created cluster using the code recently acquired in the MongoAtlas page. After that, create two new folders **models** and **controllers** to apply the [MVC pattern](https://pt.wikipedia.org/wiki/MVC) - note: we don't create a **view** folder because we're developing a backend app without any view modification.

In the **models** folder, create a **User.js** file in order to set up the user info to be stored in the database. Following this, you'll need to create a new file **SessionController.js** in the **controllers** folder, which will receive the request, deal with it and return a response for a session. Following the same pattern, setup the Spot model and Spot controller.

In order to register a Spot, which has a thumbnail, it's needed to install another lib to read and img file since express can't really nativelly understand img files. Thus, you'll need to install multer:
```bash
yarn add multer
```
In order to set some multer configurations, we create a folder called **config** and then a file called **upload.js**.

### To make life easier
In order to test multiple request to the server and have a more controlled development environment, you can download [Insomnia](https://insomnia.rest/). To add a base URL to your project, just press **Ctrl + E** and then put the following JSON to the config:
```JSON
{
  "base_url": "Your base url"
}
```
To refence it, type **base_url** in your Insomnia url bar.