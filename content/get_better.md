---
layout: markdown.hbs

title: Get better
slug: get-better
lead: Get a little better every 2 days
---

I have helped many teams get better at what they do (mostly at Microsoft). There are common patterns.

* Each team had some core business problem. They had a business need to get a different result.
* That problem had been known for years.
* They had tried to fix it several times and failed.
* They now assumed the problem to be unsolvable, due to some aspect of the context (the 4 favorite scapegoats were lack of management support, scale, legacy code, or a hard technical domain).
* Yet each of those teams knew another team that had the same context but didn't have that particular business problem (often a competitor).

They all shared one key problem: **none of them had a systematic way to improve**. Therefore they couldn't address whatever key businesss problem they had.

Don't get me wrong: the teams all had process improvement systems. But they didn't work. Most teams had:

* central process or tools teams who would build infrastructure to make things easier,
* regular retrospectives,
* ScrumMasters and managers who removed obstacles,
* virtual teams of senior individual contributors (ICs) who get together to solve systemic problems,
* bottom-up change lead by motivated ICs with top-down management support.

And things stayed basically the same.

I helped each of these teams make a couple of small but fundamental changes. Within 3-4 weeks, each team was suddenly improving on its own. We created learning organizations. Every time.

Here's what we did.

# Problem statement

> We want an organization which improves itself. Without intervention by an outside person, the team naturally improves its productivity, response time, empathy, predictability, or other important measures a little bit every single day.
> 1. We expect the initial transition to have dramatic results, as we fix the seriously broken problems. These will vary, but a 200%-500% improvement in release cadence and productivity within the first 6 months is common.
> 1. After that, we want to keep up with the 2 year doubling time in productivity that seems to be the market norm.
> 1. People develop and exhibit empathy for other members of the organization, parter organizations, customers, and other stakeholders.
> 1. Variability in output should decrease by at least 50%. Two things which are estimated to be the same cost should become 50% closer to the same actual cost.
> 1. These results should be systematic, resulting from within the organization itself. The organization shall not increase (and optimally should reduce) externalized costs placed on other parts of the company. This includes management, partner teams, marketing, and support.

# Solution characteristics

We attained the above every time we had any solution that fulfilled all of the following. We succeded some of the time when some of these criteria were skipped, but this was the minimum set that consistently delivered success.

1. Safety first.
 * Safety is ensured for managers.
 * Safety is ensured for individual contributors.
1. Real team.
 * Team has members that allow shipping to customers. Can deliver 95% of work items without partners, when work items are end-to-end value.
 * Team has 6-10 members, optimally 8.
 * Identity boundary is the team.
 * Changing product direction or architecture does not require changing team membership.
1. Learn constantly.
 * Organization trusts the team to get things right eventually.
 * Everyone knows that failure is a part of learning and allows for it in self and others.
1. Work together.
 * Team shares execution of the work.
 * Organization uses team accountability and ownership, not individual.
1. Own your destiny.
 * Team owns its process and product. No external mandates. The people who do the work make the decisions about what work to do and how to do it.
 * Team changes one thing at a time (experiment or habit change).
 * Each change is small, giving results within 48 hours.

The smallest set of practices that we could use to attain the above were (in order of introduction):

1. **Champions decide what to do and why**
 1. Identify champions. Anyone that people trust to either bring in new ideas or prevent bringing in bad ideas is a champion. Also identify anyone with veto power (typically management).
 2. Bring all champs and vetoers into one room. Do a performance chain analysis. Pick what changes to make and why.
  * If this does not complete in 60-90 minutes, then you are not ready for change&mdash;any change. Abandon efforts to transition and instead figure out what is blocking change.
  * It does not matter how small the initial agreed change is. As long as the group identifies a part of their system that has to change and the business results that require that change, they have succeeded.
  * The final agreement about what to change and why requires 100% buy-in by all participants. If anyone is not enthusiastic about the direction, they are not bought in and the change will fail. Therefore this meeting is a success only if we get to authentic enthusiasm by 100% of the attendees within 60-90 minutes.
