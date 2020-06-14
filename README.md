# the toomuchof project

front end for the toomuchof project (the teAmo project).

## Things to do

Legends:
- p0 is highest priority, p3 is least.
- XL is max time estimate (2 weeks), S is minimum (single day). Tasks with t-shirt estimate set as S are good first issues. `README.md` fixes are good first issues.

|task|t-shirt size|owner|type|priority/tag|
|:---:|---|---|---|---|
|fix_mobile_view|L|rohnkum|fix|p0|
|blog_system|M|rohnkum|feature|p1|
|router|M|x|feature|p3|
|auth_cognito|M|rohnkum|feature|p2|
|favicon|S|x|fix|p3|
|switch_ts|M|x|fix|p3|
|fix_console_errors|S|x|fix|p1|

## Tech
- [Next.js](https://nextjs.org/) for server-rendered React apps
- [Material-ui](https://material-ui.com/) theming
- [React](https://reactjs.org/) with hooks wuhu (oops, arr!)
- [React-Markdown](https://github.com/rexxars/react-markdown) for blogging with markdown
- [AWS](https://aws.amazon.com) simple infrastructure, coded via the AWS Cloud Development Kit.
   - Infra for backend: Api Gateway, Lambda, Dynamo
   - Infra for frontend: S3

## Links
- starter: https://github.com/mui-org/material-ui/tree/master/examples/nextjs

### Misc
- samples: https://material-ui.com/getting-started/templates/
- store: https://material-ui.com/store/

## Appendix
- [AlexDevero | Todo-hooks-react](https://blog.alexdevero.com/todo-list-app-react-hooks-typescript/)
- [Github/rexxars | React-markdown](https://github.com/rexxars/react-markdown)
- [AWS | AWS Cloud Development Kit](https://github.com/aws/aws-cdk)
- [Material UI | Material UI style basics](https://material-ui.com/styles/basics/)
- [Linuxize | Idea: Website blog style](https://linuxize.com/post/bash-comments/)
- [AlexDevero | Idea: Layout/Web](https://www.alexdevero.com/contact/)
- [Nextjs | fetch data](https://nextjs.org/learn/basics/fetching-data-for-pages)
- [Git connected | A complete guide to react hooks](https://levelup.gitconnected.com/usetypescript-a-complete-guide-to-react-hooks-and-typescript-db1858d1fb9c)
- [Medium/Pfullen.code | React-hooks-install-material-ui-components](https://medium.com/@pfullen.code/use-hooks-to-style-material-ui-components-34f00168aa4f)
- [Pusher | Consume RESTful API react](https://pusher.com/tutorials/consume-restful-api-react)
- [JasonWhatmore | React fetch post request](https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples)
- [Serverless | Serverless next.js](https://www.serverless.com/blog/serverless-nextjs/)

--- 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
