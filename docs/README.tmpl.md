# {%= name %}

> {%= description %}

## Getting Started

See the main website at <{%= homepage %}>.

## Contributing

There are three main ways to contribute.

* If you see a **new open problem**, [open an issue][new-issue] and we will figure it out.
* If you think you can **contribute to the discussion over open problems**, join the conversations in the [list of open issues][issues].
* If you have an idea that **solves a problem**, [fork us][fork], change the site, and send a pull request.

### How to: describing a problem using an issue

Everything<sup>(1)</sup> starts with a problem statement. If you have an idea, we first need to know the problem you are trying to solve. If you are raising an issue for someone else to solve, we need to know the problem. In either case please start by stating the problem.

We describe all problems in the list of open issues. This applies to website bugs, unclear writing, problems with the methodology, or open problems that you are finding when trying to apply the method in the real world. Everything is fair game.

When describing a problem, please be complete. If possible, give examples. You are trying to spur a conversation, so give people something meaty to chew on.

> (1) Don't bother using issues for trivial changes. If you see a typo, just fork and send us a pull request. No need for big process and discussion around a trivial change. Use issues when you want the community to discuss the problem and come up with a good answer.

### How to: forking, branching, and writing

[Fork our project](https://help.github.com/articles/fork-a-repo) on GitHub and clone it locally. Now you can freely change the site however you want and share it back when you are done.

We work in branches. This makes it easy for people to work on multiple things at once. That's critical because some changes will spawn long discussions. We don't want to block some of your work on a long discussion about an unrelated topic. So create one branch for each improvement you make.

Always create your branch off of the `src` branch. That is the default branch; it's where all the source lives. Periodically fetch any changes to `src` and merge them. There is automation for this:

	grunt integrate

### How to: building the site

Our site build is automated using grunt. First you will have to do a couple installs:

1. Install [node.js](http://nodejs.org/).
2. Install Grunt:

Open a command line at the folder where you cloned the site. Run:

	npm install grunt-cli
	grunt install && bower install

Now you can build the site. In the root directory for the site:

	grunt

This will build the entire site into your `_gh_pages` directory.

### How to: seeing your changes

For a purely local experience you can run a local web server. Serve the `_gh_pages` folder from your local git repo. The site is just static HTML so any web server can handle it.

Alternatively, you can deploy to your GitHub repo and have it served via `_gh_pages`. This requires one-time setup. The same setup is required if you want to deploy the site to live (shipping to live also requires that you be in the owners group for the live repo).

One-tme setup:

	cd gh_pages
	git init
	git remote add origin https://github.com/username/{%= repository.slug %}.git
	git remote add upstream {%= repository.url %}

Deploy to gh-pages in your fork and then look online:

	grunt deploy

Point your browser at <http://username.github.io/{%= repository.slug %}/>.

### How to: submit your pull request

Once you have the site looking like you want, push your branch up to github and send us a pull request.

You will get to provide a description of what you are changing and why. Please include a link to the issue related to your pull request. This makes it a lot easier for the community to track the conversation.

The community will drop by once you have submitted your pull request. We'll hold a discussion on your request's page and on its issue&mdash;as we explore both your solution and the original problem. It is very likely that we'll ask for changes or even fork your fork and send you pull requests. Once everyone agrees about the contribution, we'll pull it into the main project. It will show up on the live site soon thereafter.

### How to: ship to live

First, you need to be in the owners group for the production repository. If you want access, ask {%= author.name %}.

Next, do the one-time setup described above for seeing your changes.

Then:

1. Get all the latest from the main repo and build it locally.

		grunt ship-prep

2. Look at the site. Make sure it is what we want to ship.
3. Update the version number in `package.json` based on the amount of change in the site. Use semantic versioning rules to decide the new version.
4. Perform the ship to live using the automation.

		grunt ship-go

## License

Copyright &copy; 2015 {%= author.name %}

This readme is licensed under a [![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png) Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/). Website build and display source code (excluding content or any tools or applications published to this site under separate license) is licensed under the [{%= licenses[0].type %} license]({%= licenses[0].url %}). Each page of the website is licensed separately; see the footer of each page for its licensing information.

---

Project created by [{%= author.name %}]({%= author.url %}).

[issues]: {%= bugs.url %} "Current open problems"
[new-issue]: {%= bugs.url %}/new "Raise a new open problem"
[fork]: {%= contrib_root %}/fork "Contribute a potential solution to a problem"
