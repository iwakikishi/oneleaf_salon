# OneLeaf Salon

Website for OneLeaf Salon Hair by Kazuyo in Sierra Madre, CA — <https://www.oneleafsalon.com>

This guide shows you how to change the website yourself — prices, menu, business hours, text — by asking an AI assistant in everyday words. You don't write any code. You type a request like you would in a text message, look at the result, and press a button to publish it.

It works with any of these three AI assistants. You only need **one**.

- **Claude** (by Anthropic)
- **ChatGPT** (by OpenAI)
- **GitHub Copilot** (by GitHub)

---

## Part 1: The basics

### What is an AI assistant?

An AI assistant is a program you talk to by typing. You type a message, it types back — like texting a very fast assistant. The ones in this guide can also open the website's files, make the change you asked for, and show you what they did.

A few things to know:

- **Write normally.** Full sentences, English or Japanese. No special commands.
- **It can make mistakes.** It may misunderstand you. That's why this guide always has you check before anything goes public.
- **You can always ask again.** If the answer is wrong or confusing, just reply: "That's not what I meant" or "Explain that more simply."
- **It doesn't remember past chats.** Each new chat starts fresh, so put everything it needs into your request.

### What is the website made of?

The website is built from a set of files — think of them as the website's **manuscript**. The manuscript has the text, the prices and the pictures. When the manuscript changes, the website changes.

Three services are involved:

| Service | What it does | Think of it as |
| --- | --- | --- |
| **GitHub** | Keeps the manuscript safe and remembers every past version | A safe for the manuscript |
| **Your AI assistant** | Reads your request and edits the manuscript | An assistant who edits it for you |
| **Vercel** | Turns the manuscript into the real website people see | A print shop that prints and displays it |

### What happens when you make a change

1. You ask the AI to change something.
2. The AI edits a **copy** of the manuscript. The real one is untouched.
3. The AI sends you that copy as a **request to change** (on GitHub this is called a "pull request").
4. Vercel makes a **preview** — a private test version of the website with your change in it.
5. You look at the preview. If it's right, you press **Merge** to approve it.
6. Vercel updates the real website.

**Nothing changes on the real website until you press Merge.** If anything goes wrong before that, the real website is not affected. You can't break it by trying.

### Words you'll see

You don't need to memorize these. Come back here when you see one.

| Word | Meaning |
| --- | --- |
| **Repository** (or "repo") | The folder on GitHub that holds the whole manuscript. This website's repository is called **oneleaf_salon**. |
| **Pull request** (or "PR") | A request to change the manuscript. It shows exactly what will change, side by side. |
| **Preview** | A private test version of the website with your change in it. Customers can't see it. |
| **Merge** | Approving a pull request. This is the button that makes your change go live. |
| **Branch** | The AI's working copy of the manuscript. You don't need to do anything with it. |
| **Commit** | One saved edit. You'll see this word on GitHub; you can ignore it. |

---

## Part 2: One-time setup

You do this once. It takes about 20–30 minutes.

### Step 1: Create a GitHub account

**Why:** The manuscript lives on GitHub. You need an account to see the changes and to approve them.

1. Go to <https://github.com/signup>.
2. Enter your email address, a password and a username. Write down the username — you'll need it next.
3. GitHub emails you a code. Type it in.

The free plan is fine for this step.

### Step 2: Ask to be invited

**Why:** The manuscript is locked. Only invited people can change it.

1. Send your GitHub username to the site administrator (iwakikishi).
2. You'll get an email from GitHub with the subject "invitation." Open it and click **View invitation**, then **Accept invitation**.

### Step 3: Set up your AI assistant

Pick **one** and follow only that section.

**Why a paid plan:** The free versions of these AI assistants can chat, but they can't open and edit a website's files. That feature needs a paid plan.

#### Option A: Claude

1. Go to <https://claude.ai> and sign up.
2. Subscribe to **Pro** (or higher).
3. Go to <https://claude.ai/code>.
4. Claude asks you to connect GitHub. Follow it — GitHub opens and asks for permission. Approve it, and GitHub sends you back to Claude.
5. If it then offers to install the "Claude GitHub App," you can click **Skip**. It isn't needed for this website.
6. You're ready when you can pick **oneleaf_salon** as the repository.

#### Option B: ChatGPT

The part of ChatGPT that can edit websites is called **Codex**.

