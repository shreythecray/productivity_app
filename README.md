# Preparing
1. [Download VS Code](https://code.visualstudio.com/download)
2. [Get started](https://azure.microsoft.com/en-us/get-started/) with Azure and create an Azure account for free
3. Install the [Azure Tools extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-node-azure-pack) on VS Code

# Working with GitHub through Terminal Commands

Clone this repo with the `clone` command:
```bash
git clone "[url]"
//replace [url] with the url of this repo or any other
```

Whenever someone makes changes to the remote repo, make sure to update your code with the `pull` command:
```
git pull
```

When working with branches:
1. use the `branch` command to list all branches and check which one you're on
2. use the `checkout` command to switch into a different, existing branch
3. use the `checkout -b` command to create a new branch and switch into it
```
git branch
git checkout [existing_branch_name]
git checkout -b "[new_branch_name]"
```

And my favoriate trio:
```
git add .
git commit -m "[message_about_your_changes]"
git push
```

# Understanding Serverless

# Creating an Azure Function Locally

Follow Microsoft's documentation to [create a new Azure function locally](https://docs.microsoft.com/en-us/azure/developer/javascript/tutorial/vscode-function-app-http-trigger/tutorial-vscode-serverless-node-create-local).

Here's what the template code will look like:

```javascript
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}
```

<details><summary>Understanding the Template Code</summary>
<br>

`context.log` statements are similar to console.log statements but can be found in the [Azure Portal](portal.azure.com) log for your function
1. Go to the Azure Portal and log in
2. Once you have created ***and deployed*** your Azure function, you should see it appear in your recent resources
3. Click on it and navigate to the function you just created
4. Click on "Code and Test"
5. Open the log at the bottom of the page

<br><br>
</details>

# Integrating APIs

# Building a Notification System

### Mapping It Out

### Simplifying Things
