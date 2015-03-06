---
layout: index.hbs

title: Home
lead: <%= site.lead %>
---

# Welcome to your new site - here's how to change & ship it

This is just markdown. All the source is in the `content` directory.

1. Edit package.json and _config.yml to update URLs, title, and so on to match your site.
1. Write whatever you want using markdown. With the usual formatting. Make pages in the content folder, named to match the page URL.
1. Update the readme template (`docs\README.tmpl.md`) if you need to. The `README.md` file in the root is built from that template with every build.
1. Build the site.

		grunt

2. If you are using a custom domain name, update `static_production_only/CNAME`. If not, delete that file.

Specific directions for how to use the automation and the like are in the [`README.md`](/readme.html). this covers:

* Seeing your site locally.
* Deploying your site to your user's fork and looking at it served from GitHub.
* Shipping your site.
* Several other useful things.