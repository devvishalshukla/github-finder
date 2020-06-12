# github-finder
Find user information by entering user's github handle

<p> Have used Github api https://api.github.com/users/username to fetch user's information and then display it to the user. </p>

To use this web app (github-finder) first generate a CLIENT_ID and CLIENT_SECRET and paste it in main.js file. Inorder to make it working.

To generate CLIENT_ID and CLIENT_SECRET
1. click on your avatar on top right corner and visit setting
2. Then visit to developer settings
3. Click on OAuth apps and create new OAuth App and register the application 

After registering the application you will receive your CLIENT_ID and CLIENT_SECRET.

I have used two other parameter along with CLIENT_ID and CLIENT_SECRET and they are **sort** and **per_page**.
By default the repositories are sorted in alphabetical order so inorder to sort them by date I have send **sort** and sorting is done on the basis of date repo is created.
The another parameter that is passed to github-api is **per_page** which loads the defined number of results.