3. **No assholes**
 * The most common cause for failure at this point is one or more people who violates the safety of others on the team. Each such person is typically senior, knows the whole system, is a champion for important characteristics of the old system, has high intelligence and low empathy, is usually male, has high status and authority, and attacks everyone around. Others have given up arguing with this person because it isn't worth the shouting. Each such person is behaving as an abuser in this context.
 * Such abuse happens in something like 25% of all groups which are currently working as individuals in a hierarchical management structure. It is present in pretty much every company.
 * If abuse happens in this group it will be visible during the performance chain analysis. You may see actual emotional abuse performed. You will see others at the meeting will exhibit fear, victim, and enabler behaviors. The facilitator needs to look out for the abuser / victim pattern. If people in the room are always going along with what one particular person says, even changing their positions without evidence to do so, then you have a problem.
 * Changes fail if an abuser convinces everyone to do his approach. You will see tacit or passive agreement, not enthusiastic agreement. If you see this happening, stop. Any attempted change will fail as long as the abuse cycle persists.
  * Usually (95% of the time) this person is not abusive in other contexts. Something about the current system is requiring this behavior from them. Find that systemic cause and fix it.
  * Once in a while (5% or so), the person really is an asshole and should simply be fired.
  * The easiest way to tell the difference is to observe the person in a social context. If they boss their friends around, they are an asshole and should be fired. If they have good give and take with friends, then something about the system at work is requiring this behavior.
  * It is also possible for a facilitator skilled in both emotional intelligence and systems thinking to have a private discussion with the abuser and establish whether the problem stems from the individual or the system. This is also a good way to establish which parts of the system are requiring the abusive behavior. The most common cause is that the abuser has legitimate fear caused by some lack of safety in the system.
1. **Real teams:** Organize people into 6-8 person teams with fixed membership (every person is 100% allocated to one team). Teams do not correspond to product in any way (not technical components and not vertical market segments or experiences).
 * Can be performed by manager dictate or by a yelllow sticky exercise. Yellow sticky exercise gives better results, but depends on managers who are willing to cede power to individual contributors.
2. **Launch**
 1. Mind-shift conversation.
 2. Teams charter and name themselves.
3. **Share work execution**:
 1. End individual ownership of any work. All work is assigned to the whole team or is not done.
 2. Pair or mob on at least 100% of product creation work. Pair other work as pairing skill improves.
4. **2-day process improvement cycle**
 1. Guided by retrospectives.
 2. Each experiment or habit change defines measures and collects and analyzes data.
 3. Experiments are rolled back automatically, unless team decides (on basis of results) to execute a habit change.
5. **Management transparency**: team choices are visible all the way up the management chain, with data to show results of each choice.

This consistently created a learning organization. But learning is only useful if there is something to learn. So we capitalized on the above by also adding (in order of introduction):

1. **Build it right 1**:
 1. Read code by refactoring it.
 2. Replace primitive obsession with whole value.
 3. Get code under test.
2. **Build the right thing**:
 1. Test as spec.
3. **Build it right 2**:
 1. Dependency elimination.
 2. Mock-free unit testing.
 3. Peel and slice for legacy code.

Yes, we introduced refactoring before automated testing. It works better in that order. But that's the subject of another article.

This was the minimum needed to succeed. Several teams added additional practices, such as:

1. Team coach to look out for people who are struggling and help them recover.
2. Designated champions for various causes, including both new and old capabilities.
3. Active participation in communities of practice that extended beyond the team.
4. Asking questions to experienced outside mentors (gurus).
5. Iterative or continuous-form planning.
6. Vertical decomposition (using stories).
7. Stand-up meetings.

Some of these practices provided additional value. However, none of them appeared to be required. Teams did not create individual roles, such as product owner or scrummaster, though teams did usually have several PMs both before and after the initial transformaiton.


