# Introduction 
This is a simple demonstration of an EF setup, working in .NET Core, with a
React front-end.

This assignment is very open ended, so it was hard to know when to be "done".
As I could spend a considerable amount of time on this.

For the sake of time, and simplicity, I chose to keep the solution small and to
the point.  That's why you won't see a Redux implementation, or Stored
Procedures with EF.

Another thing to note, is that the styles are basic.  In a production app, I
would of course either match what the business asks for, or create something
beautiful.  That's an iterative process, and takes longer than a couple of days, however.

# Getting Started
To run this:

1. CD into the FrontEnd/code-test-front folder.
2. Run `yarn build`. This adds the React front-end to the wwwroot folder.
3. Then start the dotnet core app the way you normally would.

# Notes
The app will have an issue connecting to the database, as I'm using Microsoft's
Secret Manager.

To use this, run:
`dotnet user-secrets init`
Then:
`dotnet user-secrets set "ConnectionStrings.CodeTest" "letmein2020!"`

After this, it should work.

# Deployed
This app is currently deployed at:

        `https://hire-fernando-gomez.azurewebsites.net/`

It's live and you can test it now.