1. Go to <https://chatgpt.com> and sign up.
2. Subscribe to **Plus** (or higher). The Free and Go plans can't edit websites from the browser.
3. On <https://chatgpt.com>, choose **Work in** → **Cloud**, then open **Select environment**.
4. Click **Create environment**. (An "environment" is a workspace where Codex keeps the website's files ready to edit.)
5. Choose **oneleaf_salon** and click **Get started**. If it asks you to connect GitHub, do it — GitHub opens and asks for permission. Approve it.
6. Codex spends a few minutes preparing the website. When it's done, click **Publish** and wait until it says **Environment published**.
7. You're ready. From now on, you can just pick this environment.

#### Option C: GitHub Copilot

Copilot is part of GitHub, so there's no separate account to create or connect.

1. Sign in to <https://github.com>.
2. Go to <https://github.com/features/copilot/plans> and subscribe to **Copilot Pro** (or higher). The free plan can't edit websites.
3. Go to <https://github.com/copilot>.
4. You're ready when you can pick **oneleaf_salon** as the repository.

**Why connect GitHub (Options A and B):** Your AI assistant and GitHub are separate companies. Connecting them gives the AI permission to edit this website's manuscript — and only this one.

> Screens change from time to time. If a button has a slightly different name, look for the closest match. If you're stuck, ask the AI assistant itself: "How do I connect you to my GitHub repository?"

---

## Part 3: Making a change

Do this every time you want to change something.

### Step 1: Open your AI assistant

| AI | Go to | Then |
| --- | --- | --- |
| Claude | <https://claude.ai/code> | Choose **oneleaf_salon** |
| ChatGPT | <https://chatgpt.com> | Choose **Work in** → **Cloud**, then the **oneleaf_salon** environment, then **Start a new task** |
| Copilot | <https://github.com/copilot> | Choose **oneleaf_salon** |

**Why choose oneleaf_salon:** It tells the AI which website to work on.

### Step 2: Type your request and send it

Write what you want, the same way you'd ask a person. For example:

> Please change the price of Woman Haircut from $125 to $130.

Then send it. The AI finds the right spot in the manuscript and makes the edit. This usually takes a few minutes. You can leave the page and come back.

**The real website has not changed.** The AI is working on a copy.

### Step 3: Check what the AI did

When it's done, the AI tells you what it changed. Read it.

**Why:** The AI may have misunderstood. For example, "the haircut price" could mean the women's or the men's. Catching it now is easy; catching it after it's live is annoying.

If something is off, just reply:

- "Not quite. I meant Woman Haircut, not Men Haircut. Please fix it."
- "I don't understand. Can you explain that more simply?"

### Step 4: Turn it into a pull request

The pull request is how the change gets to you for approval.

| AI | What to do |
| --- | --- |
| Claude | Click the **Create PR** button in the **Changes** box next to the chat. |
| ChatGPT | Click the button to open a pull request. |
| Copilot | Reply: "Please create a pull request for this change." |

Can't find the button? Any of them also works if you just reply: "Please create a pull request for this change."

You'll get a link to the pull request on GitHub. Open it.

**Why a pull request:** The AI is never allowed to change the real website directly. Everything goes through a pull request so that you check it first.

### Step 5: Look at the preview

1. On the pull request page, wait 1–2 minutes.
2. A comment from **Vercel** appears with a **Preview** link (it may say "Visit Preview").
3. Open it. You'll see the whole website, with your change in it.

**Why:** The text can be correct but still look wrong — a line that breaks in an odd place, something hard to read on a phone. Check on both a computer and your phone.

Want something else changed? Go back to the same chat with your AI and keep asking. The preview updates after each change.

### Step 6: Publish

1. On the pull request page, scroll down and click the green **Merge pull request** button.
2. Click **Confirm merge**.
3. Wait a few minutes, then open <https://www.oneleafsalon.com>. Your change is live.

If you see a gray **Ready for review** button instead, click it first. Then the green **Merge** button appears.

**Changed your mind?** Just don't click Merge. The real website stays as it is. You can close the pull request with the **Close pull request** button at the bottom.

---

## Part 4: Example requests

Copy one, change the names and numbers, and send it. These work the same in Claude, ChatGPT and Copilot.

### Prices and menu

> Please change the price of Men Haircut from $95 to $100.

> Please raise every price in Cut & Style by $5.

> In Cut & Style, please add a new service: "Kids Bangs Cut", 10 mins, $25. Put it right after "Bangs cut".

> In Perms & Straightening, please remove Digital Perm.

> Please change the description of Woman Haircut to "Includes shampoo, blow dry and styling".

### Business hours and policies

> We're now closed on Sundays. Please update the business hours everywhere they appear on the site.

> On the Cancellation Policy page, please change the notice period from 24 hours to 48 hours.

### Page text

> On the About page, please replace the first paragraph with the following text:
> (paste your new text here)

> On the home page, please add a notice at the top: "We will be closed December 24–26 for the holidays." Make it easy to notice but not too loud.

> Please check the Team page for typos and grammar mistakes. List what you find first, and don't change anything until I say OK.

### Just asking (nothing gets changed)

> What color services and prices are currently on the site? Please show them as a list. Don't change anything.

> Which pages show our phone number? Don't change anything.

### After the AI makes a change

> Please explain what you changed, in simple words.

> Not quite. I meant Woman Haircut, not Men Haircut. Please fix it.

> I looked at the preview. The new notice is too big on a phone. Please make it smaller.

### When something goes wrong

> The pull request shows a red ✕ and says "failed." Please fix it.

> Please undo everything you changed in this chat.

> Please create a pull request that undoes the price change we published yesterday.

### How to write a good request

- **One thing at a time.** Small changes are easy to check. If something goes wrong, you'll know which change caused it.
- **Use exact numbers.** "Make it $130," not "raise it a little." The AI will guess if you're vague.
- **Use the names exactly as they appear on the website.** "Woman Haircut," not "ladies' cut." The AI finds it faster and won't confuse it with something else.
- **Say which page, if you know.** "On the Services page…" stops the AI from changing the same words on another page.
- **Not sure? Ask first.** Add "Tell me your plan before changing anything." The AI will explain and wait for your OK.

---

## Part 5: When things go wrong

| What happened | What to do |
| --- | --- |
| The AI's answer is confusing | Reply: "Can you explain that more simply?" |
| You want to cancel (not merged yet) | Don't click Merge. The real website hasn't changed. Click **Close pull request** if you want to tidy up. |
| You want to undo something that's already live | Ask the AI: "Please create a pull request that undoes the change to [what you changed]." Then do Steps 5–6 again. GitHub keeps every past version, so you can always go back. |
| No Preview link appears | Wait a few minutes and reload the page. If it still doesn't appear, contact the administrator. |
| A red ✕ or "failed" appears | Something went wrong while building the preview. The real website is fine. Ask the AI: "The pull request shows an error. Please fix it." |
| The AI says it can't access the repository | Go back to Part 2, Step 3 and connect GitHub again. If it still fails, ask the administrator to install your AI's GitHub app on **oneleaf_salon**. |
| GitHub says you don't have permission | Your invitation (Part 2, Step 2) may not be accepted yet. Check your email, or ask the administrator to send it again. |
| You're stuck | Send the administrator (iwakikishi) a screenshot of your screen and what you were trying to do. |

---

## Developer notes

Built with Next.js (App Router), React, TypeScript, Tailwind CSS and [shadcn/ui](https://ui.shadcn.com). Every page is statically prerendered; there is no backend or database, and no environment variables are required. Hosted on Vercel: every push to `main` deploys to production, and pull requests get preview deployments.

Requires Node.js 26.x.

```bash
npm install
npm run dev      # http://localhost:3000
```

| Script          | What it does                                                                    |
| --------------- | ------------------------------------------------------------------------------- |
| `npm run dev`   | Start the development server                                                    |
| `npm run build` | Production build, then regenerate `public/sitemap*.xml` and `robots.txt` (`next-sitemap`) |
| `npm run start` | Serve the production build                                                      |
| `npm run lint`  | Run ESLint                                                                      |

Both `package-lock.json` and `pnpm-lock.yaml` are committed. When you add or remove a dependency, update both (`npm install …` and `npx pnpm@10 install --lockfile-only`; pnpm 11 drops the `overrides` section that pnpm 9/10 expect).

### Project structure

```
app/                  Routes (one folder per URL)
  layout.tsx          Root layout: fonts, site-wide metadata, schema.org data, header and footer
  page.tsx            Home page
  about/ team/ services/ contact/
  cancellation-policy/ privacy-policy/
  new-prices/         Price list announced for November 2026 (not linked from the navigation)
  agreement/          Head spa agreement form (not linked from the navigation)
  conditions/         Hair condition checker (not linked from the navigation)
  retail/             Placeholder page
components/           Site components (header, footer, booklet, price list, …)
  ui/                 shadcn/ui primitives
hooks/                React hooks
lib/
  prices.ts           Service menu and prices shown on the site
  utils.ts            `cn()` class-name helper
public/               Images, videos, icons and the generated sitemap
```

Conventions: file names are kebab-case; page components are named after their route (`ServicesPage`); imports use the `@/` alias for the project root.

### Where things live

- **Prices and services** — `priceList` in `lib/prices.ts`. The home page, `/services` and `/new-prices` all render it through `components/price-accordion.tsx`.
- **Business hours, policies, page copy** — directly in the page files under `app/`.
- **Navigation links** — `components/header.tsx` (desktop) and `components/mobile-header.tsx` (mobile); footer links are in `components/footer.tsx`.
- **Booking link** — Setmore (`https://oneleafsalon.setmore.com/oneleaf`), linked from the header and most pages.
