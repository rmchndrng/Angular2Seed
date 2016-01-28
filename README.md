# Angular2Seed
Angular2 seed project which can be setup easily with Visual Studio Code

Steps I had to follow to get this project up and running using Visual Studio Code

If you have NPM, Visual Studio Code and Typescript installed, you can go directly to Step 6.
(ie. run "npm install" and "npm start" using command prompt at the root folder.)

1. Install Node.js
The project and development depends heavily on npm (Node package manager) to resolve javascript packages. 
Npm is best intalled directly along with the NodeJS installation.(On Windows)

2. Install Visual Studio Code.
https://code.visualstudio.com/

3. Install Typescript
http://www.typescriptlang.org/

4. Followed the Quickstart tutorial provided at Angular site
https://angular.io/
https://angular.io/docs/ts/latest/quickstart.html

5. Went through the Typescript support documentation of Visual studio code to configure it to build the code.
https://code.visualstudio.com/Docs/languages/typescript
(Added settings.json. Please go through the configuration files tsconfig.json and settings.json to understand the various settings for this project.)
settings.json - Added exclusion rules for few files based on extensions and folder names. 
This will prevent them from showing up in the Visual studio code navigator.

6. Run the command "npm install" to install all the dependencies specified in package.json using command prompt at the root folder.

7. Run the command "npn start" to start a lite server and run the sample application.(script specified in package.json) using command prompt at the root folder.
It calls the typescript compiler in watch mode based on tsconfig.json settings and starts the server on port 3000. 
So whenever you change a ts file, the compiler will automatically transpile to JS and the server will reload the corresponding page automatically.
This makes the development experience very easy.

The application is up and running. Dive deep into each of the configuration files and explore the various settings. 
Understanding them will definitely help during development.

8. Debugging the application
Install the Visual studio extension - Debugger for Chrome
https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome
https://code.visualstudio.com/docs/editor/extension-gallery?pub=msjsdiag&ext=debugger-for-chrome
Added the file launch.json containing a configuration to attach to chrome running with remote debugging enabled at port 3001
Inorder to attach the debugger, first you should start chrome with remote debugging enabled.
Ensure no other chrome instance is running before starting the chrome with remote debugging enabled.
Run the command "chrome --remote-debugging-port=3001" from command prompt.
Press F5 in Visual Studio code to attach the debugger. 
Place breakpoints wherever you need and navigate to the application via the chrome(In which the remote debugging has been enabled.).

Happing coding and enjoy Angular2 with Visual Studio Code.
 
