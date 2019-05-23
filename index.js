/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Application} app
 */
module.exports = app => {
  // Your code here
  app.log('Yay, the app was loaded!')

  app.on('issues.opened', async context => {
	  const issue= context.payload.issue
	  const user = issue.login.user
    const issueComment = context.issue({ body: `Thanks @${user} for opening this issue!.... :tada:   Please Assign the Labels and Description and Asssign Someone too :sweat_smile:.... I hope to do it myself in some time... :octocat: ` })
    return context.github.issues.createComment(issueComment)
  })

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
}
