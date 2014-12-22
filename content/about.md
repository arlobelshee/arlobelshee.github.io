---
layout: markdown.hbs

title: About
slug: about
lead: <%= site.description %>
contributors:
 - name: Arlo Belshee
   username: arlobelshee
   gravitar_id: 6995191364b77794684fbf3a3d6dacd7
---

<div class="row">
	<div class="col-md-3">
		<div class="bs-sidebar hidden-print" role="complementary">
			<ul class="nav bs-sidenav">
				<li>
					<a href="#history">History</a>
				</li>
				<li>
					<a href="#core+team">Core team</a>
				</li>
				<li>
					<a href="#community">Community</a>
				</li>
			</ul>
		</div>
	</div>
	<div class="col-md-9" role="main">
{{#section "History"}}
{{/section}}
{{#section "Core team"}}

{{site.title}} is maintained by the founding team, with the massive support and involvement of our community.

<div class="list-group bs-team">
{{#each contributors}}
<div class="list-group-item">
{{> gh_badge}}
</div>
{{/each}}
</div>

Get involved with {{site.title}} by <a href="{{pkg.bugs.url}}/new">opening an issue</a> or submitting a pull request.
{{/section}}
{{#section "Community"}}

Stay up to date on the development of {{site.title}} and reach out to the community with these helpful resources.

<!--      <li>Read and subscribe to <a href="http://blog.getbootstrap.com/">The Official {{site.title}} Blog</a>.</li> -->
<!--      <li>Find inspiring examples of people using {{site.title}} at the <a href="http://expo.getbootstrap.com">Bootstrap Expo</a>.</li> -->
* Contribute to the <a href="https://github.com/Scale-Out-Agile/Scale-Out-Agile.github.io/wiki">{{site.title}} wiki</a>.
{{/section}}
	</div>
</div>